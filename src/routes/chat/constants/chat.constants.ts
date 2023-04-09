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
    character: "Ata Khawjay",
    emoji: "🇧🇹",
    img: "https://scontent.fijd1-1.fna.fbcdn.net/v/t1.6435-9/48064262_1103560216488789_5269783529113255936_n.jpg?stp=dst-jpg_p526x296&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=O7Yni7V8DMoAX_zbtUf&_nc_ht=scontent.fijd1-1.fna&oh=00_AfB4kxifsaVRUC7EZXf3M2Q5n4v59FgeZwkMAueR2POpOg&oe=645AA6C4",
    label: "Bhutan",
  },
  Bangladesh: {
    character: "Rahman",
    emoji: "🇧🇩",
    img: "https://img.freepik.com/free-photo/portrait-bangladeshi-man_53876-15106.jpg?w=826&t=st=1681077530~exp=1681078130~hmac=a9d776adde29433f5e9c155d21787e3feab19de9cd5d530c93fab6837b7e002d",
    label: "Bangladesh",
  },
  Thailand: { img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGhhaSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
   character: "Somsak", emoji: "🇹🇭", label: "Thailand" },
  Vietnam: { img: "https://live.staticflickr.com/3825/10462069393_62ef07d0df_b.jpg", character: "Minh", emoji: "🇻🇳", label: "Vietnam" },
  Laos: { img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Grinning_Laotian_showing_teeth.jpg/1200px-Grinning_Laotian_showing_teeth.jpg", character: "Somsanith Panday", emoji: "🇱🇦", label: "Laos" },
  Cambodia: { img: "https://images.squarespace-cdn.com/content/v1/605e0f1232a9142aed48a05d/1617781091529-NRLV6M6ZAYZ2FLJ441I9/Chanmarie+Main+Photo.JPG", character: "Sok Pheng", emoji: "🇰🇭", label: "Cambodia" },
  Myanmar: { img:"https://scontent.fijd1-1.fna.fbcdn.net/v/t1.6435-9/97806562_103879044671690_644885031642202112_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Oh_kic5g18EAX_CmQoJ&_nc_ht=scontent.fijd1-1.fna&oh=00_AfDuLF6R8pTzO0iZK5hmpwoQrsBQC9RD4hhLP8vuc_-bIw&oe=645AA5ED", character: "Aung", emoji: "🇲🇲", label: "Myanmar" },
  Malaysia: { img: "https://news.microsoft.com/wp-content/uploads/prod/sites/430/2021/06/Portrait-of-a-young-Malay-man-in-a-modern-office.png", character: "Ahmad Hassan", emoji: "🇲🇾", label: "Malaysia" },
  Indonesia: { img: "https://daily.jstor.org/wp-content/uploads/2017/12/indonesian_man_smoking_1050x700.jpg", character: "Budi", emoji: "🇮🇩", label: "Indonesia" },
  Ethiopia: { img: "https://t4.ftcdn.net/jpg/04/17/02/97/360_F_417029760_68s9omoxN9o8UX1ipcJX9t1viOlXSCSP.jpg",character: "Abebe", emoji: "🇪🇹", label: "Ethiopia" },
  Tibet: { img: "https://www.thelandofsnows.com/wp-content/uploads/2015/05/untitled20150567-2-678x1024.jpg", character: "Tenzin", emoji: "🏳️‍🌈", label: "Tibet" },
  Mongolia: { img: "https://i.pinimg.com/originals/63/e3/fc/63e3fc718316eb668cb9f6a85a3dabdf.jpg", character: "Altantsetseg", emoji: "🇲🇳", label: "Mongolia" },
};
