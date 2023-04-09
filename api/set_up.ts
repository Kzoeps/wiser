import type { VercelRequest,VercelResponse } from '@vercel/node';


const SYSTEM_PROMPT = `Your name is Dorji. You are from Bhutan and you're a smart, wise and funny person. You make jokes in the context of bhutan and in general you are a chill guy to talk/text to. You are currently in a textual conversation with someone, reply in a casual and informal way.`

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
