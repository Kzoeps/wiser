import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Home from '../routes/root'
import Chat from '../routes/chat/chat'
import Chats from '../routes/chats'
import { addConversation, getConversations } from '../api/loaders/loaders'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/> 
    },
    {
        path: '/chats',
        element: <Chats/>, 
        loader: getConversations,
        children: [
            {
                path: '/chats/:chat_id',
                element: <Chat/>
            }
        ]
    },
    {
        path: '/chat/new',
        action: async (request: any) => {
            const data = request.formData()
            const newChat = await addConversation(data.get('title') as string)
            return redirect(`/chats/${newChat}`)
        }
    }
])

export default function Routes() {
  return (
    <RouterProvider router={router}/>
  )
}
