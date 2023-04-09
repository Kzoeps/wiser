import { Box, BoxProps, Text } from "@chakra-ui/react";

interface MessageProps extends BoxProps {
    message?: string;
    children?: React.ReactNode;
}

export default function Message({message, ...props}: MessageProps) {
  return (
    <Box width={'fit-content'} maxW={'50%'} p={2} pl={3} pr={3} color="white" borderTopRadius={'lg'} {...props}>
        {message ? <Text >{message}</Text> : props.children} 
    </Box>
  )
}
