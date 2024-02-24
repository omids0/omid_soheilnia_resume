import type { CompanyInfo } from "@/data/experiencesInfo";
import Image from "next/image";
import { type FC } from "react";

type Props = {
  data: CompanyInfo;
};

// TODO start time and end time

const ExperiencesCard: FC<Props> = ({ data }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex gap-2">
      <Image
        src={data.logo}
        alt="companyIcon"
        width={40}
        height={40}
        loading="lazy"
        style={{
          borderRadius: "4px",
          maxHeight: 40,
        }}
      />
      <div>
        <p className="font-bold text-gray-900">{data.myPosition}</p>
        <p className="text-sm text-gray-800">{`${data.name} (${data.scope}) - ${data.employmentType}`}</p>
        <div className="flex gap-2 text-gray-500">
          <p className="text-sm text-gray-400">
            {`${data.city}, ${data.country} . ${data.locationType}`}
          </p>
          {"/"}
          <p className="text-sm text-gray-400">{`Jun - Mar - 5Mon`}</p>
        </div>

        <div className="mt-1">
          <p className="font-bold text-sm text-gray-700">Worked On:</p>
          <div className="flex gap-2 flex-wrap max-w-[40rem] mt-1">
            {data.skills.map((item, index) => (
              <p key={item} className="text-xs text-gray-600">
                {index > 0 && "-"}
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencesCard;
