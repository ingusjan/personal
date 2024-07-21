import type { ChangeEvent } from "react";

type Props = {
  value: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

const Checkbox = ({ value, onChange, text }: Props) => {
  return (
    <div className="flex items-center">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={value}
        onChange={onChange}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-2 text-sm font-medium select-none text-gray-900 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
