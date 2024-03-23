import { type FC } from "react";
import SelfProjectsCard from "./selfProjectsCard";
import { sampleProjects } from "@/data/sampleProjects";

const SelfProjects: FC = () => {
  return (
    <div className="mt-4">
      <p className="font-bold text-[1rem] mb-4">Sample Projects</p>
      <div className="flex flex-col gap-1">
        {sampleProjects.fa.map((item) => (
          <SelfProjectsCard key={item.title} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SelfProjects;
