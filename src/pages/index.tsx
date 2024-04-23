import AboutMe from "@/components/aboutme";
import ExperiencesInfo from "@/components/experiencesInfo";
import PersonalInfo from "@/components/personalInfo";
import SelfProjects from "@/components/selfProjects";
import { handleImagesUrl } from "@/utils/functions";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Omid SoheilNia Resume</title>
        <link rel="icon" href={handleImagesUrl("tab_icon.png")} sizes="any" />
      </Head>
      <div className="min-w-[60rem] mx-auto flex flex-row-reverse">
        <div className="w-full p-4 bg-white max-w-[43rem]">
          <AboutMe />
          <ExperiencesInfo />
          <SelfProjects />
        </div>
        <div className="w-[16rem] bg-green-100 p-4  rounded-md">
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}
