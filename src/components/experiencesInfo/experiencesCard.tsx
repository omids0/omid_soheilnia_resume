import type { CompanyInfo } from "@/data/experiencesInfo";
import moment from "moment";
import Image from "next/image";
import { type FC } from "react";

type Props = {
  data: CompanyInfo;
};

const ExperiencesCard: FC<Props> = ({ data }) => {
  const startDate = moment(data.start.join("-"));
  const endDate = moment(data.end?.join("-"));

  const days = endDate.diff(startDate, "days");
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);

  const startMonth = moment(data.start[1], "M").format("MMM");
  const endMonth = data.end && moment(data.end[1], "M").format("MMM");

  return (
    <div className="p-2 flex gap-2 max-w-[41rem]">
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
        <div className="flex justify-between w-[36rem]">
          <div className="flex flex-col">
            <p className="font-bold text-gray-900">{data.myPosition}</p>
            <p className="text-sm text-gray-800">{`${data.name} (${data.scope}) - ${data.employmentType}`}</p>
          </div>
          <div className="flex-col text-gray-500">
            <p className="text-sm text-gray-400 ltr">
              {`${data.city}, ${data.country} . ${data.locationType}`}
            </p>
            <div className="flex ltr text-sm text-gray-400 gap-1">
              <p>{`${startMonth} ${data.start[0]} -`}</p>
              <p>{`${data.end ? `${endMonth} ${data.end[0]}` : "Present"} `}</p>
              <p className="flex font-bold text-gray-500">
                ({years !== 0 && `${years}yr `}
                {months !== 0 && `${months}mo`})
              </p>
            </div>
          </div>
        </div>
        <div className="mt-1">
          <p className="font-bold text-xs text-gray-700">Worked On:</p>
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

export default ExperiencesCard;
