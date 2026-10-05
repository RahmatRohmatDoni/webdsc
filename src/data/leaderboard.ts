export interface LeaderboardEntry {
  rank: number;
  memberId: number;
  name: string;
  points: number;
  eventsAttended: number;
  contributions: number;
}

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, memberId: 5, name: "Rizki Fauzan", points: 2450, eventsAttended: 12, contributions: 34 },
  { rank: 2, memberId: 8, name: "Nisa Rahma", points: 2280, eventsAttended: 11, contributions: 28 },
  { rank: 3, memberId: 9, name: "Fajar Hidayat", points: 2100, eventsAttended: 10, contributions: 25 },
  { rank: 4, memberId: 6, name: "Maya Putri", points: 1950, eventsAttended: 10, contributions: 22 },
  { rank: 5, memberId: 7, name: "Dimas Aditya", points: 1800, eventsAttended: 9, contributions: 20 },
  { rank: 6, memberId: 11, name: "Hendra Wijaya", points: 1650, eventsAttended: 8, contributions: 18 },
  { rank: 7, memberId: 10, name: "Tara Wulandari", points: 1500, eventsAttended: 8, contributions: 15 },
  { rank: 8, memberId: 12, name: "Putri Amelia", points: 1350, eventsAttended: 7, contributions: 14 },
  { rank: 9, memberId: 3, name: "Budi Santoso", points: 1200, eventsAttended: 6, contributions: 12 },
  { rank: 10, memberId: 4, name: "Lina Kusuma", points: 1050, eventsAttended: 6, contributions: 10 },
];
