import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.PNG";

export default function page() {
  return (

    <div className="">
      <h1 className="text-3xl text-center text-red-600 font-bold">
        Welcome to the ECG field meter capturing system
      </h1>

      <div className="text-2xl  flex flex-col items-center justify-center">
        <Link href={"/report"} className="font-bold text-blue-500">
          View Capturing Data
        </Link>
        <h1 className="text-base text-red-600">
          Only viewed by capturing team
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto mt-10">
        <Image
          src={Logo}
          alt="ecgLogo"
          className="flex justify-center  w-52 drop-shadow-lg animate-bounce"
        />
        <h1 className="font-bold text-2xl">KASOA SOUTH DISTRICT</h1>
      </div>
    </div>



      );
}
