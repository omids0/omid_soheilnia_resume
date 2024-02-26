import { type FC } from "react";

const SelfProjects: FC = () => {
  return (
    <div className="mt-4">
      <p className="font-bold text-base mb-4">پروژهای شخصی</p>
      {/* <div className="flex flex-col gap-2">
          {experiencesInfo.fa
            .map((item) => <ExperiencesCard key={item.name} data={item} />)
            .reverse()}
        </div> */}
    </div>
  );
};

export default SelfProjects;
