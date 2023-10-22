import React from "react";
import LogoIcon from "../assets/icon.webp";
import Image from "next/image";
import Badge from "./Badge";

const JobsCard = () => {
  return (
    <div className="transform overflow-hidden rounded-xl border border-gray-200 transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <div className="flex justify-between bg-gray-50  p-5 items-center border-b">
        <div className="flex gap-2 items-center ">
          <Image src={LogoIcon} alt="logo" className="w-7 h-7" />
          <span className="font-medium text-sm">Frontend Developer</span>
        </div>
        <button className="py-[6px] text-sm font-medium px-3 bg-jobster-indigo rounded-full text-white hover:bg-jobster-indigo-light ">
          Apply
        </button>
      </div>
      <div className="px-5">
        <div className="py-3 flex items-center justify-between border-b">
          <span className="text-sm text-gray-500">Skills</span>
          <div>
            <Badge title="Node" />
          </div>
        </div>
        <div className="py-3 flex items-center justify-between border-b">
          <span className="text-sm text-gray-500">Commitment</span>
          <div>
            <Badge title="Part-Time" color="green" />
          </div>
        </div>
        <div className="py-3 flex items-center justify-between border-b">
          <span className="text-sm text-gray-500">Experience</span>
          <div>
            <span className="text-sm text-gray-700">Not Required</span>
          </div>
        </div>
        <div className="py-3 flex items-center justify-between border-b">
          <span className="text-sm text-gray-500">Location</span>
          <div>
            <Badge title={"Remote"} color="blue" />
          </div>
        </div>
        <div className="py-3 flex items-center justify-between ">
          <span className="text-sm text-gray-500">Salary</span>
          <div>
            <span className="text-sm font-medium text-gray-900">
              30,0000 - 2 lakh INR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
