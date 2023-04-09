import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import TextInput from "../../components/text-input/text-input";
import { IMessage } from "./types/chat.types";
import { v4 as  uuidv4 } from 'uuid';
import MessageDisplay from "./components/message-display/message-display";

export default function Chat() {
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  useEffect(() => {
    const controller = new AbortController()
    const setUpChatGPT = async () => {
      const response = await (await fetch('/api/set_up', { signal: controller.signal})).json()
      const systemMessage = response?.choices?.[0]?.message
      setMessages((messages) => [...messages, {...systemMessage, id: uuidv4()}])
    }
    setUpChatGPT()
    return () => {
      controller.abort()
    }
  },[])

  const filterMessages = (messages: IMessage[]) => {
    return messages.map(({content, role}) => ({
      content,
      role
    }));
  }

  const handleMessage = async (message: string) => {
    const newMessages = [...messages, { content: message, role: 'user', id: uuidv4()}] as IMessage[];
    setMessages(newMessages);
    const response = await fetch(`/api/talk`, {
      method: "POST",
      body: JSON.stringify(filterMessages(newMessages)),
    });
    const data = await response.json();
    const systemMessage = data?.choices?.[0]?.message
    if (systemMessage) {
      setMessages((messages) => [...messages ,{...systemMessage, id: uuidv4()}])
    }
  }
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      w={"100%"}
      maxH={"100vh"}
    >
      <Box
        overflowY={"auto"}
        display={"flex"}
        flexDirection={"column"}
        height={"100%"}
        mb={3}
      >
        <MessageDisplay messages={messages}/>
      </Box>
      <TextInput
        pb={4}
        bg={"white"}
        w={"100%"}
        handleMessage={async (msg:string) => await handleMessage(msg)}
      />
    </Box>
  );
}
