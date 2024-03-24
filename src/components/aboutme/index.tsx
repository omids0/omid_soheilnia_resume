import type { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="mb-4">
      <p className="font-bold text-[1rem] mb-4">About Me</p>
      <div className="text-[.8rem] text-gray-800">
        <p>
          {`Passionate Front-End Developer with expertise in crafting
          user-friendly interfaces. I translate complex web technologies into
          beautiful, accessible, and performant user experiences. Always
          learning and collaborating, I'm eager to contribute to your team's
          success.`}
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
