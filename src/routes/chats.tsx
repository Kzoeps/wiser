import { useEffect, useRef, useState } from "react";
import WiserDrawer from "../components/drawer/drawer";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useIndexedDB } from "react-indexed-db";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { search } from "fast-fuzzy";
import { IConversation } from "../types/wiser.types";
import GenericDialog from "../components/modal/modal";
import { COUNTRIES } from "./chat/constants/chat.constants";

export default function Chats() {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [allConvos, setAllConvos] = useState<IConversation[]>([]);
  const selectRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const { add, getAll } = useIndexedDB("conversations");
  // @ts-ignore
  const { conversations: convos } = useLoaderData();
  useEffect(() => {
    if (convos.length) {
      const reversed = [...convos].reverse();
      setConversations(reversed);
      setAllConvos(reversed);
    } else {
      setConversations([]);
      setAllConvos([]);
    }
  }, [convos]);

  const handleSearch = (query: string) => {
    setConversations(
      search(query, allConvos, {
        keySelector: (obj: IConversation) => COUNTRIES[obj?.country]?.character,
      })
    );
    if (query === "") {
      setConversations(allConvos);
    }
  };

  const handleConfirm = async () => {
    if (titleRef.current) {
      const convo = await add({
        title: titleRef.current.value,
        messages: [],
        country: selectRef.current?.value || "Bhutan",
      });
      let convos = await getAll();
      convos = convos.length ? convos.reverse() : [];
      setConversations(convos);
      setAllConvos(convos);
      navigate(`${convo}`);
    }
    onClose();
  };
  return (
    <>
      <Box display={"flex"} w={"100%"} gap={"10px"}>
        <WiserDrawer
          onSearch={handleSearch}
          onCompose={onOpen}
          conversations={conversations || []}
        />
        <Outlet />
      </Box>
      <GenericDialog
        isOpen={isOpen}
        title="Compose"
        onConfirm={handleConfirm}
        onClose={onClose}
      >
        <FormControl>
          <Input ref={titleRef} placeholder="Topic of conversation" />
          <Select mt={2} placeholder="Select Country" ref={selectRef}>
            {Object.values(COUNTRIES).map((country) => (
              <option key={country.label} value={country.label}>{country.label} {country.emoji}</option>
            ))} 
          </Select>
        </FormControl>
      </GenericDialog>
    </>
  );
}
