import {
  BriefcaseIcon,
  DocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const Page = () => {
  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            About us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Become a Mercor engineer today
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mercor has built the preeminent AI vetting platform to assess
            millions of software engineers and match them with US companies.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <DocumentCheckIcon className="h-6 w-6 text-white" />
                </div>
                Your application
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Click on a job opening to submit an application to Mercor. Your
                application will include a resume, an interview, and a Mercor
                challenge.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <DocumentMagnifyingGlassIcon className="h-6 w-6 text-white" />
                </div>
                Mercor assessment
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                We will use Mercor&apos;s cutting edge AI to analyze your
                resume, conduct your interview, and evaluate your challenge.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <BriefcaseIcon className="h-6 w-6 text-white" />
                </div>
                Job opportunities
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Mercor offers a diverse set of job opportunities focused on high
                paying positions at top US startups in Silicon Valley.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <NewspaperIcon className="h-6 w-6 text-white" />
                </div>
                Opportunity structure
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                While you&apos;ll work for Mercor and have our brand on your
                resume, we&apos;ll place you at exciting projects with elite
                founders.
              </dd>
            </div>
          </dl>
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
            ?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
