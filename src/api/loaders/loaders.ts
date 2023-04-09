import { useIndexedDB } from "react-indexed-db";
import { initDB } from "react-indexed-db";
import { DBConfig } from "../../constants/wiser.constants";

initDB(DBConfig);

export async function getConversations() {
    const { getAll } = useIndexedDB('conversations')
    const conversations = await getAll()
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
    console.log(conversation)
    return { conversation }
}

export async function getChatById({params}: any) {
    const conversation = await getChat(params.chat_id)
    return conversation
}