/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import 'animate.css/animate.min.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Nomadic Space - Jasa Pembuatan Maket, Kitchen Set dan Interior Design",
  description: "Kami adalah penyedia jasa pembuatan maket, design interior kitchen set terpercaya dan berpengalaman.",
  keywords: "jasa pembuatan maket, kitchen set, design interior"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <head>
        {/* Link ke CSS di public */}
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/css/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <div className="container-xxl bg-white p-0">
          <div className="container-fluid nav-bar bg-transparent">
            <Navbar />
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
