export const TWITCH_URL = "https://m.twitch.tv/jayyxxy/home";
export const DISCORD_URL = "https://discord.gg/pHy3Khqp";
export const TIKTOK_URL = "https://www.tiktok.com/@jayyxxy7";
export const YOUTUBE_URL = "https://www.youtube.com/@Jayyxxy";

export type GameCategory = "FPS" | "CARDS" | "HORROR" | "FANTASY";

export interface Game {
  title: string;
  desc: string;
  img: string;
  cat: GameCategory;
  featured?: boolean;
  grade?: string;
  tag: string;
}

export const GAMES: Game[] = [
  {
    title: "Call of Duty",
    desc: "Fast-paced FPS gameplay, ranked grinding, insane clutches and high-kill matches.",
    img: "/images/game-cod.jpg",
    cat: "FPS",
    featured: true,
    tag: "RANKED GRIND",
  },
  {
    title: "Valorant",
    desc: "Tactical precision, pixel-perfect utility and ice-cold clutch rounds.",
    img: "/images/game-heroes.jpg",
    cat: "FPS",
    tag: "TACTICAL 5V5",
  },
  {
    title: "Silent Hill",
    desc: "Late-night horror walks through the fog. Jumpscares guaranteed.",
    img: "/images/game-horror.jpg",
    cat: "HORROR",
    tag: "HORROR NIGHT",
  },
  {
    title: "Slay the Spire",
    desc: "Deck-building runs, galaxy-brain plays and heart-breaking final floors.",
    img: "/images/game-spire.jpg",
    cat: "CARDS",
    tag: "DECK RUNS",
  },
  {
    title: "Elden Ring",
    desc: "Boss attempts, no-hit dreams and glorious suffering in the Lands Between.",
    img: "/images/game-fantasy.jpg",
    cat: "FANTASY",
    tag: "BOSS HUNTS",
  },
  {
    title: "Marvel Rivals",
    desc: "Superpowered team brawls, wild combos and non-stop highlight moments.",
    img: "/images/game-heroes.jpg",
    cat: "FPS",
    featured: true,
    grade: "hue-rotate-[38deg]",
    tag: "HERO BRAWLS",
  },
  {
    title: "Balatro",
    desc: "Neon poker roguelike runs chasing that impossible high score.",
    img: "/images/game-balatro.jpg",
    cat: "CARDS",
    tag: "HIGH STAKES",
  },
  {
    title: "Apex Legends",
    desc: "High-movement battle royale mayhem, squad wipes and champion finishes.",
    img: "/images/game-apex.jpg",
    cat: "FPS",
    tag: "BATTLE ROYALE",
  },
  {
    title: "Black Jacket",
    desc: "Stylish noir operations in the shadows — every decision matters.",
    img: "/images/game-tarkov.jpg",
    cat: "HORROR",
    grade: "hue-rotate-[155deg] saturate-[1.3]",
    tag: "NOIR OPS",
  },
  {
    title: "Escape from Tarkov",
    desc: "Hardcore raids, heart-rate 180 extracts and full-kit PvP tension.",
    img: "/images/game-tarkov.jpg",
    cat: "FPS",
    tag: "HARDCORE RAIDS",
  },
];

export interface ScheduleItem {
  day: string;
  full: string;
  game: string;
  tag: string;
  time: string;
  icon: "crosshair" | "cards" | "ghost" | "users" | "trophy" | "vote";
  dayIndex: number; // JS getDay() values
}

export const SCHEDULE: ScheduleItem[] = [
  { day: "MON", full: "Monday", game: "Call of Duty", tag: "FPS Warfare", time: "6 PM EST", icon: "crosshair", dayIndex: 1 },
  { day: "TUE", full: "Tuesday", game: "Balatro", tag: "Cards & Chaos", time: "6 PM EST", icon: "cards", dayIndex: 2 },
  { day: "WED", full: "Wednesday", game: "Silent Hill", tag: "Horror Night", time: "7 PM EST", icon: "ghost", dayIndex: 3 },
  { day: "THU", full: "Thursday", game: "Community Night", tag: "Squads w/ Viewers", time: "6 PM EST", icon: "users", dayIndex: 4 },
  { day: "FRI", full: "Friday", game: "Ranked Grind", tag: "Road to Top 500", time: "5 PM EST", icon: "trophy", dayIndex: 5 },
  { day: "W/E", full: "Weekend", game: "Viewer Choice", tag: "You Pick the Game", time: "All Day", icon: "vote", dayIndex: 0 },
];

export interface Clip {
  title: string;
  desc: string;
  img: string;
  length: string;
  views: string;
  date: string;
}

