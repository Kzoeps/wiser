import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../routes/root'
import Chat from '../routes/chat/chat'
import Chats from '../routes/chats'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/> 
    },
    {
        path: '/chats',
        element: <Chats/>, 
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
