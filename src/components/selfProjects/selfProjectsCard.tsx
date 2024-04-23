import type { ProjectDetails } from "@/data/sampleProjects";
import { handleImagesUrl } from "@/utils/functions";
import Image from "next/image";
import type { FC } from "react";

type Props = {
  data: ProjectDetails;
};

const SelfProjectsCard: FC<Props> = ({ data }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex flex-col gap-2 max-w-[41rem] shadow-md">
      <p className="font-bold text-[.9rem] text-gray-900">{data.title}</p>
      <p className="text-[.8rem] text-gray-600">{data.description}</p>
      {data.hint && <p className="text-sm text-gray-600">* {data.hint}</p>}
      <p className="text-[.8rem] font-bold">Skills:</p>
      <div className="flex gap-2 text-[.7rem] text-gray-400 ltr">
        {data.skills.map((item) => (
          <p key={item}>#{item}</p>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src={handleImagesUrl("github.png")}
            alt="companyIcon"
            width={20}
            height={20}
            loading="lazy"
          />
          <a
            className="text-[.8rem] text-blue-500"
            href={data.github}
            target="_blank"
          >
            {data.github}
          </a>
        </div>
        |
        <div className="flex gap-2 items-center">
          <a
            className="text-[.8rem] text-blue-500"
            href={data.live}
            target="_blank"
          >
            {data.live}
          </a>
          <Image
            src={handleImagesUrl("internet.png")}
            alt="companyIcon"
            width={20}
            height={20}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default SelfProjectsCard;
