import AboutMe from "@/components/aboutme";
import ExperiencesInfo from "@/components/experiencesInfo";
import PersonalInfo from "@/components/personalInfo";
import SelfProjects from "@/components/selfProjects";

export default function Home() {
  return (
    <div className="flex items-center">
      <div className="min-w-[60rem] mx-auto flex flex-row-reverse">
        <div className="w-full p-4 bg-white max-w-[43rem]">
          <AboutMe />
          <ExperiencesInfo />
          <SelfProjects />
        </div>
        <div className="w-[16rem] bg-cyan-100 p-4  rounded-md">
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}
