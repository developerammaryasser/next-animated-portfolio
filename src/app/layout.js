import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import AnimationProvider from "@/utils/AnimationProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Website",
  description: "Ammar yasser portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900`}>
        <AnimationProvider>
          
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
