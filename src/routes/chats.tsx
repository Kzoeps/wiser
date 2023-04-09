import { useEffect, useState } from "react";
import WiserDrawer from "../components/drawer/drawer";
import { Outlet } from "react-router-dom";
import { useIndexedDB } from "react-indexed-db";
import { Box } from "@chakra-ui/react";
import { search } from "fast-fuzzy";
import { IConversation } from "../types/wiser.types";

export default function Chats() {
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [allConvos, setAllConvos] = useState<IConversation[]>([]);
  const { add, getAll, getByIndex } = useIndexedDB("conversations");

  useEffect(() => {
    getAll().then((e: any) => {
      setConversations(e)
      setAllConvos(e)
    });
  }, []);

  const handleSearch = (query: string) => {
    setConversations(search(query, allConvos, {keySelector: (obj: IConversation) => obj.title})) 
    if (query === '') {
      setConversations(allConvos)
    }
  }
  return (
    <>
    <Box display={'flex'} gap={'10px'}>
      <WiserDrawer onSearch={handleSearch} conversations={conversations || []}/>
      {/* <Outlet /> */}
      </Box>
    </>
  );
}
