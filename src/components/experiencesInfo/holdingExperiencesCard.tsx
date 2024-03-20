import type { CompanyInfo } from "@/data/experiencesInfo";
import moment from "moment";
import Image from "next/image";
import { type FC } from "react";
import Companies from "./companies";

type Props = {
  data: CompanyInfo;
};

const HoldingExperiencesCard: FC<Props> = ({ data }) => {
  const startDate = moment(data.start.join("-"));
  const endDate = moment(data.end?.join("-"));

  const days = endDate.diff(startDate, "days");
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);

  const startMonth = moment(data.start[1], "M").format("MMM");
  const endMonth = data.end && moment(data.end[1], "M").format("MMM");

  return (
    <div className="bg-gray-50 p-4 rounded-lg flex gap-2 max-w-[41rem] shadow-md">
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
            <p className="text-sm text-gray-800">{`${data.name}`}</p>
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
        <div className="gap-1 flex flex-col">
          {data.holdingCompanies?.map((item) => (
            <Companies key={item.name} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoldingExperiencesCard;
