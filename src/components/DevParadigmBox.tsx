import Tippy from "@tippyjs/react";
import { Fragment } from "react";
import "tippy.js/themes/light.css";

const DevParadigmBox = ({
  title,
  desc,
  techTags,
}: {
  title: string;
  desc: string;
  techTags: { text: string; icon: JSX.Element }[];
}) => {
  return (
    <div className="p-4 bg-gray-900 border border-gray-700 rounded-lg">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-white mb-2 prose prose-invert prose-2xl font-semibold">
            {title}
          </h3>
          <p className="text-gray-300 transition ease-in-out prose prose-invert min-w-full">
            {/* Replace all \n with a new line */}
            {desc.split("\\n").map((line, i) => (
              <Fragment key={i}>
                {line}
                <br />
              </Fragment>
            ))}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap">
          {techTags?.map((tech) => (
            <Tippy key={tech.text} content={tech.text}>
              <div className="text-xs mr-1 mb-1 inline-flex items-center font-semibold tracking-wider uppercase p-2">
                <div>{tech.icon}</div>
                {/* <span>{tech.text}</span> */}
              </div>
            </Tippy>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevParadigmBox;
