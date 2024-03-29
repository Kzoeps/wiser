import {
  Input,
  Box,
  Flex,
  Heading,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { HiPencilSquare, HiMagnifyingGlass } from "react-icons/hi2";
import ChatsDisplay from "../chats-display/chats-display";
import { IConversation } from "../../types/wiser.types";
import { NavLink } from "react-router-dom";
import styles from "./drawer.module.css";
import { COUNTRIES } from "../../routes/chat/constants/chat.constants";

export interface WiserDrawerProps {
  conversations: IConversation[];
  onCompose?: () => void;
  onSearch: (search: string) => void;
}

export default function WiserDrawer({
  conversations,
  onSearch,
  onCompose,
}: WiserDrawerProps) {
  const spliceMessage = (message: string | undefined) => {
    if (!message) return "";
    if (message.length > 30) {
      return `${message.slice(0, 30)}...`;
    }
    return message;
  };
  return (
    <>
      <Box
        borderRight={"1px solid"}
        borderRightColor={"gray.100"}
        w={"400px"}
        maxW={"400px"}
        overflowY={"auto"}
        height={"100vh"}
      >
        <Box mb={1} borderBottom={"1px solid"} borderBottomColor={"gray.100"}>
          <Flex direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Box maxW={"150px"}>
              <Heading m={2}>Chats</Heading>
            </Box>
            <Box maxW={"150px"}>
              <IconButton
                onClick={onCompose || (() => {})}
                m={2}
                variant={"outline"}
                size={"md"}
                borderRadius={"50%"}
                aria-label="compose"
                icon={<HiPencilSquare />}
              />
            </Box>
          </Flex>
          <Box maxW={"400px"} p={2}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<HiMagnifyingGlass />}
              />
              <Input
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
                borderRadius={"lg"}
                type="tel"
                placeholder="Search chat here"
              />
            </InputGroup>
          </Box>
        </Box>
        <Box>
          {conversations.map((conversation) => (
            <NavLink
              key={conversation.id}
              to={`${conversation.id}`}
              className={({ isActive }) => (isActive ? `${styles.active}` : "")}
            >
              {({ isActive }) => {
                return (
                  <ChatsDisplay
                    country={conversation.country}
                    isActive={isActive}
                    title={COUNTRIES[conversation.country].character}
                    message={spliceMessage(
                      conversation.messages.at(-1)?.content
                    )}
                  />
                );
              }}
            </NavLink>
          ))}
        </Box>
      </Box>
    </>
  );
}
