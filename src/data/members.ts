export interface Member {
  id: number;
  name: string;
  role: string;
  division: string;
  photo: string;
  socials: {
    instagram?: string;
    github?: string;
    linkedin?: string;
  };
  bio: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: "Andi Pratama",
    role: "Ketua",
    division: "Core Team",
    photo: "/members/andi.jpg",
    socials: {
      instagram: "andipratama",
      github: "andipratama",
      linkedin: "andipratama",
    },
    bio: "Mahasiswa Teknik Informatika semester 7 yang passionate di bidang software engineering dan community building. Memimpin DSC sejak 2025.",
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "Wakil Ketua",
    division: "Core Team",
    photo: "/members/sari.jpg",
    socials: {
      instagram: "saridewi",
      github: "saridewi",
    },
    bio: "Fokus di cloud computing dan DevOps. Bertanggung jawab atas koordinasi antar divisi dan program mentorship.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Sekretaris",
    division: "Core Team",
    photo: "/members/budi.jpg",
    socials: {
      instagram: "budisantoso",
      linkedin: "budisantoso",
    },
    bio: "Detail-oriented dan terorganisir. Mengelola dokumentasi dan komunikasi internal DSC.",
  },
  {
    id: 4,
    name: "Lina Kusuma",
    role: "Bendahara",
    division: "Core Team",
    photo: "/members/lina.jpg",
    socials: {
      instagram: "linakusuma",
      github: "linakusuma",
    },
    bio: "Mahasiswa Sistem Informasi yang jago mengelola keuangan organisasi dan sponsorship.",
  },
  {
    id: 5,
    name: "Rizki Fauzan",
    role: "Head of Division",
    division: "Web Development",
    photo: "/members/rizki.jpg",
    socials: {
      github: "rizkifauzan",
      linkedin: "rizkifauzan",
    },
    bio: "Full-stack developer dengan pengalaman di React, Next.js, dan Node.js. Mengajar web development di workshop DSC.",
  },
  {
    id: 6,
    name: "Maya Putri",
    role: "Head of Division",
    division: "Mobile Development",
    photo: "/members/maya.jpg",
    socials: {
      instagram: "mayaputri",
      github: "mayaputri",
    },
    bio: "Android developer berpengalaman. Memimpin tim mobile dalam membangun aplikasi kampus.",
  },
  {
    id: 7,
    name: "Dimas Aditya",
    role: "Head of Division",
    division: "UI/UX Design",
    photo: "/members/dimas.jpg",
    socials: {
      instagram: "dimasaditya",
      linkedin: "dimasaditya",
    },
    bio: "Designer dengan mata tajam untuk detail. Bertanggung jawab atas semua visual identity DSC.",
  },
  {
    id: 8,
    name: "Nisa Rahma",
    role: "Head of Division",
    division: "Data Science",
    photo: "/members/nisa.jpg",
    socials: {
      github: "nisarahma",
      linkedin: "nisarahma",
    },
    bio: "Data enthusiast yang suka mengolah angka menjadi insight. Aktif di kompetisi data science nasional.",
  },
  {
    id: 9,
    name: "Fajar Hidayat",
    role: "Head of Division",
    division: "Cloud Computing",
    photo: "/members/fajar.jpg",
    socials: {
      github: "fajarhidayat",
      linkedin: "fajarhidayat",
    },
    bio: "Cloud architect certified. Mengelola infrastruktur cloud DSC dan workshop GCP.",
  },
  {
    id: 10,
    name: "Tara Wulandari",
    role: "Head of Division",
    division: "Game Development",
    photo: "/members/tara.jpg",
    socials: {
      instagram: "tarawulandari",
      github: "tarawulandari",
    },
    bio: "Game developer yang sudah publish 3 game di Play Store. Memimpin game jam bulanan DSC.",
  },
  {
    id: 11,
    name: "Hendra Wijaya",
    role: "Staff",
    division: "Web Development",
    photo: "/members/hendra.jpg",
    socials: {
      github: "hendrawijaya",
    },
    bio: "Frontend developer yang sedang belajar backend. Aktif berkontribusi di proyek open source DSC.",
  },
  {
    id: 12,
    name: "Putri Amelia",
    role: "Staff",
    division: "UI/UX Design",
    photo: "/members/putri.jpg",
    socials: {
      instagram: "putriamelia",
    },
    bio: "Junior designer yang antusias belajar. Membantu dalam pembuatan konten visual dan social media DSC.",
  },
];
