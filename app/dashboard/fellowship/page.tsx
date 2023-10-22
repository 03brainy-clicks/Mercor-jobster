"use client";
import React, { useState } from "react";

const Page = () => {
  const [work, setWork] = useState<string>("");
  const [experience, setExperience] = useState<string>("");

  return (
    <>
      <main className="relative h-full py-0 overflow-auto">
        <div className="bg-white pb-8 pt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl pb-10 lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Apply to fellowship
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Join an elite group of developers
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Mercor&apos;s fellowship is for developers looking for jobs. We
                offer mentorship and guidance to help you hone the skills you
                need to become a Mercor engineer.
              </p>
            </div>
            <div className="mx-auto w-full sm:w-3/4 lg:w-2/3 lg:px-8 xl:w-1/2">
              <form>
                <div className="pb-10">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Are you looking for full time work, part time work, or open
                    to either?
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message1"
                      rows={4}
                      value={work}
                      onChange={(e) => {
                        setWork(e.target.value);
                      }}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="pb-10">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    What experience do you have in full stack development?
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message1"
                      value={experience}
                      onChange={(e) => {
                        setExperience(e.target.value);
                      }}
                      rows={4}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button className="rounded-md px-3 py-2 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-400 relative flex items-center justify-center shadow-sm disabled:border disabled:border-indigo-600 disabled:bg-transparent disabled:text-transparent">
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="fixed bottom-4 right-4">
            <div
              className="relative inline-block text-left"
              data-headlessui-state=""
            >
              <button
                className="border-black-300 h-12 w-12 rounded-full border bg-white text-xl text-black shadow-lg"
                id="headlessui-menu-button-:r5:"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
