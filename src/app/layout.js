import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-col justify-between">
        <div className="">
          <NavBar />
        </div>
        <div className="">{children}</div>
        <div className="">
          <Footer />
        </div>
      </body>
    </html>
  );
}
