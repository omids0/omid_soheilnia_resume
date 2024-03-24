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

export type HoldingCompanies = Pick<
  CompanyInfo,
  "name" | "workedOn" | "logo" | "achievements"
>;

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
  isHolding: boolean;
  holdingCompanies?: HoldingCompanies[];
  achievements: string;
};

type ExperiencesInfo = {
  fa: CompanyInfo[];
};

export const experiencesInfo: ExperiencesInfo = {
  fa: [
    {
      name: "Asiatech Co",
      achievements: `Successfully resolved various bugs and issues, enhancing user experience and productivity.
      Implemented new features and functionalities based on user feedback and business requirements.
      Collaborated with cross-functional teams to ensure seamless integration and optimal performance.`,
      isHolding: false,
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
    // TODO
    {
      name: "Mithaq Sadra Holding",
      achievements: "",
      isHolding: true,
      workedOn: [],
      logo: "/misagheSadra.jpg",
      start: ["2022", "2", "1"],
      end: ["2023", "9", "1"],
      description: "",
      scope: "",
      skills: [],
      city: "Tehran",
      country: "Iran",
      employmentType: "Full-time",
      locationType: "On-site",
      myPosition: "Front-End Developer",
      holdingCompanies: [
        {
          name: "Pelazio",
          achievements: `
          -Successfully defined and implemented new features, enhancing functionality and user experience.
          -Resolved various bugs and issues, ensuring smooth operation and high performance.
          Collaborated with cross-functional teams to gather requirements and deliver high-quality solutions.
          `,
          workedOn: [
            "Supplier Panel",
            "Admin Panel (Base on logistic)",
            "Warehouse App (Base on logistic)",
          ],
          logo: "/pelazio.jfif",
        },
        {
          name: "PSPexpress",
          achievements: `Delivered the initial version of the project with X key features on time and within budget, despite a tight deadline and limited resources.
          Collaborated effectively with a team of 4 front-end developers to overcome challenges and achieve project goals.
          This project was a great success for our team and resulted in high customer satisfaction.`,
          workedOn: ["Admin Panel"],
          logo: "/psp.jfif",
        },
      ],
    },
    {
      name: "Entekhab Electronic Group",
      achievements: `Participation in the development and completion of the My Choice website and internal panels.
      Completing tasks on time and with high quality.
      Contributing to project progress and achieving team goals.`,
      isHolding: false,
      workedOn: [
        "Admin Panel (Base on logistic)",
        "Supplier Panel (Base on logistic)",
      ],
      myPosition: "Front-End Developer",
      logo: "/entekhab.jfif",
      start: ["2023", "8", "01"],
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
