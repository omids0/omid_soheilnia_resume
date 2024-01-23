import Image from "next/image";
import { type FC } from "react";

const ExperiencesCard: FC = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg flex gap-2">
      <Image
        src="/omidSoheilnia.jpg"
        alt="profile"
        width={50}
        height={50}
        loading="lazy"
        style={{
          borderRadius: "4px",
          maxHeight: 50,
        }}
      />
      <div>
        <p className="font-bold">Front-End Developer</p>
        <p className="text-sm">Company - Full-Time</p>
        <div className="flex gap-2">
          <p className="text-sm text-gray-400">
            Tehran, Tehran Province, Iran . On-Site
          </p>
          {"/"}
          <p className="text-sm text-gray-400">{`Jun - Mar - 5Mon`}</p>
        </div>

        <div className="my-2">Skills:</div>
      </div>
    </div>
  );
};

export default ExperiencesCard;
