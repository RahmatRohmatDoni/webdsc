import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Student Club",
  description:
    "Komunitas mahasiswa pengembang teknologi — belajar, membangun, dan bertumbuh bersama.",
  icons: {
    icon: "/logo-dsc.png",
    apple: "/logo-dsc.png",
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-white dark:bg-[#0C0A09] text-[#1C1917] dark:text-[#E7E5E4]`}
      >
        <ThemeProvider>
          <Navbar />
          {props.children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
