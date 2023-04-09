import { useEffect, useState } from "react";
import WiserDrawer from "../components/drawer/drawer";
import { useIndexedDB } from "react-indexed-db";

export default function Chats() {
  const [conversations, setConversations] = useState<any[]>([]);
  const { add, getAll } = useIndexedDB("conversations");

  useEffect(() => {
    getAll().then((e: any) => {
      setConversations(e)
    });
  }, []);
  return (
    <>
      <WiserDrawer />
      {/* <Outlet /> */}
    </>
  );
}
