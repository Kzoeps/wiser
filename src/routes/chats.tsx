import { useEffect, useRef, useState } from "react";
import WiserDrawer from "../components/drawer/drawer";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { useIndexedDB } from "react-indexed-db";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { search } from "fast-fuzzy";
import { IConversation } from "../types/wiser.types";
import GenericDialog from "../components/modal/modal";

export default function Chats() {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [allConvos, setAllConvos] = useState<IConversation[]>([]);
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
    console.log(query);
    setConversations(
      search(query, allConvos, {
        keySelector: (obj: IConversation) => obj?.title,
      })
    );
    if (query === "") {
      setConversations(allConvos);
    }
  };

  const handleConfirm = async () => {
    if (titleRef.current) {
      const convo = await add({ title: titleRef.current.value, messages: [], country: 'Bhutan' });
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
          <FormLabel>Title</FormLabel>
          <Input ref={titleRef} placeholder="Topic of conversation" />
        </FormControl>
      </GenericDialog>
    </>
  );
}
