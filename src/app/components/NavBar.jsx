import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-screen">
      <nav className="flex justify-between mx-auto sticky top-0 left-0 right-0  bg-blue-600 text-white items-center p-6 ">
        <Link href={""} className="font-bold text-3xl">
          {" "}
          ECG K.S
        </Link>
        <Link href={""} className="font-semibold text-xl">
          {" "}
          {/* Capture Report */}
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
