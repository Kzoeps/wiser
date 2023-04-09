import { Outlet } from "react-router-dom";
import WiserDrawer from "../components/drawer/drawer";

export default function Chats() {
  return (
    <>
      <WiserDrawer />
      <Outlet />
    </>
  );
}
