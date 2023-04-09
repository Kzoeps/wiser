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
  Bhutan: {
    character: "Dorji",
    emoji: "🇧🇹",
    label: "Bhutan",
  },
  Bangladesh: {
    character: "Rahman",
    emoji: "🇧🇩",
    label: "Bangladesh",
  },
  Thailand: { character: "Somsak", emoji: "🇹🇭", label: "Thailand" },
  Vietnam: { character: "Minh", emoji: "🇻🇳", label: "Vietnam" },
  Laos: { character: "Somsanith Panday", emoji: "🇱🇦", label: "Laos" },
  Cambodia: { character: "Sok Pheng", emoji: "🇰🇭", label: "Cambodia" },
  Myanmar: { character: "Aung", emoji: "🇲🇲", label: "Myanmar" },
  Malaysia: { character: "Ahmad Hassan", emoji: "🇲🇾", label: "Malaysia" },
  Indonesia: { character: "Budi", emoji: "🇮🇩", label: "Indonesia" },
  Ethiopia: { character: "Abebe", emoji: "🇪🇹", label: "Ethiopia" },
  Tibet: { character: "Tenzin", emoji: "🏳️‍🌈", label: "Tibet" },
};
