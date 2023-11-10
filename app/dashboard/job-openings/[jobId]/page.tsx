"use client"

import React, { useState } from 'react'

const Page = () => {

    const [work, setWork] = useState<string>("");

  return (
    <main className="relative h-full py-0 overflow-auto">
    <div className="relative flex min-h-full max-w-full flex-col overflow-hidden">
      <nav aria-label="Progress">
        <ol
          role="list"
          className="divide-y divide-gray-200 border-b border-gray-200 md:flex md:divide-y-0"
        >
          <li className="relative md:flex md:flex-1">
            <a href="#" className="group flex w-full items-center">
              <span className="flex items-center px-6 py-4 text-sm font-medium">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-900">
                  Upload Resume
                </span>
              </span>
            </a>
            <div
              className="absolute right-0 top-0 hidden h-full w-5 md:block"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full text-gray-300"
                viewBox="0 0 22 80"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 -2L20 40L0 82"
                  vectorEffect="non-scaling-stroke"
                  stroke="currentcolor"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </li>
          <li className="relative md:flex md:flex-1">
            <a href="#" className="group flex w-full items-center">
              <span className="flex items-center px-6 py-4 text-sm font-medium">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-900">
                  Questions
                </span>
              </span>
            </a>
            <div
              className="absolute right-0 top-0 hidden h-full w-5 md:block"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full text-gray-300"
                viewBox="0 0 22 80"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 -2L20 40L0 82"
                  vectorEffect="non-scaling-stroke"
                  stroke="currentcolor"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </li>
          <li className="relative md:flex md:flex-1">
            <a href="#" className="group flex items-center">
              <span className="flex items-center px-6 py-4 text-sm font-medium">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                  <span className="text-gray-500 group-hover:text-gray-900">
                    3
                  </span>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                  Interview
                </span>
              </span>
            </a>
            <div
              className="absolute right-0 top-0 hidden h-full w-5 md:block"
              aria-hidden="true"
            >
              <svg
                className="h-full w-full text-gray-300"
                viewBox="0 0 22 80"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 -2L20 40L0 82"
                  vectorEffect="non-scaling-stroke"
                  stroke="currentcolor"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </li>
          <li className="relative md:flex md:flex-1">
            <a href="#" className="group flex items-center">
              <span className="flex items-center px-6 py-4 text-sm font-medium">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                  <span className="text-gray-500 group-hover:text-gray-900">
                    4
                  </span>
                </span>
                <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                  Projects
                </span>
              </span>
            </a>
          </li>
        </ol>
      </nav>
      <div
        className="min-h-full min-w-full flex-1"
        style={{ opacity: 1, transform: "none", zIndex: 1 }}
      >
        <div className="relative mx-auto min-h-full w-full max-w-5xl bg-white pt-6">
          <div className="min-h-full w-full flex-1">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Upload resume
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Complete your profile with a resume
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Mercor will use state-of-the-art AI to analyze your background.
                </p>
              </div>
              <div className="flex h-[50vh] items-center justify-center">
                <div className="w-full sm:w-3/4 lg:w-3/4 xl:w-2/3">
                  <div className="flex h-[40vh] items-center justify-center rounded-lg border border-dashed border-gray-900/25">
                    <div>
                      <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                        <div>
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="h-6 w-6 text-green-600"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="mt-3 text-center sm:mt-5">
                            <h3 className="text-base font-semibold leading-6 text-gray-900">
                              Resume uploaded successfully
                            </h3>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                <a href="https://storage.cloud.google.com/mercor_dashboard_data/chandrakantkofficial%40gmail.com_resume.pdf">
                                  Chandrakant Kushwah Resume.pdf
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 cursor-pointer sm:mt-6">
                          <label
                            htmlFor="file-upload"
                            className="inline-flex w-full cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            <input
                              autoComplete="off"
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              accept=".pdf"
                              className="sr-only"
                            />
                            Update your resume
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 right-0 flex w-[100vw] justify-between px-4 pb-4 lg:w-[calc(100vw-250px)]">
            <button
              type="button"
              className="rounded-full bg-red-50 px-7 py-2 text-lg font-semibold text-red-600 shadow-sm hover:bg-red-100"
            >
              Cancel Application
            </button>
            <button
              type="button"
              className="rounded-full bg-indigo-600 px-7 py-2 text-lg font-semibold text-indigo-50 shadow-sm hover:bg-indigo-500"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}

export default Page;