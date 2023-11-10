import { ArrowSmallLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import LogoSmall from "../../assets/logoSmall.png";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center ">
      <div className="fixed top-8 left-8">
        <Image src={LogoSmall} alt="logosmall" className="w-10" />
      </div>
      <div className="p-12 xl:w-1/3 shadow-lg rounded-lg flex gap-12 flex-col">
        <div>
          {" "}
          <Link href="/" className="text-xs flex items-center cursor-pointer">
            <ArrowSmallLeftIcon className="w-5" /> Back
          </Link>
        </div>
        <div className="text-center">
          <h2 className=" text-3xl font-semibold">
            Welcome back <br />
            to Mercor !
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Please enter your details
          </p>
        </div>
        <div>
          <form className="flex flex-col gap-5">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>{" "}
              <br />
              <input
                type="text"
                name="email"
                id=""
                className="border-b-2 mt-2 px-2   bg-gray-100 rounded text-sm  border-transparent py-1 text-jobster-indigo  outline-none focus:border-jobster-indigo w-full animate"
              />
              <span></span>
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>{" "}
              <br />
              <input
                type="password"
                name="password"
                id=""
                className="border-b-2 mt-2 px-2   bg-gray-100 rounded text-sm  border-transparent py-1 text-jobster-indigo  outline-none focus:border-jobster-indigo w-full animate"
              />
              <span></span>
              <p className="text-xs underline mt-2">
                <a href="" className="cursor-pointer">
                  Forgot Password?
                </a>
              </p>
            </div>

            <div className="mt-7">
              <button className="p-2 text-white w-full animate bg-jobster-indigo rounded-md hover:bg-jobster-indigo-extra-light text-sm font-medium">
                Login
              </button>
            </div>
          </form>
        </div>
        <div>
          <p className="text-center text-xs ">
            Don&apos;t have an account?{" "}
            <span className="font-medium underline  cursor-pointer">
              <Link href={"/sign-up"}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
