import { type FC } from "react";

type Props = { title: string; description: string };

const PersonalInfoDetails: FC<Props> = ({ title, description }) => {
  return (
    <div className="mb-4">
      <p className="font-bold text-xs mb-1">{title}</p>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default PersonalInfoDetails;
