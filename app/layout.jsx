import { Inter } from "next/font/google";
import Navbar from "../components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BRIN CSMS",
  description: "CSMS Admin Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
