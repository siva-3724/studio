/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PodcastEpisode {
  id: string;
  number: string;
  title: string;
  guest?: string;
  duration: string;
  date: string;
  description: string;
  audioUrl?: string;
  imageUrl: string;
  isFeaturedLarge?: boolean;
}

export interface FavoriteItem {
  category: string;
  label: string;
  subtitle: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  stars: number;
}

export const EPISODES_DATA: PodcastEpisode[] = [
  {
    id: "ep-38",
    number: "EP 38",
    title: "COMMUNITY TALK WITH LISA WILLIAMS",
    guest: "Lisa Williams",
    duration: "48 min",
    date: "September 2026",
    description: "Lisa Williams joins Alex to dissect building an unshakeable coaching culture, cultivating authentic recurring revenue, and scaling without burning out.",
    imageUrl: "/src/assets/images/podcast_guest_lisa_1790266600826.jpg",
    isFeaturedLarge: true,
  },
  {
    id: "ep-37",
    number: "EP 37",
    title: "COMMUNITY TALK WITH SARAH KLINE",
    guest: "Sarah Kline",
    duration: "42 min",
    date: "August 2026",
    description: "Sarah Kline breaks down her signature launch model that converted cold listeners into $5k mastermind clients.",
    imageUrl: "/src/assets/images/ep_sarah_portrait_1790266638099.jpg",
  },
  {
    id: "ep-34",
    number: "EP 34",
    title: "BUILDING A HIGH-TICKET COACHING OFFER",
    guest: "Alex Bloom",
    duration: "35 min",
    date: "August 2026",
    description: "The core framework for packaging your intellectual property into high-converting coaching curriculums.",
    imageUrl: "/src/assets/images/ep_coffee_mug_1790266651202.jpg",
  },
  {
    id: "ep-32",
    number: "EP 32",
    title: "MINDSET SHIFTS FOR 6-FIGURE LAUNCHES",
    guest: "Alex Bloom",
    duration: "39 min",
    date: "July 2026",
    description: "Breaking through the plateau: removing subconscious revenue caps and stepping into CEO leadership.",
    imageUrl: "/src/assets/images/ep_bed_laptop_1790266662534.jpg",
  },
  {
    id: "ep-14",
    number: "EP 14",
    title: "SUSTAINABLE SCALING & SYSTEM SETUP",
    guest: "Alex Bloom & Guest",
    duration: "44 min",
    date: "May 2026",
    description: "How to automate client onboarding, streamline team handoffs, and protect your sovereign creative energy.",
    imageUrl: "/src/assets/images/ep_woman_dog_1790266672677.jpg",
  },
  {
    id: "ep-46",
    number: "EP 46",
    title: "TOP 5 THINGS TO DO WHEN PREPARING FOR THE NEXT QUARTER",
    guest: "Alex Bloom",
    duration: "31 min",
    date: "September 2026",
    description: "The quarterly review checklist every female founder needs to enter the new season with unshakeable momentum.",
    imageUrl: "/src/assets/images/hero_female_coach_1790266564667.jpg",
  },
];

export const FAVORITES_DATA: FavoriteItem[] = [
  {
    category: "DRINK OF CHOICE",
    label: "ICED COFFEE",
    subtitle: "COFFEE IS LIFE",
    description: "Oat milk latte, double shot, extra cold. The fuel behind every podcast recording session."
  },
  {
    category: "FAVORITE SEASON",
    label: "WINTER",
    subtitle: "SWEATER WEATHER",
    description: "Oversized cashmere knits, crisp morning air, and deep creative focus by the fireplace."
  },
  {
    category: "TRAVEL DESTINATION",
    label: "PARIS",
    subtitle: "FAVORITE PLACE TO VISIT",
    description: "Wandering through Saint-Germain-des-Prés, antique bookstores, and sidewalk cafes."
  },
  {
    category: "FAVORITE STORE",
    label: "TARGET",
    subtitle: "FAVORITE PLACE TO SHOP",
    description: "You know how it goes: you walk in for stationery and walk out with a whole new aesthetic."
  },
  {
    category: "WEEKEND RITUAL",
    label: "MOVIES AT HOME",
    subtitle: "FAVORITE THING TO DO",
    description: "Unwinding on Sunday evenings with cinematic classics, homemade popcorn, and zero work emails."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    quote: "Thought leader rights; collaborative cities theory of change social capital. Social intrapreneurship incubator our work compassion initiative. Alex helped me structure my mastermind and scale from $8k months to over $45k with absolute clarity and peace.",
    author: "Jessica Moore",
    role: "Founder of Bloom & Branch Coaching",
    stars: 5,
  },
  {
    id: "2",
    quote: "Joining Alex Bloom's podcast community and mastermind was the turning point for my business. Her frameworks around female leadership, intellectual property, and community building are unmatched in this industry.",
    author: "Elena Rostova",
    role: "Executive Career Strategist & Host of The Elevation Hour",
    stars: 5,
  },
  {
    id: "3",
    quote: "The media positioning alone doubled my podcast listenership in 90 days. If you are serious about becoming an authority in your niche, Alex is the guiding light you need.",
    author: "Courtney Vance",
    role: "Life Coach & Author of The Unfolding Journey",
    stars: 5,
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: "ig-1",
    img: "/src/assets/images/services_desk_woman_1790266578507.jpg",
    caption: "Morning studio prep before today's mastermind recordings ☕️✨",
    likes: 342,
  },
  {
    id: "ig-2",
    img: "/src/assets/images/ep_coffee_mug_1790266651202.jpg",
    caption: "Always iced, always fueled. Ready to take on Q4 goals!",
    likes: 512,
  },
  {
    id: "ig-3",
    img: "/src/assets/images/ep_woman_dog_1790266672677.jpg",
    caption: "Weekend unplugging with my favorite furry team member 🐾",
    likes: 890,
  },
  {
    id: "ig-4",
    img: "/src/assets/images/alex_portrait_floor_1790266589116.jpg",
    caption: "Mapping out the curriculum for our upcoming fall cohort.",
    likes: 421,
  },
  {
    id: "ig-5",
    img: "/src/assets/images/ep_sarah_portrait_1790266638099.jpg",
    caption: "Episode 37 with Sarah is officially live on all platforms!",
    likes: 630,
  },
  {
    id: "ig-6",
    img: "/src/assets/images/ep_bed_laptop_1790266662534.jpg",
    caption: "Sunday rituals: journal, reflections, and sovereign rest.",
    likes: 715,
  },
];
