import React from "react";

const getData = async () => {
  try {
    const res = await fetch(
      "https://ecgreport-joseph-omari.vercel.app/api/Field",
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch meters");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading meters: ", error);
  }
};

export default function report() {
  return (
    <div>
      <div className="md:hidden h-[70vh] flex justify-center items-center text-red-800 text-3xl font-bold text-center">
        <h1>Viewed by Management Team Only</h1>
      </div>
      
    </div>
  );
}
