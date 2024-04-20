export type ProjectDetails = {
  title: string;
  description: string;
  skills: string[];
  live: string;
  github: string;
  hint?: string;
};

type SampleProjects = {
  fa: ProjectDetails[];
};

export const sampleProjects: SampleProjects = {
  fa: [
    {
      title: "Online Shope",
      description:
        "In this project, it is possible to view products, register and buy. Orders are managed and registered by admin access. (Administrator's access to view work sample has been made available to the public.)",
      skills: ["ReactJS", "TailwindCSS", "ExpressJS", "Redux", "MongoDB"],
      live: "https://staff-menu-omid.vercel.app/",
      github: "https://github.com/omids0/staff-menu",
      hint: "",
    },
    {
      title: "Staff Restaurant Menu",
      description:
        "This project is designed for the use of employees inside the restaurant. It does not have an interesting appearance, but it has made the working conditions easier. The access level is included in this project.",
      hint: "username:10001;   password:admin",
      skills: ["ReactJS", "TailwindCSS", "ExpressJS", "Redux", "MongoDB"],
      github: "https://github.com/omids0/staff-menu",
      live: "https://staff-menu-omid.vercel.app/",
    },
    // {
    //   title: "A set of JavaScript and React training projects",
    //   description:
    //     "مجموعه ای از پروژه های تمرینی و تفریحی که توسط اینجانب انجام شده است.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "react-reveal",
    //     "BootStrap",
    //     "JavaScript",
    //     "React",
    //   ],
    //   github: "https://github.com/omids0/",
    //   live: "https://omid-soheilnia-projects.herokuapp.com/",
    // },
  ],
};
