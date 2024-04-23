import type { HoldingCompanies } from "@/data/experiencesInfo";
import { handleImagesUrl } from "@/utils/functions";
import Image from "next/image";
import { type FC } from "react";

type Props = {
  data: HoldingCompanies;
};

const Companies: FC<Props> = ({ data }) => {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <div className="bg-white p-2 rounded-r-md flex gap-2 border border-l-2 border-l-blue-500">
      <Image
        src={handleImagesUrl(data.logo)}
        alt="companyIcon"
        width={30}
        height={30}
        loading="lazy"
        style={{
          borderRadius: "4px",
          maxHeight: 30,
        }}
      />
      <div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-gray-900 text-[.8rem]">{data.name}</p>
          </div>
        </div>
        <div className="mt-1">
          <p className="font-bold text-[.7rem] text-gray-700">Worked On:</p>
          <div className="flex gap-2 flex-wrap max-w-[36rem] mt-1">
            {data.workedOn.map((item, index) => (
              <p key={item} className="text-xs text-gray-600">
                {index > 0 && "-"}
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <p className="font-bold text-xs text-gray-700">Achievements:</p>
          <p className="text-xs text-gray-600">{data.achievements}</p>
        </div>
        {/* <div className="mt-1">
          <p className="font-bold text-xs text-gray-700">Skills:</p>
          <div className="flex gap-2 flex-wrap max-w-[36rem] mt-1">
            {data.skills.map((item, index) => (
              <p key={item} className="text-xs text-gray-600">
                {index > 0 && "-"}
                {item}
              </p>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Companies;
