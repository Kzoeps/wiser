import React, { useCallback, useEffect, useRef } from "react";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import TextInput from "../../components/text-input/text-input";
import { IMessage } from "./types/chat.types";
import { v4 as uuidv4 } from "uuid";
import MessageDisplay from "./components/message-display/message-display";
import { COUNTRIES, MessageConfig } from "./constants/chat.constants";
import TypingDot from "./components/typing-dot/typing-dot";
import Message from "../../components/message/message";
import Send from "../../assets/send.mp3";
import Receive from "../../assets/rec.mp3";
import { useLoaderData } from "react-router-dom";
import { useIndexedDB } from "react-indexed-db";
import { getSystemPrompt } from "../../utils/wiser.util";
import { IConversation } from "../../types/wiser.types";

const filterMessages = (messages: IMessage[]) => {
  return messages.map(({ content, role }) => ({
    content,
    role,
  }));
};
const talkToGPT = async (
  messages: IMessage[],
  country: keyof typeof COUNTRIES,
  title: string,
  signal?: AbortSignal
) => {
  const response = await fetch(`/api/talk`, {
    method: "POST",
    body: JSON.stringify(
      filterMessages([getSystemPrompt(country, title) as IMessage, ...messages])
    ),
    signal,
  });
  return await response.json();
};
export default function Chat() {
  const messageArea = useRef<HTMLDivElement | null>(null);
  const sendRef = useRef<HTMLAudioElement | null>(null);
  const receiveRef = useRef<HTMLAudioElement | null>(null);
  const [isTyping, setIsTyping] = React.useState<boolean>(false);
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const { update } = useIndexedDB("conversations");
  const { conversation } = useLoaderData() as { conversation: IConversation };

  const setUpMessages = useCallback((data: any, messages: IMessage[]) => {
    const systemMessage = data?.choices?.[0]?.message;
    let newMessages = [...messages];
    if (systemMessage) {
      newMessages = [...newMessages, { ...systemMessage, id: uuidv4() }];
      setMessages(newMessages);
      receiveRef?.current?.play();
    }
    return newMessages;
  }, []);

  const scrollToBottom = () => {
    messageArea.current?.scrollTo(0, messageArea.current?.scrollHeight);
  };

  const handleMessage = async (message: string) => {
    try {
      let newMessages = [
        ...messages,
        { content: message, role: "user", id: uuidv4() },
      ] as IMessage[];
      setMessages(newMessages);
      sendRef?.current?.play();
      setTimeout(() => setIsTyping(true), 500);
      const data = await talkToGPT(
        newMessages,
        conversation.country,
        conversation.title === "init :)" ? "" : conversation.title
      );
      newMessages = setUpMessages(data, newMessages);
      await update({ ...conversation, messages: newMessages });
    } catch (e) {
      console.error(e);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    setMessages(conversation?.messages || []);
  }, [conversation.id, conversation.messages]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      w={"100%"}
      maxH={"100vh"}
    >
      <Box
        ref={messageArea}
        overflowY={"auto"}
        display={"flex"}
        flexDirection={"column"}
        height={"100vh"}
        mb={3}
      >
        <Box display={"flex"} w="100%" alignItems={"flex-end"} gap={"10px"}>
          <Avatar
            name={COUNTRIES[conversation.country].character}
            src={COUNTRIES[conversation.country].img}
            size={"xs"}
            mb={2}
          />
          <Flex direction="column" w={"100%"}>
            <MessageDisplay messages={messages} />
            {isTyping && (
              <Message
                bg={MessageConfig.system.bg}
                borderBottomLeftRadius={
                  MessageConfig.system.borderBottomLeftRadius
                }
                borderBottomRightRadius={
                  MessageConfig.system.borderBottomRightRadius
                }
              >
                <TypingDot />
              </Message>
            )}
          </Flex>
        </Box>
      </Box>
      <TextInput
        pb={4}
        bg={"white"}
        w={"100%"}
        handleMessage={async (msg: string) => await handleMessage(msg)}
      />
      <audio ref={sendRef} src={Send} style={{ display: "none" }} controls />
      <audio
        ref={receiveRef}
        src={Receive}
        style={{ display: "none" }}
        controls
      />
    </Box>
  );
}
