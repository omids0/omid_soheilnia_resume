import { type FC } from "react";
import { personalInfo } from "../data/personalInfo";
import { contactInfo } from "../data/contactInfo";
import Image from "next/image";
import { skills } from "@/data/skillsInfo";

const PersonalInfoDetails: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div className="mb-4">
      <p className="font-bold text-sm mb-1">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const PersonalInfo: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <div className="size-10 bg-white rounded-[50%] flex items-center justify-center overflow-hidden border-2 border-white">
          <Image
            src="/omidSoheilnia.jpg"
            alt="profile"
            width={250}
            height={250}
            loading="lazy"
          />
        </div>
        <p className="text-xl font-bold">{`${personalInfo.fa.firstName} ${personalInfo.fa.lastName}`}</p>
      </div>
      <p className="text-gray-500 text-md">{`${personalInfo.fa.job}`}</p>
      <div className="flex flex-col py-5 text-gray-700 gap-2">
        <p className="text-sm">{contactInfo.fa.emailAddress}</p>
        <p className="ltr text-end text-sm">{contactInfo.fa.phoneNumber}</p>
        <a href={contactInfo.fa.linkedin} target="_blank" className="text-sm">
          Linkedin
        </a>
      </div>
      <div className="flex flex-col gap-2 text-gray-700">
        <PersonalInfoDetails
          title="متولد"
          description={personalInfo.fa.bornYear}
        />
        <PersonalInfoDetails
          title="وضعیت خدمت"
          description={personalInfo.fa.militaryServiceStatus}
        />
        <PersonalInfoDetails
          title="ساکن"
          description={`${personalInfo.fa.country}-${personalInfo.fa.city}`}
        />
      </div>
      <div className="flex flex-col text-gray-700 mt-5">
        <p className="font-bold mb-1 text-sm">توانایی ها</p>
        <div className="flex flex-row justify-between">
          <div>
            {skills.fa.tech.map((item) => (
              <p className="text-sm" key={item}>{`- ${item}`}</p>
            ))}
          </div>
          <div>
            {skills.fa.ui.map((item) => (
              <p className="text-sm" key={item}>{`- ${item}`}</p>
            ))}
          </div>
        </div>
        {skills.fa.other.map((item) => (
          <p className="text-sm" key={item}>{`- ${item}`}</p>
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;
