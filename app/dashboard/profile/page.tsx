import FileDragDrop from "@/app/components/FileDragDrop";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Upload Resume
            </h2>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete your profile with a resume
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Mercor will use state of the art artificial intelligence to
              automatically analyze your resume, combing through your work
              experience, projects, and education.
            </p>
          </div>
        </div>
      </div>
      <FileDragDrop />
    </>
  );
};

export default Page;
