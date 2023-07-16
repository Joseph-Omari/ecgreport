import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ECG FIELD REPORT SYSTEM",
  description: "CAPTURING REPORT FOR THE REVENUE MOBILIZATION 11-11",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-col justify-between">
        <div className="">{<NavBar />}</div>
        <div className="">{children}</div>
        <div className="">{<Footer />}</div>
      </body>
    </html>
  );
}
