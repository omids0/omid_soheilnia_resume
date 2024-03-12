import { SkillsList } from "./skillsInfo";

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

export type CompanyInfo = {
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
  workedOn: string[];
};

type ExperiencesInfo = {
  fa: CompanyInfo[];
};

export const experiencesInfo: ExperiencesInfo = {
  fa: [
    {
      name: "Asiatech Co",
      workedOn: ["Admin Panel"],
      myPosition: "Front-End Developer",
      logo: "/asiatech.jfif",
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
    {
      name: "Pelazio",
      workedOn: [
        "Supplier Panel",
        "Admin Panel (Base on logistic)",
        "Warehouse App (Base on logistic)",
      ],
      logo: "/pelazio.jfif",
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
    {
      name: "PSPexpress",
      workedOn: ["Admin Panel"],
      myPosition: "Front-End Developer",
      logo: "/psp.jfif",
      start: ["2023", "1", "1"],
      end: ["2023", "9", "1"],
      description: "",
      scope: "Transportation",
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
    {
      name: "Entekhab Electronic Group",
      workedOn: [
        "Admin Panel (Base on logistic)",
        "Supplier Panel (Base on logistic)",
      ],
      myPosition: "Front-End Developer",
      logo: "/entekhab.jfif",
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
  ],
};
