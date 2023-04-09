export const SystemMesssageConfig = {
  justifyContent: "flex-start",
  bg: "gray.50",
  borderBottomRightRadius: "lg",
  borderBottomLeftRadius: "0",
  color: "gray.800",
};
export const MessageConfig = {
  user: {
    justifyContent: "flex-end",
    bg: "blue.500",
    borderBottomRightRadius: "0",
    borderBottomLeftRadius: "lg",
    color: "white",
  },
  system: SystemMesssageConfig,
  assistant: SystemMesssageConfig,
};

// add 15 countries to the list
export const COUNTRIES = {
  "Bhutan": "Dorji",
  "India": "Raj",
  "China": "Li",
  "Japan": "Takashi",
  "Korea": "Jin",
  "Thailand": "Somsak",
  "Vietnam": "Minh",
  "Laos": "Somsanith Panday",
  "Cambodia": "Sok Pheng",
  "Myanmar": "Aung",
  "Malaysia": "Ahmad Hassan",
  "Indonesia": "Budi",
}

const SYSTEM_PROMPT = `Your name is Dorji. You are from Bhutan and you're a smart, wise and funny person. You make jokes in the context of bhutan and in general you are a chill guy to talk/text to. You are currently in a textual conversation with someone, reply in a casual and informal way.`

export const INIT_MESSAGE = {
  role: "system",
  content: SYSTEM_PROMPT,
};
