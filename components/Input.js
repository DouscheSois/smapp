import { useState, useRef, useEffect } from "react";
import {
  XIcon,
  PhotographIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import data from "@emoji-mart/data";
// import { Picker } from "emoji-mart";

// function EmojiPicker(props) {
//   const ref = useRef();
//
//   useEffect(() => {
//     new Picker({ ...props, data, ref });
//   }, []);
//
//   return <div ref={ref} />;
// }

const Input = () => {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const filePickerRef = useRef(null);

  const addImageToPost = () => {};

  const Picker = (props = {}) => {
    const ref = useRef();

    import("emoji-mart").then((EmojiMart) => {
      new EmojiMart.Picker({ ...props, data, ref });
    });

    return <div ref={ref}></div>;
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

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
        <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
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
            <div className="icon" onClick={() => filePickerRef.current.click()}>
              <PhotographIcon className="h-[22px] text-white" />
              <input
                type="file"
                hidden
                onChange={addImageToPost}
                ref={filePickerRef}
              />
            </div>
            <div
              className="icon rotate-180"
              onClick={() => setShowEmojis(!showEmojis)}
            >
              <EmojiHappyIcon className="text-white h-[22px]" />
            </div>

            {showEmojis && (
              <div className="emojiPosition">
                <Picker onEmojiSelect={addEmoji} />
              </div>
            )}
          </div>
          <button
            className="bg-[#d65d7a] text-white rounded-full px-4 py-1.5 font-bold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim() && !selectedFile}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
