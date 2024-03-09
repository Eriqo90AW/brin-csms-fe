import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export default function navbar() {
  return (
    <div className="top-0 sticky bg-[#151D20] w-screen h-[4rem] flex flex-col justify-center z-50">
      <div className="flex h-[60%] mx-10">
        <div id="logos" className="w-[15%] gap-4 flex flex-row justify-center">
          <div className="relative h-full w-[20%]">
            <Image
              src="/brin_logo.png"
              fill={true}
              alt="BRIN Logo"
              className="object-contain"
            />
          </div>
          <div className="relative h-full w-[20%]">
            <Image
              src="/ui_logo.png"
              fill={true}
              alt="UI Logo"
              className="object-contain"
            />
          </div>
        </div>
        <div id="menus" className="h-full w-[60%] flex flex-col justify-center">
          <div className="flex gap-1 items-center justify-center text-sm md:gap-10">
            <Link href="/" className="text-[#C6CDD5] font-light cursor-pointer hover:text-white">
              Home
            </Link>
            <Link href="/transaction" className="text-[#C6CDD5] font-light cursor-pointer hover:text-white">
              Transaction
            </Link>
            <Link href="/alert" className="text-[#C6CDD5] font-light cursor-pointer hover:text-white">
              Alert
            </Link>
            <Link href="/activity" className="text-[#C6CDD5] font-light cursor-pointer hover:text-white">
              Activity
            </Link>
            {/* <Link href="/report" className="text-[#C6CDD5] font-light cursor-pointer hover:text-white">
              Report
            </Link>
            <Link href="/pv-production" className="text-[#C6CDD5] font-light cursor-pointer hover:text-white">
              PV Production
            </Link>
            <Link href="/customer" className="text-[#C6CDD5] font-light cursor-pointer hover:text-white">
              Customer
            </Link>
            <Link href="/settings" className="text-[#C6CDD5] font-light cursor-pointer hover:text-white">
              Settings
            </Link> */}
          </div>
        </div>
        <div id="search" className="h-full w-[25%]">
          <div className="h-full flex gap-3 justify-end">
            <div className="h-full flex flex-col justify-center relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 text-[#C6CDD5] text-sm border-2 h-[80%] rounded-full border-[#C6CDD5] bg-transparent outline-none"
              />
              <CiSearch className="absolute font-bold text-[#C6CDD5] right-2 text-2xl" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="h-[80%]">
                <button className="h-full bg-gradient-to-br from-[#FF9900] to-[#FBC707] text-sm text-white rounded-3xl px-6 hover:brightness-110">
                  Admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
