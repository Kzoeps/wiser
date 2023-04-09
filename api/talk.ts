import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (request: VercelRequest, response: VercelResponse) => {
    if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 })
    }
    const payload = request.body;
    const data = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPEN_AI_API_KEY}`  
        },
        body: `{ "model": "gpt-3.5-turbo", "messages": ${payload}}` 
    })
    const json = await data.json();
    response.status(200).send(json);
}








