export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: "Announcement" | "Recap" | "Tutorial" | "Achievement";
}

export const news: NewsArticle[] = [
  {
    id: 1,
    title: "DSC Resmi Terdaftar sebagai UKM Kampus",
    slug: "dsc-resmi-terdaftar-ukm",
    excerpt:
      "Developer Student Club kini resmi menjadi Unit Kegiatan Mahasiswa yang diakui kampus. Langkah besar untuk komunitas teknologi kita.",
    content: `Setelah melalui proses panjang selama 6 bulan, Developer Student Club (DSC) akhirnya resmi terdaftar sebagai Unit Kegiatan Mahasiswa (UKM) di kampus kita. Pengakuan ini membuka banyak peluang baru bagi komunitas.

Dengan status UKM resmi, DSC kini mendapat akses ke fasilitas kampus seperti ruang kegiatan tetap, anggaran dari kampus, dan kesempatan untuk berpartisipasi dalam kegiatan resmi universitas.

"Ini adalah pencapaian besar bagi kita semua. Terima kasih kepada semua anggota yang sudah berjuang bersama," ujar Andi Pratama, Ketua DSC.

Ke depannya, DSC berencana untuk memperluas program mentorship, mengadakan lebih banyak workshop, dan menjalin kerja sama dengan komunitas teknologi di kampus lain.`,
    author: "Andi Pratama",
    date: "2026-09-28",
    image: "/news/ukm-registration.jpg",
    category: "Announcement",
  },
  {
    id: 2,
    title: "Recap: Hackathon Build for Campus",
    slug: "recap-hackathon-build-for-campus",
    excerpt:
      "20 tim berpartisipasi dalam hackathon 12 jam. Lihat project-project keren yang dihasilkan dan pemenangnya.",
    content: `Hackathon "Build for Campus" telah sukses diselenggarakan pada 20 Mei 2026 di Aula Utama Kampus. Sebanyak 20 tim dengan total 80 peserta berpartisipasi dalam marathon coding selama 12 jam.

Tema hackathon kali ini adalah membangun solusi teknologi untuk permasalahan nyata di kampus. Dari sistem antrian kantin hingga platform sharing catatan kuliah, ide-ide yang muncul sangat beragam dan kreatif.

Pemenang hackathon:
1. Tim "CampusFlow" — Aplikasi manajemen ruang kelas real-time
2. Tim "StudyBuddy" — Platform belajar kolaboratif berbasis AI
3. Tim "GreenCampus" — IoT monitoring penggunaan energi kampus

Seluruh project telah di-open source dan bisa diakses di GitHub organisasi DSC. Beberapa project bahkan sedang dalam pembicaraan untuk diimplementasikan oleh pihak kampus.`,
    author: "Sari Dewi",
    date: "2026-05-25",
    image: "/news/hackathon-recap.jpg",
    category: "Recap",
  },
  {
    id: 3,
    title: "Tutorial: Membuat REST API dengan Go",
    slug: "tutorial-rest-api-golang",
    excerpt:
      "Panduan langkah demi langkah membuat REST API menggunakan Go dan Gin framework. Dari setup hingga deployment.",
    content: `Go (Golang) semakin populer untuk backend development karena performanya yang tinggi dan syntax yang sederhana. Dalam tutorial ini, kita akan membuat REST API sederhana menggunakan Go dan Gin framework.

Prasyarat:
- Go 1.21+ terinstall
- Pemahaman dasar HTTP dan REST
- Code editor (VS Code recommended)

Langkah 1: Setup Project
Buat folder baru dan inisialisasi Go module. Install Gin framework sebagai HTTP router.

Langkah 2: Struktur Project
Kita akan menggunakan struktur clean architecture dengan pemisahan handler, service, dan repository layer.

Langkah 3: Implementasi CRUD
Buat endpoint untuk Create, Read, Update, dan Delete. Gunakan slice sebagai in-memory database untuk simplicity.

Langkah 4: Middleware
Tambahkan logging middleware dan CORS handler.

Langkah 5: Testing & Deployment
Tulis unit test dan deploy ke Cloud Run.

Source code lengkap tersedia di repository DSC.`,
    author: "Fajar Hidayat",
    date: "2026-08-15",
    image: "/news/golang-tutorial.jpg",
    category: "Tutorial",
  },
  {
    id: 4,
    title: "Anggota DSC Juara 1 Google Solution Challenge",
    slug: "juara-google-solution-challenge",
    excerpt:
      "Tim dari DSC berhasil meraih juara 1 regional di Google Solution Challenge 2026 dengan project smart waste management.",
    content: `Bangga! Tim yang terdiri dari anggota DSC berhasil meraih juara 1 di Google Solution Challenge 2026 tingkat regional Asia Tenggara.

Tim yang beranggotakan Rizki Fauzan, Nisa Rahma, Maya Putri, dan Dimas Aditya membangun "WasteWise" — sebuah platform smart waste management yang menggunakan computer vision untuk klasifikasi sampah dan optimasi rute pengumpulan sampah.

"Kami mengembangkan model ML yang bisa mengklasifikasikan 12 jenis sampah dengan akurasi 94%. Ditambah route optimization algorithm, sistem ini bisa mengurangi waktu pengumpulan sampah hingga 35%," jelas Nisa Rahma, lead data scientist tim.

Project ini menggunakan tech stack: TensorFlow Lite untuk ML model, Flutter untuk mobile app, Go untuk backend API, dan Google Cloud Platform untuk infrastructure.

Tim akan maju ke babak final global yang akan diadakan di Mountain View, California pada Desember 2026.`,
    author: "Budi Santoso",
    date: "2026-09-10",
    image: "/news/solution-challenge.jpg",
    category: "Achievement",
  },
  {
    id: 5,
    title: "Pendaftaran Anggota Baru DSC 2026/2027",
    slug: "pendaftaran-anggota-baru-2026-2027",
    excerpt:
      "DSC membuka pendaftaran anggota baru untuk periode 2026/2027. Terbuka untuk semua jurusan dan angkatan.",
    content: `Developer Student Club membuka pendaftaran anggota baru untuk periode 2026/2027! Kesempatan ini terbuka untuk seluruh mahasiswa aktif dari semua jurusan dan angkatan.

Yang akan kamu dapatkan sebagai anggota DSC:
- Akses ke workshop dan bootcamp eksklusif
- Mentorship dari senior developer
- Kesempatan mengerjakan project nyata
- Networking dengan komunitas tech nasional
- Sertifikat kegiatan untuk portofolio

Divisi yang tersedia:
- Web Development
- Mobile Development
- UI/UX Design
- Data Science
- Cloud Computing
- Game Development

Proses seleksi:
1. Isi formulir pendaftaran online
2. Assessment sederhana sesuai divisi pilihan
3. Interview dengan tim DSC

Pendaftaran dibuka mulai 1 Oktober hingga 15 Oktober 2026. Formulir tersedia di website DSC.

Tidak perlu pengalaman sebelumnya — yang penting semangat belajar dan berkontribusi!`,
    author: "Lina Kusuma",
    date: "2026-09-30",
    image: "/news/open-recruitment.jpg",
    category: "Announcement",
  },
];
