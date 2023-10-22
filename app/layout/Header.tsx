import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

Image;
const Header = () => {
  return (
    <div className="p-6 ">
      <div className="mx-auto flex items-center justify-between text-sm ">
        <div className="logo">
          {" "}
          <Image src={Logo} alt="logo" width="115" />{" "}
        </div>
        <div className="menu">
          <ul className="hidden lg:flex lg:gap-x-12 text-sm font-semibold items-center">
            <a href="#partners">
              <li className="cursor-pointer border-b-2 py-1 border-transparent hover:border-jobster-indigo">
                Partners
              </li>
            </a>
            <a href="#teams">
              <li className="cursor-pointer border-b-2 py-1 border-transparent hover:border-jobster-indigo">
                Teams
              </li>
            </a>
            <a href="#product">
              <li className="cursor-pointer border-b-2 py-1 border-transparent hover:border-jobster-indigo">
                Product
              </li>
            </a>
            <a href="#candidates">
              <li className="cursor-pointer border-b-2 py-1 border-transparent hover:border-jobster-indigo">
                Candidates
              </li>
            </a>
          </ul>
        </div>
        <Link href={"/login"}>
          <div className="flex items-center ">
            <span>Apply for work</span>
            <ArrowSmallRightIcon className="w-6" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
