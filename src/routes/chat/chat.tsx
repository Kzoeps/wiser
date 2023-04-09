import React, { useEffect, useRef } from "react";
import { Avatar, Box, Flex } from "@chakra-ui/react";
import TextInput from "../../components/text-input/text-input";
import { IMessage } from "./types/chat.types";
import { v4 as uuidv4 } from "uuid";
import MessageDisplay from "./components/message-display/message-display";
import { INIT_MESSAGE, MessageConfig } from "./constants/chat.constants";
import TypingDot from "./components/typing-dot/typing-dot";
import Message from "../../components/message/message";

export default function Chat() {
  const messageArea = useRef<HTMLDivElement | null>(null);
  const [isTyping, setIsTyping] = React.useState<boolean>(false);
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    const setUpChatGPT = async () => {
      try {
        setIsTyping(true);
        const response = await (
          await fetch("/api/set_up", { signal: controller.signal })
        ).json();
        const systemMessage = response?.choices?.[0]?.message;
        setMessages((messages) => [
          ...messages,
          { ...systemMessage, id: uuidv4() },
        ]);
      } catch (e) {
        console.error(e);
      } finally {
        setIsTyping(false);
      }
    };
    setUpChatGPT();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messageArea.current?.scrollTo(0, messageArea.current?.scrollHeight);
  };

  const filterMessages = (messages: IMessage[]) => {
    return messages.map(({ content, role }) => ({
      content,
      role,
    }));
  };

  const handleMessage = async (message: string) => {
    try {
      const newMessages = [
        ...messages,
        { content: message, role: "user", id: uuidv4() },
      ] as IMessage[];
      setMessages(newMessages);
      setTimeout(() => setIsTyping(true), 500);
      const response = await fetch(`/api/talk`, {
        method: "POST",
        body: JSON.stringify(
          filterMessages([INIT_MESSAGE as IMessage, ...newMessages])
        ),
      });
      const data = await response.json();
      const systemMessage = data?.choices?.[0]?.message;
      if (systemMessage) {
        setMessages((messages) => [
          ...messages,
          { ...systemMessage, id: uuidv4() },
        ]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsTyping(false);
    }
  };
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
        <Box display={"flex"} alignItems={"flex-end"} gap={"10px"}>
          <Avatar name="wiser"  size={'xs'} mb={2}/>
          <Flex direction="column">
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
    </Box>
  );
}
