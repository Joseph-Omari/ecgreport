"use client";
import Link from "next/link";
import React, { useState } from "react";
import { router } from "next/navigation";



const NavBar = () => {
  let path = router;
  let show = true;
  // console.log(path)

  if (path === "/") {
    show = false;
    // alert(path)
    // console.log(path);
  } else {
  }

  return (
    <div className="w-screen h-fit">
      <nav className="flex justify-between mx-auto sticky top-0 left-0 right-0  bg-blue-600 text-white items-center p-6 ">
        <Link href={""} className="font-bold text-3xl">
          {" "}
          ECG K.S
        </Link>

        {show && <Link href={"/"} className="font-semibold text-xl">
          LogOut
        </Link>}
      </nav>
    </div>
  );
};

export default NavBar;
