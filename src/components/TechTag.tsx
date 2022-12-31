import { Code } from "phosphor-react";
import { ReactNode } from "react";

const TechTag = ({ text, icon }: { text: string; icon?: ReactNode }) => {
  return (
    <div className="text-xs mr-2 inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-gray-800 border border-gray-700">
      <Code weight="bold" size="15px" className="mr-2" />
      {text}
    </div>
  );
};

export default TechTag;
