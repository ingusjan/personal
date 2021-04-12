import { useState } from "react";

const Revue = (props) => {
  const {
    showFirstName,
    showLastName,
    emailLabel,
    firstNameLabel,
    lastNameLabel,
    emailInput,
    firstNameInput,
    lastNameInput,
    submitLabel,
  } = props;

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="mt-8" id="revue-embed">
      <form
        action="https://www.getrevue.co/profile/ingus/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
        className="flex flex-col lg:items-center lg:flex-row lg:space-x-4"
      >
        <div>
          <label htmlFor="member_email">Email address</label>
          <input
            className="w-full block rounded-md px-3 py-2 dark:bg-gray-800 dark:text-gray-100"
            placeholder="Your email address..."
            type="email"
            name="member[email]"
            id="member_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-5 lg:mt-0">
          <label htmlFor="member_first_name">
            First name{" "}
            <span className="text-gray-500 dark:text-gray-400">(Optional)</span>
          </label>
          <input
            className="w-full block rounded-md px-3 py-2 dark:bg-gray-800 dark:text-gray-100"
            type="text"
            name="member[first_name]"
            id="member_first_name"
          />
        </div>
        <div className="mt-5 lg:mt-0">
          <label htmlFor="member_last_name">
            Last name{" "}
            <span className="text-gray-500 dark:text-gray-400">(Optional)</span>
          </label>
          <input
            className="w-full block rounded-md px-3 py-2 dark:bg-gray-800 dark:text-gray-100"
            type="text"
            name="member[last_name]"
            id="member_last_name"
          />
        </div>
        <div className="mt-6">
          <button
            className="disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer bg-yellow-600 transition w-full lg:w-auto hover:bg-yellow-700 text-sm rounded-md px-5 py-3 lg:py-2 text-white"
            type="submit"
            value="Subscribe"
            name="member[subscribe]"
            id="member_submit"
            disabled={!email}
          >
            {submitLabel ? submitLabel : "Subscribe"}
          </button>
        </div>
        <div className="mt-3 lg:mt-6 lg:w-64 text-center lg:text-left text-sm text-gray-500 dark:text-gray-400">
          <p>
            By subscribing, you agree with Revue’s{" "}
            <a
              target="_blank"
              href="https://www.getrevue.co/terms"
              rel="noopener"
            >
              Terms
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              href="https://www.getrevue.co/privacy"
              rel="noopener"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default Revue;
