// Routine Page Constants
export const ROUTINE_CONFIG = {
  title: "Routine for Paper I – Accounting (100 Marks)",
  dailyGoals: {
    progress: 90,
    title: "Your daily goals almost done!",
    subtitle: "1 of 4 completed",
    color: "#F6581C"
  }
};

// Challenges Data
export const CHALLENGES_DATA = [
  {
    id: 1,
    icon: "⌚",
    title: "Best Runners! 🏃‍♂️",
    timeLeft: "5 days 13 hours left",
    progress: 30,
    users: [
      {
        id: 1,
        avatar: "https://picsum.photos/seed/user1/32/32",
        name: "User 1"
      },
      {
        id: 2,
        avatar: "https://picsum.photos/seed/user2/32/32",
        name: "User 2"
      }
    ],
    friendsJoined: 2
  }
];

// Habits Data
export const HABITS_DATA = [
  {
    id: 1,
    icon: "💧",
    title: "Drink the water",
    progress: "500/2000 ML",
    progressPercent: 25,
    users: [
      "https://picsum.photos/seed/user3/24/24",
      "https://picsum.photos/seed/user4/24/24",
      "https://picsum.photos/seed/user5/24/24"
    ],
    completed: false
  },
  {
    id: 2,
    icon: "🚶",
    title: "Walk",
    progress: "0/10000 STEPS",
    progressPercent: 0,
    users: [
      "https://picsum.photos/seed/user6/24/24",
      "https://picsum.photos/seed/user7/24/24"
    ],
    completed: false
  },
  {
    id: 3,
    icon: "🪴",
    title: "Water Plants",
    progress: "0/1 TIMES",
    progressPercent: 0,
    users: [],
    completed: false
  },
  {
    id: 4,
    icon: "🧘",
    title: "Meditate",
    progress: "30/30 MIN",
    progressPercent: 100,
    users: ["https://picsum.photos/seed/user8/24/24"],
    completed: true
  }
];

// UI Constants
export const UI_CONSTANTS = {
  colors: {
    primary: "#F6581C",
    progressGradient: {
      "0%": "#3843FF",
      "100%": "#6366f1"
    }
  },
  responsiveBreakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 1200
  },
  datesPerRow: {
    mobile: 4,
    tablet: 8,
    desktop: 12,
    large: 22
  }
};

// Day names for calendar
export const DAY_NAMES = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
