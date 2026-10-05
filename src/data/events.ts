export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  status: "completed" | "ongoing" | "upcoming";
  attendees: number;
  maxAttendees: number;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Workshop: Intro to Next.js 16",
    date: "2026-03-15",
    time: "09:00 - 12:00",
    location: "Lab Komputer Gedung A",
    description:
      "Workshop pengenalan Next.js 16 dengan App Router. Peserta akan belajar membuat website modern dari nol, termasuk routing, server components, dan deployment. Cocok untuk pemula yang sudah punya dasar HTML/CSS/JS.",
    image: "/events/nextjs-workshop.jpg",
    status: "completed",
    attendees: 45,
    maxAttendees: 50,
  },
  {
    id: 2,
    title: "Hackathon: Build for Campus",
    date: "2026-05-20",
    time: "08:00 - 20:00",
    location: "Aula Utama Kampus",
    description:
      "Hackathon 12 jam untuk membangun solusi teknologi bagi permasalahan kampus. Tim terdiri dari 3-4 orang. Tersedia hadiah total Rp 5 juta untuk 3 tim terbaik. Juri terdiri dari dosen dan praktisi industri.",
    image: "/events/hackathon.jpg",
    status: "completed",
    attendees: 80,
    maxAttendees: 80,
  },
  {
    id: 3,
    title: "Tech Talk: AI & Machine Learning",
    date: "2026-07-10",
    time: "13:00 - 15:00",
    location: "Ruang Seminar Lt. 3",
    description:
      "Sesi sharing dari praktisi industri tentang penerapan AI dan Machine Learning di dunia nyata. Pembicara dari perusahaan teknologi ternama akan berbagi pengalaman dan tips karir di bidang AI.",
    image: "/events/ai-talk.jpg",
    status: "completed",
    attendees: 60,
    maxAttendees: 70,
  },
  {
    id: 4,
    title: "Workshop: UI/UX Design with Figma",
    date: "2026-08-25",
    time: "10:00 - 14:00",
    location: "Lab Desain Gedung B",
    description:
      "Belajar design thinking dan prototyping menggunakan Figma. Dari wireframe hingga high-fidelity prototype. Peserta akan membuat redesign salah satu aplikasi kampus sebagai studi kasus.",
    image: "/events/figma-workshop.jpg",
    status: "completed",
    attendees: 35,
    maxAttendees: 40,
  },
  {
    id: 5,
    title: "DSC Study Group: Cloud Architecture",
    date: "2026-10-01",
    time: "15:00 - 17:00",
    location: "Co-working Space DSC",
    description:
      "Study group mingguan membahas arsitektur cloud modern. Minggu ini: microservices vs monolith, container orchestration dengan Kubernetes, dan best practices deployment di GCP.",
    image: "/events/cloud-study.jpg",
    status: "ongoing",
    attendees: 20,
    maxAttendees: 25,
  },
  {
    id: 6,
    title: "DSC Annual Summit 2026",
    date: "2026-11-15",
    time: "08:00 - 17:00",
    location: "Convention Hall Kampus",
    description:
      "Event tahunan terbesar DSC! Sehari penuh dengan keynote speakers, workshop tracks, networking session, dan demo day. Tahun ini mengusung tema 'Building the Future with Code'. Terbuka untuk umum.",
    image: "/events/summit.jpg",
    status: "upcoming",
    attendees: 0,
    maxAttendees: 200,
  },
];
