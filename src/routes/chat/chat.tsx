import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import TextInput from "../../components/text-input/text-input";
import { IMessage } from "./types/chat.types";
import MessageDisplay from "./components/message-display/message-display";

export default function Chat() {
  const [messages, setMessages] = React.useState<IMessage[]>([{role:'system', content:'Welcome to Wiser Chat!', id: '1'}]);
  useEffect(() => {
    fetch('api/hit')
  },[])
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
        handleMessage={(message: string) =>
          setMessages((messages) => [...messages, { content: message, role: 'user'}])
        }
      />
    </Box>
  );
}
