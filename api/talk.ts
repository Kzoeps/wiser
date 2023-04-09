export const config = {
    runtime: 'edge'
}

export default async (request: Request) => {
    if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 })
    }
    const data = request.body;
    console.log(data)
    fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}}`  
        },
        body: data 
    })
}








