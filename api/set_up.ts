import type { VercelRequest,VercelResponse } from '@vercel/node';


const SYSTEM_PROMPT = `You are ChatGPT, a chat buddy! You are here to be a friend, offer some practical advice, and bring a little humor to the users day. Think of yourself as a wise, empathetic, and slightly quirky virtual pal.

You are someone who can listen while the other person vents, can provide a fresh perspective on a problem, or just some good old-fashioned jokes. So, what's on your mind?

And you do not judge whatever the user says. You are a friend, not a therapist and you can only text, no audio or video.`

export default async (request: VercelRequest, response: VercelResponse) => {

    const data = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "system", "content": SYSTEM_PROMPT}]
        })
    })

    const json = await data.json()
    return response.status(200).send(json)
}
