import { Avatar, Box, Text } from "@chakra-ui/react";
import styles from './chats-display.module.css'

export interface ChatsDisplayProps {
    title: string;
    message: string | undefined;
    isActive?: boolean;
}

export default function ChatsDisplay({title, message, isActive}: ChatsDisplayProps) {
  return (
    <Box className={`${styles.conversation}`} display={"flex"} p={2} gap={"20px"} bg={isActive ? 'gray.100' : 'white'} borderRadius={'lg'}>
        <Box>
            <Avatar name="Wiser" size="md"/>
        </Box>
        <Box display={'flex'} flexDirection={'column'} >
            <Text fontSize={'lg'}>
                {title}
            </Text>
            <Text fontSize={'xs'}>
                {message || ''}
            </Text>
        </Box>
    </Box>
  )
}
