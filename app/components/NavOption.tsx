"use client";
import { usePathname, useRouter } from "next/navigation";

import React, { ReactNode } from "react";

interface NavOpsProp {
  title: string;
  icon: ReactNode;
  activeState: string;
}

const NavOption = ({ title, icon, activeState }: NavOpsProp) => {
  const path = usePathname();
  const navigate = useRouter();
  const handleNavigate = () => {
    navigate.push("/dashboard" + activeState);
  };

  return (
    <div
      onClick={handleNavigate}
      className={`flex gap-2 items-center  cursor-pointer p-2 rounded ${
        path.includes(activeState)
          ? "text-jobster-indigo bg-gray-50"
          : "hover:bg-gray-50 text-gray-500"
      }`}
    >
      <span className="w-6 h-6 ">{icon}</span>
      <span className="text-sm font-semibold">{title}</span>
    </div>
  );
};

export default NavOption;
