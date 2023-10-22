import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import {
  BriefcaseIcon,
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import NavOption from "../components/NavOption";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Children = {
  children: React.ReactNode;
};

const Layout = ({ children }: Children) => {
  const menu = [
    {
      title: "Job Openings",
      icon: <HomeIcon />,
      activeState: "/job-openings",
    },
    {
      title: "Profile",
      icon: <UsersIcon />,
      activeState: "/profile",
    },
    {
      title: "Fellowship",
      icon: <FolderIcon />,
      activeState: "/fellowship",
    },
    {
      title: "About Us",
      icon: <CalendarIcon />,
      activeState: "/about-us",
    },
  ];

  const applications = [
    {
      title: "Backend Developer",
      icon: <BriefcaseIcon />,
      activeState: "1",
    },
    {
      title: "Frontend Developer",
      icon: <BriefcaseIcon />,
      activeState: "2",
    },
    {
      title: "UI Developer",
      icon: <BriefcaseIcon />,
      activeState: "3",
    },
    {
      title: "Marketing",
      icon: <BriefcaseIcon />,
      activeState: "4",
    },
  ];

  return (
    <div className="w-screen h-screen flex">
      <div className="inset-y-0 flex w-60 flex-col border-r px-6 pb-4">
        <div className="pt-5 pl-2">
          <Image src={Logo} alt="Logo" className="w-36" />
        </div>
        <div className="pt-7 flex  flex-col gap-9 h-full">
          <div className="flex flex-col gap-y-1">
            {menu.map((item) => {
              return (
                <NavOption
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  activeState={item.activeState}
                />
              );
            })}
          </div>
          <div>
            <div className="ml-2 mb-3 text-gray-400 text-xs font-semibold">
              Application
            </div>
            <div className="flex flex-col gap-y-1">
              {applications.map((item) => {
                return (
                  <NavOption
                    title={item.title}
                    icon={item.icon}
                    activeState={item.activeState}
                    key={item.title}
                  />
                );
              })}
            </div>
          </div>
          <div className="mt-auto ">
            <NavOption
              icon={<Cog6ToothIcon />}
              title={"Settings"}
              activeState="/settings"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden h-full">
        <div className="border-b w-full p-4 px-8 flex gap-5 shadow-sm ">
          <div className="flex items-center gap-5 ml-auto">
            <div>
              <span className=""> Earn $ 250 </span>
            </div>
            <button className="bg-[#EEF2FF] py-2 px-3 rounded-md text-jobster-indigo  text-sm font-semibold">
              Refer Friends
            </button>
          </div>
          <div className="border-l my-2"></div>
          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 rounded-full bg-jobster-indigo text-white flex items-center justify-center">
              <UsersIcon className="w-5 h-5" />
            </div>
            <span className="text-sm font-semibold">Chandrakant Kushwah</span>
            <ChevronDownIcon className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="w-full h-full  overflow-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
