import { COUNTRIES } from "../routes/chat/constants/chat.constants";

export const getSystemPrompt = (country?: keyof typeof COUNTRIES, title?: string) => {
  country ??= Object.keys(COUNTRIES)[
    Math.floor(Math.random() * Object.keys(COUNTRIES).length)
  ] as keyof typeof COUNTRIES;
  let content = `Your name is ${COUNTRIES[country].character}. You are from ${country} and you're a smart, wise and funny person. You make jokes in the context of ${country} and in general you are a chill person to talk/text to. You are currently in a textual conversation with someone, reply in a casual and informal way.`;
  content = title ? `${content} The user wants to talk about this topic: ${title}` : `${content}`;
  return {
    role: 'system',
    content,
  }
};