import { Fragment, type FC } from "react";
import { personalInfo } from "../../data/personalInfo";
import { contactInfo } from "../../data/contactInfo";
import Image from "next/image";
import { skills } from "@/data/skillsInfo";
import PersonalInfoDetails from "./personalInfoDetails";

const PersonalInfo: FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <p className="text-xl font-bold">{`${personalInfo.en.firstName} ${personalInfo.en.lastName}`}</p>
      </div>
      <p className="text-gray-500 text-md">{`${personalInfo.fa.job}`}</p>
      <div className="flex flex-col py-5 text-gray-700 gap-2">
        <p className="ltr text-sm">{contactInfo.fa.phoneNumber}</p>
        <p className="text-sm">{contactInfo.fa.emailAddress}</p>
        <a
          href={contactInfo.fa.linkedin}
          target="_blank"
          className="text-sm text-blue-500"
        >
          linkedin.com/omid-so
        </a>
        <a
          href={contactInfo.fa.github}
          target="_blank"
          className="text-sm text-blue-500"
        >
          github.com/omidS0
        </a>
      </div>
      <div className="flex flex-col gap-2 text-gray-700">
        <PersonalInfoDetails
          title="Education"
          description={personalInfo.en.education}
        />
        <PersonalInfoDetails
          title="Military service status"
          description={personalInfo.en.militaryServiceStatus}
        />
        <PersonalInfoDetails
          title="Address"
          description={`${personalInfo.en.country}-${personalInfo.en.city}`}
        />
      </div>
      <div className="flex flex-col text-gray-700 mt-5">
        <p className="font-bold mb-1 text-sm">Skills</p>
        <div className="flex flex-col gap-4">
          <div>
            {skills.fa.tech.map((item) => (
              <p className="text-[.8rem]" key={item}>{`- ${item}`}</p>
            ))}
          </div>
          <div>
            {skills.fa.ui.map((item) => (
              <p className="text-[.8rem]" key={item}>{`- ${item}`}</p>
            ))}
          </div>
          <div>
            {skills.fa.other.map((item) => (
              <p className="text-[.8rem]" key={item}>{`- ${item}`}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
