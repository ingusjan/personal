import React from "react";

export default function Experience(props) {
  return (
    <div>
      <p
        className={`${
          props.current
            ? "bg-primary-400 text-sm text-gray-800 font-semibold py-1 px-3 my-1 inline-block rounded-full"
            : "dark:bg-gray-800 bg-gray-200 text-sm mt-3 text-gray-600 dark:text-gray-400 font-semibold py-1 px-3 my-1 inline-block rounded-full"
        }`}
      >
        {props.children}
      </p>
      <p>{props.date}</p>
    </div>
  );
}
