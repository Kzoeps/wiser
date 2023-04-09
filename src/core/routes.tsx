import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../routes/root'
import Chat from '../routes/chat/chat'
import Chats from '../routes/chats'
import { getConversations } from '../api/loaders/loaders'

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
    }
])

export default function Routes() {
  return (
    <RouterProvider router={router}/>
  )
}
