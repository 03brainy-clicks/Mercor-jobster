import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import NavOption from "../components/NavOption";

const Page = () => {
  const menu = [
    {
      title: "Job Openings",
      icon: <HomeIcon />,
      activeState: "job-openings",
    },
    {
      title: "Profile",
      icon: <UsersIcon />,
      activeState: "profile",
    },
    {
      title: "Fellowship",
      icon: <FolderIcon />,
      activeState: "fellowship",
    },
    {
      title: "About Us",
      icon: <CalendarIcon />,
      activeState: "About-us",
    },
  ];

  return (
    <>
    hello
    </>
  );
};

export default Page;
