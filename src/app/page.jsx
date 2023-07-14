import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.PNG";

export default function Home() {
  return (
    <div>
      <div className="text-2xl mx-auto font-bold text-center bg-yellow-500 max-w-xl p-2">
        <h1>ECG - KASOA SOUTH REPORT SYSTEM</h1>
        <h1>User Login</h1>
      </div>
      <div className="bg-red-600 p-1 max-w-xl mx-auto"></div>

      <form
        action=""
        className="bg-blue-700 text-white text-2xl mx-auto max-w-xl p-4 flex items-center justify-center flex-col space-y-8"
      >
        <div className="space-x-6">
          <label htmlFor="" className=" text-2xl font-semibold ">
            Username
          </label>
          <input type="text" className="rounded-md p-2  " />
        </div>

        <div className="space-x-6">
          <label htmlFor="" className=" text-2xl font-semibold ">
            Password
          </label>
          <input type="text" className="rounded-md p-2  " />
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



