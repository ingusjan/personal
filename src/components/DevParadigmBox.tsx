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
    <div className="p-4 bg-gray-800 rounded-lg">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="mb-2 prose prose-invert prose-2xl font-semibold">
            {title}
          </h3>
          <p className="text-gray-400 transition ease-in-out prose prose-invert min-w-full">
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
            <Tippy theme="light" content={tech.text}>
              <div className="text-xs mr-1 mb-1 inline-flex items-center font-semibold tracking-wider uppercase px-2 py-1 rounded-full bg-gray-700 border border-gray-600">
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
