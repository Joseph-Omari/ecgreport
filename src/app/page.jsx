"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "public/logo.PNG";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const dpassword = "ecg123";
  const dusername = "ecgstaff";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === dpassword && username === dusername) {
      router.push("/report");
      alert("Login Successful");
    } else {
      alert("Incorrect Login Credentials");
    }
  };

  return (
    <div className="w-fit mx-auto  ">
      <div className="text-md md:text-xl mx-auto font-bold text-center bg-yellow-500 p-6 pt-6 rounded-t-2xl">
        <div className="flex justify-center">
          <Image
            src={Logo}
            alt="ecgLogo"
            className="flex justify-center  w-52 drop-shadow-lg animate-bounce"
          />
        </div>
        <h1>ECG - KASOA SOUTH REPORT SYSTEM</h1>
        <h1>User Login</h1>
      </div>
      <div className="bg-red-600 p-1  mx-auto"></div>

      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-blue-700 text-white text-md md:text-xl mx-auto  p-6 flex items-center justify-center flex-col space-y-8"
      >
        <div className="space-x-6">
          <label htmlFor="username" className=" text-2xl font-semibold ">
            Username
          </label>
          <input
            type="text"
            id="username"
            required
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-md p-1 text-black "
          />
        </div>

        <div className="space-x-6">
          <label htmlFor="password" className=" text-2xl font-semibold ">
            Password
          </label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md p-1 text-black"
          />
        </div>

        <div>
          <button
            type="submit"
            className="bg-yellow-600 rounded-md p-1 px-6 font-semibold"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
