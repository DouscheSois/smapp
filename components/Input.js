// import Image from "next/image";
// import ImageOne from "../assets/ImageOne.jpg";

import { useState } from "react";
import { XIcon, PhotographIcon } from "@heroicons/react/outline";

const Input = () => {
  const [input, setInput] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
    >
      <img
        src="https://www.jquery-az.com/html/images/banana.jpg"
        alt="img vs Image"
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            id=""
            rows="2"
            placeholder="what is happening?"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
          ></textarea>
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XIcon className="text-white h-5" />
              </div>
              <img
                src={selectedFile}
                alt=""
                className="rounded-2xl mx-h-80 object-contain"
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <div className="icons">
              <PhotographIcon className="h-[22px] text-white" />
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
