import { FC } from "react";
import ExperiencesCard from "./experiencesCard";
import { experiencesInfo } from "@/data/experiencesInfo";

const ExperiencesInfo: FC = () => {
  return (
    <div>
      <p className="font-bold text-base mb-4">تجربیات</p>
      <div className="flex flex-col gap-2">
        {experiencesInfo.fa
          .map((item) => <ExperiencesCard key={item.name} data={item} />)
          .reverse()}
      </div>
    </div>
  );
};

export default ExperiencesInfo;
