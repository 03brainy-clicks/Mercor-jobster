import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className="relative h-full py-0 overflow-auto">
      <div className="divide-y divide-black/5">
        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-base font-semibold leading-7 text-black">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <form className="md:col-span-2">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
              <div className="col-span-full flex items-center gap-x-8">
                <span className="inline-block overflow-hidden rounded-full bg-gray-100 h-14 w-14">
                  <Image src={""} alt={"logo"} className="w-full h-sull" />
                </span>
                <div>
                  <label
                    htmlFor="file-upload"
                    className="rounded-md bg-black/10 px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-black/20"
                  >
                    <span>Change avatar</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                    />
                  </label>{" "}
                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    JPG, GIF or PNG. 1MB max.
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="w-full max-w-xl">
                  <label
                    htmlFor="First name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <input
                      autoComplete="off"
                      type="text"
                      name="First name"
                      id="First name"
                      className="placeholder-padded block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="First name"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="w-full max-w-xl">
                  <label
                    htmlFor="Last Name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <input
                      autoComplete="off"
                      type="text"
                      name="Last Name"
                      id="Last Name"
                      className="placeholder-padded block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Last Name"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  className="mb-2 block text-sm font-medium leading-6 text-black"
                  id="headlessui-listbox-label-:r6:"
                  data-headlessui-state=""
                >
                  Country
                </label>
                <button
                  name="country-residence"
                  className="relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="country-residence"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                  aria-labelledby="headlessui-listbox-label-:r6: country-residence"
                >
                  <span className="block truncate">India (भारत) (+91)</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </div>
              <div className="sm:col-span-3">
                <div className="w-full max-w-xl">
                  <label
                    htmlFor="Phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <input
                      autoComplete="off"
                      type="tel"
                      name="Phone"
                      id="Phone"
                      className="placeholder-padded block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Phone"
                      defaultValue={8770454821}
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <div className="w-full max-w-xl">
                  <label
                    htmlFor="Email address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                    <input
                      autoComplete="off"
                      type="text"
                      name="Email address"
                      id="Email address"
                      className="placeholder-padded block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Email address"
                      defaultValue=""
                    />
                  </div>
                </div>
              </div>
              <label
                htmlFor="Marketing emails"
                className="flex items-center justify-between sm:col-span-6"
              >
                <div>
                  <div>
                    <p className="text-sm font-medium leading-6 text-black">
                      Marketing emails
                    </p>
                    <p className="text-sm leading-6 text-gray-400">
                      These emails broadcast Mercor events like Hackathons and
                      other new opportunities
                    </p>
                  </div>
                </div>
                <div className="relative inline-block w-10 select-none align-middle transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="Marketing emails"
                    id="Marketing emails"
                    className="hidden"
                  />
                  <label
                    htmlFor="Marketing emails"
                    className="toggle-label block h-6 w-10 cursor-pointer overflow-hidden rounded-full bg-gray-300"
                  >
                    <span className="dot absolute bottom-0 left-0 mb-1 ml-1 h-4 w-4 rounded-full transition-transform duration-200 ease-in  bg-white" />
                  </label>
                </div>
              </label>
              <label
                htmlFor="Application updates"
                className="flex items-center justify-between sm:col-span-6"
              >
                <div>
                  <div>
                    <p className="text-sm font-medium leading-6 text-black">
                      Application updates
                    </p>
                    <p className="text-sm leading-6 text-gray-400">
                      These emails update you on the status of your application
                    </p>
                  </div>
                </div>
                <div className="relative inline-block w-10 select-none align-middle transition duration-200 ease-in">
                  <input
                    type="checkbox"
                    name="Application updates"
                    id="Application updates"
                    className="hidden"
                  />
                  <label
                    htmlFor="Application updates"
                    className="toggle-label block h-6 w-10 cursor-pointer overflow-hidden rounded-full bg-gray-300"
                  >
                    <span className="dot absolute bottom-0 left-0 mb-1 ml-1 h-4 w-4 rounded-full transition-transform duration-200 ease-in  bg-white" />
                  </label>
                </div>
              </label>
            </div>
            <div className="mt-8 flex">
              <button className="rounded-md px-3 py-2 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-400 relative flex items-center justify-center shadow-sm disabled:border disabled:border-indigo-600 disabled:bg-transparent disabled:text-transparent">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
