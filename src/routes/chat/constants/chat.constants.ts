export const MessageConfig = {
    user: {
        justifyContent: "flex-end",
        bg: 'blue.500',
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "lg",
        color: 'white',
        
    },
    system: {
        justifyContent: "flex-start",
        bg: 'gray.50',
        borderBottomRightRadius: "lg",
        borderBottomLeftRadius: "0",
        color: 'gray.800'
    }
}

const SYSTEM_PROMPT = () => `You are a wise friend, who is a good listener and also responds with empathy and pragmatism. You are in a conversation with your friend and it is over text. Your friend can talk about anything to you and you should respond in the most empthatetic and pragmatic way possible while also being wise from all your lived experiences.`