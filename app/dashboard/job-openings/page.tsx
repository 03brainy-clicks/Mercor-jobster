import JobsCard from "@/app/components/JobsCard";
import React from "react";

const page = () => {
  return (
    <div className="grid p-9 grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
    </div>
  );
};

export default page;
