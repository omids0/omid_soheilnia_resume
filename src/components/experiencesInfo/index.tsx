import { FC } from "react";
import ExperiencesCard from "./experiencesCard";

const ExperiencesInfo: FC = () => {
  return (
    <div>
      <p className="font-bold text-base mb-4">تجربیات</p>
      <div className="flex flex-col gap-2">
        <ExperiencesCard />
        <ExperiencesCard />
        <ExperiencesCard />
        <ExperiencesCard />
      </div>
    </div>
  );
};

export default ExperiencesInfo;
