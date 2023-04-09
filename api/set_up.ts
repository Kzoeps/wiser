import type { VercelRequest,VercelResponse } from '@vercel/node';
export const config = {
}


const SYSTEM_PROMPT = () => `You are a wise friend, who is a good listener and also responds with empathy and pragmatism. You are in a conversation with your friend and it is over text. Your friend can talk about anything to you and you should respond in the most empthatetic and pragmatic way possible while also being wise from all your lived experiences.`

export default async (request: VercelRequest, response: VercelResponse) => {

    response.status(200).json({body: `Hello world!, ${request.url}`})
    // fetch('https://api.openai.com/v1/chat/completions', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}}`
    //     },
    //     body: JSON.stringify({
    //         model: "gpt-3.5-turbo",
    //         messages: [{"role": "system", "content": SYSTEM_PROMPT}]
    //     })
    // })
}
