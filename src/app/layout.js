import {
  Geist,
  Geist_Mono,
  Inter,
  Outfit,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title:"Docure - Online Doctor Appointment & Management System",

  description: "Streamline your healthcare experience with Docure. Effortlessly find top-rated doctors, book appointments, and manage your health records in one secure, user-friendly platform.",

  keywords: ["doctor appointment", "health management", "Docure", "medical booking", "online doctor"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col ">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>

        <Toaster />
      </body>
    </html>
  );
}
