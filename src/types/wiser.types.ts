import { COUNTRIES } from "../routes/chat/constants/chat.constants";

export interface IMessage {
    id?: string;
    role: 'user' | 'assistant';
    content: string;
}
export interface IConversation {
    id?: string;
    title: string;
    country: keyof typeof COUNTRIES;
    messages: IMessage[];
}
