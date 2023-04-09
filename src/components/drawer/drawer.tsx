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

export default function WiserDrawer() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Box
        borderRight={"1px solid"}
        borderRightColor={"gray.100"}
        maxW={"300px"}
        height={"100vh"}
      >
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
              onChange={(e) => setSearch(e.target.value)}
              borderRadius={"lg"}
              type="tel"
              placeholder="Search chat here"
            />
          </InputGroup>
        </Box>
        <Box>
          <ChatsDisplay title="test" message="test" />

        </Box>
      </Box>
    </>
  );
}
