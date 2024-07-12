import { Roboto } from "next/font/google";
import "./globals.css";
import SearchBar from "../components/SearchBar";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sarkariexam360",
  description: "Search and filter various activities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[#FBFAFF]`}>
        <header className="bg-[#FFFFFF] text-black p-4 mb-6 shadow-[0px_3px_4px_0px_#EAEAEA78]">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Sarkariexam360</h1>
            <SearchBar />
          </div>
        </header>
        <main className="container mx-auto px-4">{children}</main>
        <footer className="mt-8 py-4 text-center text-gray-500">
          <p>&copy; 2024 Pravesh Meena. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
