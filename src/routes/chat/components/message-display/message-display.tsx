import { IMessage } from "../../types/chat.types";
import { Flex } from "@chakra-ui/react";
import Message from "../../../../components/message/message";
import { MessageConfig } from "../../constants/chat.constants";

export default function MessageDisplay({ messages }: { messages: IMessage[] }) {
  return (
    <>
      {messages.map((message, index) => (
        <Flex key={message.id || index} direction={"row"} justify={MessageConfig[message.role].justifyContent}>
            <Message
              key={index}
              mr={10}
              mb={2}
              message={message.content}
              bg={MessageConfig[message.role].bg}
              color={MessageConfig[message.role].color}
              borderBottomLeftRadius={MessageConfig[message.role].borderBottomLeftRadius}
              borderBottomRightRadius={MessageConfig[message.role].borderBottomRightRadius}
            />
          </Flex>
      ))}
    </>
  );
}
