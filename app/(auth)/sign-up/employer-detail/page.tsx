import React from "react";
import LogoSmall from "../../../assets/logoSmall.png";
import Image from "next/image";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
const page = () => {
  return (
    <>
      {" "}
      <div className="fixed top-8 left-8">
        <Image src={LogoSmall} alt="logosmall" className="w-10" />
      </div>
      <div className="employer-details h-screen w-screen animate">
        <section className="animate full-scroll-section h-screen w-screen flex items-center justify-center">
          <div className="w-2/5 mx-auto flex gap-2">
            <div className="flex text-jobster-indigo-light mt-1">
              <span>1</span>
              <ArrowSmallRightIcon className="w-6 h-6" />
            </div>
            <div className="w-full flex flex-col gap-9">
              <div>
                <h2
                  className="
                text-2xl  text-gray-700 "
                >
                  Welcome to Mercor. We&apos;re excited to match you with an
                  elite workforce.
                </h2>
              </div>
              <div>
                <form action="">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="text-2xl text-gray-700"
                    >
                      What&apos;s your first name?
                    </label>
                    <br />
                    <input
                      type="text"
                      className="text-2xl mb-3 mt-9 animate border-b-2 w-full focus:border-jobster-indigo-light text-jobster-indigo-light pb-2 outline-none font-light"
                      placeholder="Type your name here..."
                    />
                  </div>
                  <div>
                    <button className="py-2 flex gap-1 items-center p-3 rounded text-xl font-medium text-white bg-jobster-indigo hover:bg-jobster-indigo-light">
                      <span>OK</span>{" "}
                      <CheckIcon className="w-6 h-6 font-semibold" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="animate full-scroll-section  h-screen w-screen flex items-center justify-center">
          <div className="w-2/5 mx-auto flex gap-2">
            <div className="flex text-jobster-indigo-light mt-1">
              <span>2</span>
              <ArrowSmallRightIcon className="w-6 h-6" />
            </div>
            <div className="w-full flex flex-col gap-9">
              <div>
                <h2
                  className="
                text-2xl  text-gray-700 "
                >
                  Welcome to Mercor. We&apos;re excited to match you with an
                  elite workforce.
                </h2>
              </div>
              <div>
                <form action="">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="text-2xl text-gray-700"
                    >
                      What&apos;s your first name?
                    </label>
                    <br />
                    <input
                      type="text"
                      className="text-2xl mb-3 mt-9 animate border-b-2 w-full focus:border-jobster-indigo-light text-jobster-indigo-light pb-2 outline-none font-light"
                      placeholder="Type your name here..."
                    />
                  </div>
                  <div>
                    <button className="py-2 flex gap-1 items-center p-3 rounded text-xl font-medium text-white bg-jobster-indigo hover:bg-jobster-indigo-light">
                      <span>OK</span>{" "}
                      <CheckIcon className="w-6 h-6 font-semibold" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="animate full-scroll-section  h-screen w-screen flex items-center justify-center">
          <div className="w-2/5 mx-auto flex gap-2">
            <div className="flex text-jobster-indigo-light mt-1">
              <span>3</span>
              <ArrowSmallRightIcon className="w-6 h-6" />
            </div>
            <div className="w-full flex flex-col gap-9">
              <div>
                <h2
                  className="
                text-2xl  text-gray-700 "
                >
                  Welcome to Mercor. We&apos;re excited to match you with an
                  elite workforce.
                </h2>
              </div>
              <div>
                <form action="">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="text-2xl text-gray-700"
                    >
                      What&apos;s your first name?
                    </label>
                    <br />
                    <input
                      type="text"
                      className="text-2xl mb-3 mt-9 animate border-b-2 w-full focus:border-jobster-indigo-light text-jobster-indigo-light pb-2 outline-none font-light"
                      placeholder="Type your name here..."
                    />
                  </div>
                  <div>
                    <button className="py-2 flex gap-1 items-center p-3 rounded text-xl font-medium text-white bg-jobster-indigo hover:bg-jobster-indigo-light">
                      <span>OK</span>{" "}
                      <CheckIcon className="w-6 h-6 font-semibold" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="animate full-scroll-section  h-screen w-screen flex items-center justify-center">
          <div className="w-2/5 mx-auto flex gap-2">
            <div className="flex text-jobster-indigo-light mt-1">
              <span>4</span>
              <ArrowSmallRightIcon className="w-6 h-6" />
            </div>
            <div className="w-full flex flex-col gap-9">
              <div>
                <h2
                  className="
                text-2xl  text-gray-700 "
                >
                  Welcome to Mercor. We&apos;re excited to match you with an
                  elite workforce.
                </h2>
              </div>
              <div>
                <form action="">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="text-2xl text-gray-700"
                    >
                      What&apos;s your first name?
                    </label>
                    <br />
                    <input
                      type="text"
                      className="text-2xl mb-3 mt-9 animate border-b-2 w-full focus:border-jobster-indigo-light text-jobster-indigo-light pb-2 outline-none font-light"
                      placeholder="Type your name here..."
                    />
                  </div>
                  <div>
                    <button className="py-2 flex gap-1 items-center p-3 rounded text-xl font-medium text-white bg-jobster-indigo hover:bg-jobster-indigo-light">
                      <span>OK</span>{" "}
                      <CheckIcon className="w-6 h-6 font-semibold" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="animate full-scroll-section  h-screen w-screen flex items-center justify-center">
          <div className="w-2/5 mx-auto flex gap-2">
            <div className="flex text-jobster-indigo-light mt-1">
              <span>5</span>
              <ArrowSmallRightIcon className="w-6 h-6" />
            </div>
            <div className="w-full flex flex-col gap-9">
              <div>
                <h2
                  className="
                text-2xl  text-gray-700 "
                >
                  Welcome to Mercor. We&apos;re excited to match you with an
                  elite workforce.
                </h2>
              </div>
              <div>
                <form action="">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="text-2xl text-gray-700"
                    >
                      What&apos;s your first name?
                    </label>
                    <br />
                    <input
                      type="text"
                      className="text-2xl mb-3 mt-9 animate border-b-2 w-full focus:border-jobster-indigo-light text-jobster-indigo-light pb-2 outline-none font-light"
                      placeholder="Type your name here..."
                    />
                  </div>
                  <div>
                    <button className="py-2 flex gap-1 items-center p-3 rounded text-xl font-medium text-white bg-jobster-indigo hover:bg-jobster-indigo-light">
                      <span>OK</span>{" "}
                      <CheckIcon className="w-6 h-6 font-semibold" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
