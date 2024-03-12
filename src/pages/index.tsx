import ExperiencesInfo from "@/components/experiencesInfo";
import PersonalInfo from "@/components/personalInfo";
import SelfProjects from "@/components/selfProjects";

export default function Home() {
  return (
    <div className="flex items-center">
      <div className="min-w-[60rem] mx-auto  flex flex-row-reverse">
        <div className="min-w-[15rem] max-w-[16rem] bg-cyan-100 p-4 rtl m-2 rounded-md">
          <PersonalInfo />
        </div>
        <div className="w-full p-4 rtl bg-white max-w-[43rem]">
          <ExperiencesInfo />
          <SelfProjects />
        </div>
      </div>
    </div>
  );
}