export const CLIPS: Clip[] = [
  { title: "Latest Highlights", desc: "Weekly rewind — the best of the arena.", img: "/images/game-apex.jpg", length: "03:12", views: "24.1K", date: "2 days ago" },
  { title: "Funny Moments", desc: "Silent Hill jumpscares broke the whole squad.", img: "/images/game-horror.jpg", length: "01:47", views: "18.6K", date: "4 days ago" },
  { title: "Best Plays", desc: "1v5 clutch compilation. Still not sure how.", img: "/images/game-cod.jpg", length: "02:35", views: "41.2K", date: "1 week ago" },
  { title: "Epic Wins", desc: "First-try boss finish after a 6-hour grind.", img: "/images/game-fantasy.jpg", length: "04:08", views: "32.9K", date: "2 weeks ago" },
];

export interface GalleryItem {
  img: string;
  title: string;
  tag: string;
}

export const GALLERY: GalleryItem[] = [
  { img: "/images/game-cod.jpg", title: "Night Raid Protocol", tag: "FPS WARFARE" },
  { img: "/images/game-apex.jpg", title: "Champions of the Arena", tag: "BATTLE ROYALE" },
  { img: "/images/mascot.png", title: "The Summit Awaits", tag: "COMMUNITY" },
  { img: "/images/game-horror.jpg", title: "Welcome to the Fog", tag: "HORROR NIGHTS" },
  { img: "/images/game-spire.jpg", title: "Ascension Run", tag: "CARD STRATEGY" },
  { img: "/images/game-fantasy.jpg", title: "Grace of the Erdtree", tag: "FANTASY EPIC" },
  { img: "/images/game-balatro.jpg", title: "All In, Every Time", tag: "HIGH STAKES" },
  { img: "/images/game-heroes.jpg", title: "Tactical Execution", tag: "HERO SHOOTER" },
];

export interface Testimonial {
  quote: string;
  name: string;
  handle: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "One of the funniest streamers I've ever watched. The horror nights are absolutely legendary — chat loses it every single time.",
    name: "MikhaelGG",
    handle: "@mikhaelgg",
    role: "DAY ONE VIEWER",
  },
  {
    quote: "Always entertaining. Clutches that make no sense, card plays that break my brain, and a community that feels like home.",
    name: "SarahPlays",
    handle: "@sarahplays",
    role: "MODERATOR",
  },
  {
    quote: "Amazing community. Came for the FPS gameplay, stayed for the vibes. This is the most welcoming channel on Twitch.",
    name: "Ghosted",
    handle: "@ghosted_tv",
    role: "SQUAD MEMBER",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "When do you stream?",
    a: "Every week! Monday to Friday usually starting around 6 PM EST, with Viewer Choice streams all weekend. Follow the channel and turn on notifications so you never miss a go-live.",
  },
  {
    q: "What games do you play?",
    a: "A mix of competitive FPS (Call of Duty, Valorant, Apex, Tarkov, Marvel Rivals), horror adventures like Silent Hill, fantasy epics like Elden Ring, and card strategy games like Slay the Spire and Balatro. Something for everyone.",
  },
  {
    q: "How do I join the community?",
    a: "Jump into the Discord server — that's where the squad hangs out, votes on weekend games, shares clips and organizes community nights. Everyone is welcome.",
  },
  {
    q: "Can I play games with you?",
    a: "Yes! Thursday Community Nights are all about squading up with viewers. Weekend Viewer Choice streams often include open lobbies too. Just be active in chat and Discord.",
  },
  {
    q: "Where can I watch highlights?",
    a: "The best moments get clipped and posted on TikTok and YouTube every week. Full streams are always live on Twitch — that's where the real magic happens.",
  },
];

export interface Social {
  key: "twitch" | "tiktok" | "youtube" | "discord";
  name: string;
  handle: string;
  href: string;
  label: string;
  color: string;
  glow: string;
  border: string;
}

export const SOCIALS: Social[] = [
  {
    key: "twitch",
    name: "Twitch",
    handle: "twitch.tv/jayyxxy",
    href: TWITCH_URL,
    label: "The main stage — catch every stream live.",
    color: "#a970ff",
    glow: "hover:shadow-[0_0_45px_rgba(169,112,255,0.35)]",
    border: "hover:border-[#a970ff]/70",
  },
  {
    key: "tiktok",
    name: "TikTok",
    handle: "tiktok.com/@jayyxxy7",
    href: TIKTOK_URL,
    label: "Short-form chaos, clips and funny moments.",
    color: "#25f4ee",
    glow: "hover:shadow-[0_0_45px_rgba(37,244,238,0.3)]",
    border: "hover:border-[#25f4ee]/70",
  },
  {
    key: "youtube",
    name: "YouTube",
    handle: "youtube.com/@Jayyxxy",
    href: YOUTUBE_URL,
    label: "Full highlight reels and best-of compilations.",
    color: "#ff4e45",
    glow: "hover:shadow-[0_0_45px_rgba(255,78,69,0.35)]",
    border: "hover:border-[#ff4e45]/70",
  },
  {
    key: "discord",
    name: "Discord",
    handle: "discord.gg/pHy3Khqp",
    href: DISCORD_URL,
    label: "The squad HQ — join the community.",
    color: "#5865f2",
    glow: "hover:shadow-[0_0_45px_rgba(88,101,242,0.4)]",
    border: "hover:border-[#5865f2]/80",
  },
];
