import React from "react";

export default function Project(props) {
  return (
    <div className="py-4 px-5 mb-3 2xl:w-1/3 min-w-1/3 max-w-1/3 h-full min-h-full max-h-full rounded-sm shadow-lg bg-gray-50 dark:bg-gray-800 lg:mr-5">
      <div className="flex content-center items-center mb-5">
        <div className="mr-5">
          <img src={props.img} alt={props.name} className="rounded-full w-14" />
        </div>
        <div>
          <h4 className="text-lg">{props.name}</h4>
          <p className="text-primary-400">{props.type}</p>
        </div>
      </div>
      <p>{props.desc}</p>
      <a
        href={props.link}
        className="text-gray-400 underline"
        target="_blank"
        rel="noreferrer"
      >
        {props.link}
      </a>

      {props.tech && (
        <div className="mt-3 mb-3">
          <p className="text-primary-400 mb-2">Technology used</p>
          <div className="overflow-x-auto flex content-center items-center w-full h-full">
            {props.tech.map((x) => {
              return (
                <span className="dark:bg-gray-700 bg-gray-200 py-2 px-4 mr-2 text-sm rounded-full">
                  {x}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
