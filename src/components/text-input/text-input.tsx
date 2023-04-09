import { Box, BoxProps, IconButton } from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import WiserTextArea from "./components/wiser-textarea/text-area";
import { useCallback, useEffect, useRef, useState } from "react";

interface TextInputProps extends BoxProps {
  handleMessage: (message: string) => void;
}
export default function TextInput({ handleMessage: onSubmit, ...rest }: TextInputProps) {
  const [message, setMessage] = useState<string>("");
  const handleSubmit = useCallback(() => {
    onSubmit(message);
    setMessage("");
  }, [message, onSubmit]);

  // think of a way to do this better
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && e.shiftKey === false) {
        handleSubmit();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit]);
  return (
    <Box {...rest} alignItems={'end'} display={"flex"} justifyContent={"space-between"}>
      <WiserTextArea setMessage={setMessage} message={message} />
      <IconButton
      type="submit"
        ml={2}
        colorScheme="blue"
        onClick={handleSubmit}
        accessKey=""
        aria-label="send message"
        borderRadius={"50%"}
        icon={<FaTelegramPlane />}
      />
    </Box>
  );
}
