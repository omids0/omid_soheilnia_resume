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
      "TailwindCss",
      "Material-UI",
      "Ant-Design",
      "Figma",
      "CSS",
      "BootStrap",
      "SASS",
    ],
    tech: [
      "JavaScript",
      "ReactJs",
      "NextJS",
      "ReactNative",
      "TypeScript",
      "Redux",
      "React-query",
      "RTK",
      "Axios",
      "GraphQL",
      "Postman API",
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
