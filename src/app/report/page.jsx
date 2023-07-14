import React from "react";
import Logo from "public/logo.PNG";

function page() {
  return (
    <div>
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

export default page;
