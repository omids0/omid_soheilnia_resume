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
      logo: "asiatech.jfif",
      start: ["2020", "1", "1"],
      end: ["2021", "9", "1"],
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
      name: "Mithaq Sadra Holding",
      achievements: "",
      isHolding: true,
      workedOn: [],
      logo: "misagheSadra.jpg",
      start: ["2022", "5", "1"],
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
          name: "PSPexpress",
          achievements: `Delivered the initial version of the project with X key features on time and within budget, despite a tight deadline and limited resources.
          Collaborated effectively with a team of 4 front-end developers to overcome challenges and achieve project goals.
          This project was a great success for our team and resulted in high customer satisfaction.`,
          workedOn: ["Admin Panel"],
          logo: "psp.jfif",
        },
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
          logo: "pelazio.jfif",
        },
      ],
    },
    {
      name: "Entekhab Electronic Group",
      achievements: "",
      isHolding: true,
      workedOn: [
        "Admin Panel (Base on logistic)",
        "Supplier Panel (Base on logistic)",
      ],
      myPosition: "Front-End Developer",
      logo: "entekhab.jfif",
      start: ["2023", "9", "01"],
      end: null,
      description: "",
      scope: "",
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
      holdingCompanies: [
        {
          name: "DekaPost (Club)",
          achievements:
            "Delivered the initial version of the project with X key features on time and within budget, despite a tight deadline and limited resources.",
          logo: "dekapost_logo.jpg",
          workedOn: ["Admin Panel", "Deka webApp"],
        },
        {
          name: "GeoMarketing",
          achievements: `Working on pure js and css base on arcGIS esri, This work experience was very interesting and excellent for me because by adding new features to this system, it made it easier for users and I got to know a new document that maybe rarely anyone wants to work with arcgis.`,
          logo: "arcgis.jpg",
          workedOn: ["arcGIS Maps SDK for JavaScript", "esri"],
        },
        {
          name: "EntekhabeMan.com",
          achievements: `Participation in the development and completion of the 'EntekhabeMan' website and internal panels.
            Completing tasks on time and with high quality.
            Contributing to project progress and achieving team goals.`,
          logo: "entekhabeman.jpg",
          workedOn: [
            "Admin Panel (Base on logistic)",
            "Supplier Panel (Base on logistic)",
          ],
        },
      ],
    },
  ],
};
