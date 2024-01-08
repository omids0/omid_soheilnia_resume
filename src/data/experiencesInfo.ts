import { SkillsList } from "./skillsInfo";

enum CompaniesNameList {
  AsiaTech = "asiaTech",
  Pelazio = "pelazio",
  Pspexpress = "pspexpress",
  entekhabElectronic = "entekhabElectronic",
}

type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Self-employed"
  | "Freelance"
  | "Contract"
  | "Internship"
  | "Apprenticeship"
  | "Seasonal";

type LocationType = "On-site" | "Hybrid" | "Remote";

type CompanyInfo = {
  name: string;
  myPosition: string;
  employmentType: EmploymentType;
  locationType: LocationType;
  country: string;
  city: string;
  logo: string;
  start: [string, string, string];
  end: [string, string, string] | null;
  skills: SkillsList[];
  description: string;
  scope: string;
};

type CompaniesList = Record<CompaniesNameList, CompanyInfo>;

type ExperiencesInfo = {
  fa: CompaniesList[];
};

const experiencesInfo: ExperiencesInfo = {
  fa: [
    {
      asiaTech: {
        name: "Asiatech Co",
        myPosition: "Front-End Developer",
        logo: "asiatech.png",
        start: ["2020", "1", "1"],
        end: ["2021", "10", "1"],
        description: "",
        skills: [
          "ReactJs",
          "JavaScript",
          "GitLab",
          "TeamWork",
          "Figma",
          "Redux",
          "Debugging",
          "REST APIs",
          "HTML",
          "CSS",
        ],
        employmentType: "Full-time",
        locationType: "Remote",
        country: "Iran",
        city: "Tehran",
        scope: "ITC",
      },
      pelazio: {
        name: "Pelazio",
        logo: "",
        start: ["2022", "6", "1"],
        end: ["2023", "4", "1"],
        description: "",
        scope: "Online-Shop",
        skills: [
          "ReactJs",
          "NextJS",
          "ReactNative",
          "JavaScript",
          "TypeScript",
          "Axios",
          "Redux",
          "Figma",
          "Ant-Design",
          "Material-UI",
          "Jira",
          "TeamWork",
          "GitLab",
          "Debugging",
          "REST APIs",
          "Problem Solving",
          "Postman API",
        ],
        city: "Tehran",
        country: "Iran",
        employmentType: "Full-time",
        locationType: "On-site",
        myPosition: "Front-End Developer",
      },
      pspexpress: {
        name: "PSPexpress",
        myPosition: "Front-End Developer",
        logo: "",
        start: ["2023", "1", "1"],
        end: ["2023", "8", "1"],
        description: "",
        scope: "transportation",
        skills: [
          "NextJS",
          "React-query",
          "TypeScript",
          "RTK",
          "GitLab",
          "Figma",
          "TailwindCss",
          "Jira",
          "StoryBook",
          "TeamWork",
          "Debugging",
          "REST APIs",
          "Problem Solving",
          "JavaScript",
          "Postman API",
        ],
        city: "Tehran",
        country: "Iran",
        employmentType: "Full-time",
        locationType: "On-site",
      },
      entekhabElectronic: {
        name: "Entekhab Electronic Group",
        myPosition: "Front-End Developer",
        logo: "",
        start: ["2023", "09", "01"],
        end: null,
        description: "",
        scope: "AI-Shop",
        skills: [
          "ReactJs",
          "RTK",
          "Redux",
          "TypeScript",
          "GitLab",
          "Figma",
          "Material-UI",
          "Jira",
          "StoryBook",
          "TeamWork",
          "Debugging",
          "REST APIs",
          "Problem Solving",
          "JavaScript",
          "Postman API",
        ],
        city: "Tehran",
        country: "Iran",
        employmentType: "Full-time",
        locationType: "On-site",
      },
    },
  ],
};
