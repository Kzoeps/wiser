import { Textarea } from "@chakra-ui/react";
import { FormEvent, MutableRefObject, Ref, useRef } from "react";
import styles from './text-area.module.css';

interface WiserTextAreaProps {
    message: string;
    setMessage: (message: string) => void;
}

export default function WiserTextArea({message, setMessage}: WiserTextAreaProps) {
  const textArea = useRef<HTMLTextAreaElement | null>(null);
  const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
    if (textArea.current) {
      textArea.current.style.height = "20px";
      textArea.current.style.height = `${textArea.current.scrollHeight}px`;
    }
    setMessage(e.currentTarget.value)
  };
  return (
    <Textarea
    className={styles.textBox}
    value={message}
      ref={textArea}
      minHeight={"20px"}
      onInput={handleInput}
      maxHeight={"100px"}
    />
  );
}
