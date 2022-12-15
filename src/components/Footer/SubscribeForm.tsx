import React from "react";
import { CloseIcon, AngleRightIcon } from "../Icons";

const SubscribeForm: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="flex items-center justify-center">
        <span className="text-gray-700 border-r-2 border-solid border-gray-800 font-bold px-2">
          Sing up for newletters
        </span>
        <span className="px-2">
          Start and end your day with FOS in your inbox
        </span>
      </div>
      <div className="flex items-center justify-center">
        <form className="w-full max-w-sm mr-4">
          <div className="flex items-center border-b border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Enter your work email"
            />
            <button
              className="flex flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
            >
              Subscribe
              <AngleRightIcon width={20} height={20}></AngleRightIcon>
            </button>
          </div>
        </form>
        <CloseIcon width={20} height={20} />
      </div>
    </div>
  );
};

export default SubscribeForm;