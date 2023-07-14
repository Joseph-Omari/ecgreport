"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [groupNumber, setGroupNumber] = useState("");
  const [cusName, setCusName] = useState("");
  const [cusContact, setCusContact] = useState("");
  const [tarrifClass, setTarrifClass] = useState("");
  const [activity, setActivity] = useState("");
  const [meterNumber, setMeterNumber] = useState("");
  const [readings, setReadings] = useState("");
  const [anomaly, setAnomaly] = useState("");
  const [flatRate, setFlatRate] = useState("");
  const [digitalAddress, setDigitalAddress] = useState("");
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [remarks, setRemarks] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!meterNumber) {
      alert("meter number is required");
      return;
    }
    try {
      const res = await fetch(
        "https://ecgreport-joseph-omari.vercel.app/api/Field",
        {
          method: "POST",
          Headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            groupNumber,
            cusName,
            cusContact,
            tarrifClass,
            activity,
            meterNumber,
            readings,
            anomaly,
            flatRate,
            digitalAddress,
            idType,
            idNumber,
            remarks,
          }),
        }
      );
      if (res.ok) {
        router.push("/capturing");
        alert("Hurray!! Data Successfully Captured");
        router.push("/");
      } else {
        throw new Error("Failed to Add data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 w-3xl md:w-screen md:flex justify-center ">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex justify-between bg-slate-400 p-2 rounded-md">
          <h1>Reporting Group:</h1>
          <select
            name=""
            id=""
            className="p-1"
            onChange={(e) => setIdType(e.target.value)}
            value={idType}
          >
            <option value="Group 1">Group 1</option>
            <option value="Group 2">Group 2</option>
            <option value="Group 3">Group 3</option>
            <option value="Group 4">Group 4</option>
            <option value="Group 5">Group 5</option>
            <option value="Group 6">Group 6</option>
            <option value="Group 7">Group 7</option>
            <option value="Group 8">Group 8</option>
            <option value="Group 9">Group 9</option>
            <option value="Group 10">Group 10</option>
            <option value="Group 11">Group 11</option>
            <option value="Group 12">Group 12</option>
            <option value="Group 13">Group 13</option>
            <option value="Group 14">Group 14</option>
            <option value="Group 15">Group 15</option>
            <option value="Group 16">Group 16</option>
          </select>
        </div>
        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Customer Name:</h1>
          {/* <input
            onhange={(e) => setCusName(e.target.value)}
            value={cusName}
            type=""
            placeholder="Customer Name"
            className="rounded-r-md p-1"
          /> */}
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Customer Contact:</h1>
          <input
            onChange={(e) => setCusContact(e.target.value)}
            value={cusContact}
            type="tel"
            placeholder="0243000000"
            className="rounded-r-md p-1"
            maxLength={10}
            minLength={10}
          />
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Tariff Class:</h1>
          <select
            name=""
            id=""
            className="p-1"
            onChange={(e) => setTarrifClass(e.target.value)}
            value={tarrifClass}
          >
            <option value="Residential">Residential</option>
            <option value="Non Residential">Non Residential</option>
          </select>
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Activity:</h1>
          <input
            onChange={(e) => setActivity(e.target.value)}
            value={activity}
            type="text"
            placeholder="House"
            className="rounded-r-md p-1"
          />
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Meter Number:</h1>
          <input
            onChange={(e) => setMeterNumber(e.target.value)}
            value={meterNumber}
            type="tel"
            placeholder="191043225"
            className="rounded-r-md p-1"
            minLength={7}
            maxLength={10}
            required
          />
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Readings:</h1>
          <input
            onChange={(e) => setReadings(e.target.value)}
            value={readings}
            type="tel"
            placeholder="12345"
            className="rounded-r-md p-1"
          />
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Anomaly:</h1>
          <select
            name=""
            id=""
            onChange={(e) => setAnomaly(e.target.value)}
            value={anomaly}
          >
            <option value="Normal">Normal</option>
            <option value="Blank Meter">Blank Meter</option>
            <option value="Burnt Meter">Burnt Meter</option>
            <option value="Direct Service Connection">
              Direct Service Connection
            </option>
            <option value="Error Message Display">Error Message Display</option>
            <option value="Faulty Card">Faulty Card</option>
            <option value="Faulty Meter">Faulty Meter</option>
            <option value="Illegal Connection">Illegal Connection</option>
            <option value="Non Purchasing prepaid meter">
              Non Purchasing prepaid meter
            </option>
            <option value="Transferred Meter">Transferred Meter</option>
            <option value="Uncaptured Meter">Uncaptured Meter</option>
            <option value="Wrong Date/Time">Wrong Date/Time</option>
            <option value="Wrong Tarrif Class">Wrong Tarrif Class</option>
            <option value="Non Revised Tarrif">Non Revised Tarrif</option>
            <option value="Others">Others (State in Remarks)</option>
          </select>
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Flat Rate Category:</h1>
          <input
            onChange={(e) => setFlatRate(e.target.value)}
            value={flatRate}
            type="number"
            placeholder=""
            className="rounded-r-md p-1"
          />
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Digital Address:</h1>
          <input
            onChange={(e) => setDigitalAddress(e.target.value)}
            value={digitalAddress}
            type="text"
            placeholder="ABC"
            className="rounded-r-md p-1"
          />
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Type of Id:</h1>
          <select
            name=""
            id=""
            className="p-1"
            onChange={(e) => setIdType(e.target.value)}
            value={idType}
          >
            <option value="None">None</option>
            <option value="Ghana National Id">Ghana National Id</option>
            <option value="Voters Id">Voters Id</option>
            <option value="Passport">Passport</option>
            <option value="Drivers Licence">Drivers Licence</option>
          </select>
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>ID Card No.:</h1>
          <input
            onChange={(e) => setIdNumber(e.target.value)}
            value={idNumber}
            type="text"
            placeholder="ABC"
            className="rounded-r-md p-1"
          />
        </div>

        <div className="flex justify-between bg-slate-400 p-2 rounded-md items-center">
          <h1>Remarks:</h1>
          <input
            onChange={(e) => setRemarks(e.target.value)}
            value={remarks}
            type="text"
            placeholder="ABC"
            className="rounded-r-md p-1"
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="bg-green-500 p-4 rounded-md text-white"
          >
            Send Collected Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
