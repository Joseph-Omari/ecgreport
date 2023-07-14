import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.PNG";

export default function Home() {
  return (
    <div className="w-fit mx-auto ">
      <div className="text-md md:text-xl mx-auto font-bold text-center bg-yellow-500  p-2 pt-6">
        <h1>ECG - KASOA SOUTH REPORT SYSTEM</h1>
        <h1>User Login</h1>
      </div>
      <div className="bg-red-600 p-1  mx-auto"></div>

      <form
        action=""
        className="bg-blue-700 text-white text-md md:text-xl mx-auto  p-4 flex items-center justify-center flex-col space-y-8"
      >
        <div className="space-x-6">
          <label htmlFor="" className=" text-2xl font-semibold ">
            Username
          </label>
          <input type="text" className="rounded-md p-1 text-black " />
        </div>

        <div className="space-x-6">
          <label htmlFor="" className=" text-2xl font-semibold ">
            Password
          </label>
          <input type="password" className="rounded-md p-1 text-black" />
        </div>

        <div>
          <button className="bg-yellow-600 rounded-md p-1 px-6 font-semibold">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
