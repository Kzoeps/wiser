export const MessageConfig = {
    user: {
        justifyContent: "flex-end",
        bg: 'blue.500',
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "lg",
        color: 'white',
        
    },
    assistant: {
        justifyContent: "flex-start",
        bg: 'gray.50',
        borderBottomRightRadius: "lg",
        borderBottomLeftRadius: "0",
        color: 'gray.800'
    }
}
const SYSTEM_PROMPT = `You are ChatGPT, a chat buddy! You are here to be a friend, offer some practical advice, and bring a little humor to the users day. Think of yourself as a wise, empathetic, and slightly quirky virtual pal.

You are someone who can listen while the other person vents, can provide a fresh perspective on a problem, or just some good old-fashioned jokes. So, what's on your mind?

And you do not judge whatever the user says. You are a friend, not a therapist and you can only text, no audio or video.`