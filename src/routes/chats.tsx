import { useEffect, useRef, useState } from "react";
import WiserDrawer from "../components/drawer/drawer";
import { Outlet, useLoaderData } from "react-router-dom";
import { useIndexedDB } from "react-indexed-db";
import { Box, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react";
import { search } from "fast-fuzzy";
import { IConversation } from "../types/wiser.types";
import GenericDialog from "../components/modal/modal";

export default function Chats() {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [allConvos, setAllConvos] = useState<IConversation[]>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { add, getAll, getByIndex } = useIndexedDB("conversations");
  // @ts-ignore
  const { conversations: convos } = useLoaderData();
  useEffect(() => {
    if (convos.length) {
      const reversed = [...convos].reverse()
      setConversations(reversed)
    } else {
      setConversations([])
    }
  }, [convos])

  const handleSearch = (query: string) => {
    setConversations(search(query, allConvos, {keySelector: (obj: IConversation) => obj.title})) 
    if (query === '') {
      setConversations(allConvos)
    }
  }

  const handleConfirm = async () => {
    if (titleRef.current) {
      const convo = await add({title: titleRef.current.value, messages: []})
      let convos = await getAll()
      convos = convos.length ? convos.reverse() : [];
      setConversations(convos)
      setAllConvos(convos)
    }
    onClose()
  }
  return (
    <>
    <Box display={'flex'} gap={'10px'}>
      <WiserDrawer onSearch={handleSearch} onCompose={onOpen} conversations={conversations || []}/>
      {/* <Outlet /> */}
      <GenericDialog isOpen={isOpen} title="Compose" onConfirm={handleConfirm} onClose={onClose}>
          <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={titleRef} placeholder='Topic of conversation' />
            </FormControl>
        </GenericDialog>
      </Box>
    </>
  );
}
