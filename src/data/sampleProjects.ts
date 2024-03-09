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
        "در این پروژه امکان مشاهده محصولات، ثبت و خرید می باشد. توسط دسترسی ادمین سفارشات مدیریت و ثبت میشوند. (دسترسی ادمین جهت مشاهده نمونه کار در دسترس عموم قرار گرفته است.)",
      skills: ["ReactJS", "TailwindCSS", "ExpressJS", "Redux", "MongoDB"],
      live: "https://staff-menu-omid.vercel.app/",
      github: "https://github.com/omids0/staff-menu",
      hint: "",
    },
    {
      title: "Staff Resturant Menu",
      description:
        "این پروژه جهت استفاده کارکنان داخل رستوران طراحی شده است. از ظاهر جالبی برخوردار نیست، اما شرایط کار را آسان تر کرده است. سطح دسترسی ها در این پروژه لحاظ شده است.",
      hint: "username:10001;   password:admin",
      skills: ["ReactJS", "TailwindCSS", "ExpressJS", "Redux", "MongoDB"],
      github: "https://github.com/omids0/staff-menu",
      live: "https://staff-menu-omid.vercel.app/",
    },
    {
      title: "A set of JavaScript and React training projects",
      description:
        "مجموعه ای از پروژه های تمرینی و تفریحی که توسط اینجانب انجام شده است.",
      skills: [
        "HTML",
        "CSS",
        "react-reveal",
        "BootStrap",
        "JavaScript",
        "React",
      ],
      github: "https://github.com/omids0/",
      live: "https://omid-soheilnia-projects.herokuapp.com/",
    },
  ],
};
