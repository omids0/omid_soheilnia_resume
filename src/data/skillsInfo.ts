export type SkillsList =
  | "GitLab"
  | "GitHub"
  | "Git"
  | "GitFlow"
  | "TeamWork"
  | "ReactJs"
  | "NextJS"
  | "Figma"
  | "Material-UI"
  | "Redux"
  | "RTK"
  | "Jira"
  | "Scrum"
  | "GraphQL"
  | "Ant-Design"
  | "Debugging"
  | "REST APIs"
  | "Problem Solving"
  | "JavaScript"
  | "TypeScript"
  | "ReactNative"
  | "React-query"
  | "Axios"
  | "TailwindCss"
  | "SASS"
  | "BootStrap"
  | "StoryBook"
  | "CSS"
  | "MongoDB"
  | "B2B"
  | "Responsive Web Page"
  | "HTML"
  | "Postman API";

type Skills = {
  fa: {
    ui: SkillsList[];
    tech: SkillsList[];
    other: SkillsList[];
  };
};

export const skills: Skills = {
  fa: {
    ui: [
      "Material-UI",
      "Ant-Design",
      "CSS",
      "Figma",
      "BootStrap",
      "TailwindCss",
      "SASS",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJs",
      "NextJS",
      "ReactNative",
      "TypeScript",
      "Axios",
      "MongoDB",
      "GraphQL",
      "Postman API",
      "Redux",
      "React-query",
      "Git",
      "RTK",
      "MongoDB",
    ],
    other: [
      "StoryBook",
      "Jira",
      "REST APIs",
      "Debugging",
      "GitFlow",
      "GitHub",
      "GitLab",
      "TeamWork",
      "Scrum",
    ],
  },
};
