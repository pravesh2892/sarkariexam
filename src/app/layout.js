import { Roboto } from "next/font/google";
import "./globals.css";
import { CiSearch } from "react-icons/ci";

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
            <div className="mt-2 relative mr-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-8 pr-3 py-1 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <CiSearch
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
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
