import {
  Input,
  useDisclosure,
  Box,
  Flex,
  Heading,
  IconButton,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { useState } from "react";
import { HiPencilSquare, HiMagnifyingGlass } from "react-icons/hi2";
import ChatsDisplay from "../chats-display/chats-display";
import { IConversation } from "../../types/wiser.types";

export interface WiserDrawerProps {
  conversations: IConversation[];
  onSearch: (search: string) => void;
}

export default function WiserDrawer({ conversations, onSearch }: WiserDrawerProps) {

  return (
    <>
      <Box
        borderRight={"1px solid"}
        borderRightColor={"gray.100"}
        maxW={"300px"}
        overflowY={'auto'}
        height={"100vh"}
      >
        <Box mb={1} borderBottom={'1px solid'} borderBottomColor={'gray.100'}>
        <Flex direction={"row"} justifyContent={"space-between"}>
          <Box maxW={"150px"}>
            <Heading m={2}>Chats</Heading>
          </Box>
          <Box maxW={"150px"}>
            <IconButton
              m={2}
              variant={"outline"}
              size={"sm"}
              borderRadius={"50%"}
              aria-label="compose"
              icon={<HiPencilSquare />}
            />
          </Box>
        </Flex>
        <Box maxW={"300px"} p={2}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<HiMagnifyingGlass />}
            />
            <Input
              onChange={(e) => { onSearch(e.target.value) }}
              borderRadius={"lg"}
              type="tel"
              placeholder="Search chat here"
            />
          </InputGroup>
        </Box>
        </Box>
        <Box>
          {conversations.map((conversation) => (
            <ChatsDisplay key={conversation.id} title={conversation.title} message={conversation.messages.at(-1)?.content}/>
          ))}
        </Box>
      </Box>
    </>
  );
}
