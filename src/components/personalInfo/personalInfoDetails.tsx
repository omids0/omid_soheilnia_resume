import { type FC } from "react";

type Props = { title: string; description: string };

const PersonalInfoDetails: FC<Props> = ({ title, description }) => {
  return (
    <div className="mb-4">
      <p className="font-bold text-sm mb-1">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default PersonalInfoDetails;
