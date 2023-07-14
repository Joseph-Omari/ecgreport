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
    console.log("Error loading report: ", error);
  }
};



export default async function report() {
  const {reportdata} =  getData();
  // console.log(reportdata);

  return (
    <div>
      <div className="md:hidden h-[70vh] flex justify-center items-center text-red-800 text-3xl font-bold text-center">
        <h1>Viewed by Management Team Only</h1>
      </div>

      <div className="hidden md:block">
        <div className="p-4 mx-auto  justify-center text-center font-bold text-red-700 text-2xl">
          <h1>Report Recieved from Field</h1>
        </div>
        <div className="bg-slate-500 p-4 space-y-2 gap-4 text-left">
          <div className=" ">
            <div className="max-w-sm bg-white text-black p-4 mx-auto rounded-xl">
              <div>
                <div>
                  <h1>Group Number</h1>
                </div>
                <div>
                  <h1>Customer Name</h1>
                </div>
                <div>
                  <h1>Customer Contact</h1>
                </div>
                <div>
                  <h1>Tarrif Class</h1>
                </div>
                <div>
                  <h1>Activity</h1>
                </div>
                <div>
                  <h1>Meter Number</h1>
                </div>
                <div>
                  <h1>Readings</h1>
                </div>
                <div>
                  <h1>Anomalys</h1>
                </div>
                <div>
                  <h1>Flat Rate</h1>
                </div>
                <div>
                  <h1>Digital Address</h1>
                </div>
                <div>
                  <h1>Id Type</h1>
                </div>
                <div>
                  <h1>Id Number</h1>
                </div>
                <div>
                  <h1>Remarks</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
