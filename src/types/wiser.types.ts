export interface IMessage {
    id?: string;
    role: 'user' | 'assistant';
    content: string;
}
export interface IConversation {
    id?: string;
    title: string;
    messages: IMessage[];
}
