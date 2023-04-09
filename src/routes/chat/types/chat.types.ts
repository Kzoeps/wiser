export interface IMessage {
    id?: string;
    role: 'user' | 'system';
    content: string;
}