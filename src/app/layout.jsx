import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../app/_components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linda Eskilsson Portfolio",
  description: "A digital work portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-custBackground`}>
        <Header />
        <main className="flex flex-col items-center justify-center w-full min-h-screen gap-4 py-24 xl:py-0 ">
          {children}
        </main>
      </body>
    </html>
  );
}
