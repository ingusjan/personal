import React from "react";

export default function Project(props) {
  return (
    <div className="py-3 px-4 mb-3 rounded-sm shadow-lg bg-gray-50 dark:bg-gray-800 lg:w-1/2">
      <h4 className="text-lg">{props.name}</h4>
      <p className="text-gray-400">{props.desc}</p>
      <a
        href={props.link}
        className="text-primary-400"
        target="_blank"
        rel="noreferrer"
      >
        {props.link}
      </a>
      <p className="text-sm text-gray-500 mt-2">
        Status:{" "}
        <span
          className={`${
            props.status === "Active"
              ? "dark:text-green-500 text-green-600"
              : "dark:text-red-500 text-red-600"
          } font-medium`}
        >
          {props.status}
        </span>
      </p>
    </div>
  );
}
