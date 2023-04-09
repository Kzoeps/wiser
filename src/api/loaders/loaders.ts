import { useIndexedDB } from "react-indexed-db";
import { initDB } from "react-indexed-db";
import { DBConfig } from "../../constants/wiser.constants";
import { redirect } from "react-router-dom";

initDB(DBConfig);

export async function getConversations() {
    const { add, getAll } = useIndexedDB('conversations')
    const conversations = await getAll()
    if (conversations.length === 0) {
        const convo = await add({ title: 'init :) ', messages: [] })
        console.log(convo)
        return redirect(`/chats/${convo}`)
    }
    return  { conversations };
}

export async function addConversation(title: string) {
    const { add } = useIndexedDB('conversations')
    const conversation = await add({ title, message: [] })
    return  { conversation };
}

async function getChat(id: string) {
    const { getByID } = useIndexedDB('conversations')
    const conversation = await getByID(id)
    return { conversation }
}

export async function getChatById({params}: any) {
    const conversation = await getChat(params.chat_id)
    return conversation
}