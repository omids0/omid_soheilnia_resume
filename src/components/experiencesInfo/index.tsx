import type { FC } from "react";
import ExperiencesCard from "./experiencesCard";
import { experiencesInfo } from "src/data/experiencesInfo";
import HoldingExperiencesCard from "./holdingExperiencesCard";

const ExperiencesInfo: FC = () => {
  return (
    <div>
      <p className="font-bold text-[1rem] mb-4">Experiences</p>
      <div className="flex flex-col gap-1">
        {experiencesInfo.fa
          .map((item) =>
            item.isHolding ? (
              <HoldingExperiencesCard key={item.name} data={item} />
            ) : (
              <ExperiencesCard key={item.name} data={item} />
            )
          )
          .reverse()}
      </div>
    </div>
  );
};

export default ExperiencesInfo;
