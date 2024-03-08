import React from "react";

function DifficultySwitchButtons({ difficulty, setDifficulty }) {
  const handleButtonsClick = (buttonName) => {
    setDifficulty(buttonName);
  };

  return (
    <div className=" bg-darkestGray h-12 w-[90%] p-1 flex justify-between items-center rounded-md ">
      <button
        onClick={() => handleButtonsClick("hard")}
        className={` flex justify-center items-center gap-2 text-textGray text-md font-bold h-full w-28 rounded-md ${
          difficulty === "hard" ? " bg-midGray text-white" : ""
        }`}
      >
        <div className=" flex flex-col justify-center items-center w-[16px] h-7 border-[1px] border-black rounded-sm">
          <div className=" w-full h-[7px] bg-green-900 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-900 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-900 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-400 border-[1px] border-black rounded-sm"></div>
        </div>
        HARD
      </button>

      <button
        onClick={() => handleButtonsClick("medium")}
        className={` flex justify-center items-center gap-2 text-textGray text-md font-bold h-full w-28 rounded-md ${
          difficulty === "medium" ? " bg-midGray text-white" : ""
        }`}
      >
        <div className=" flex flex-col justify-center items-center w-[16px] h-7 border-[1px] border-black rounded-sm">
          <div className=" w-full h-[7px] bg-green-900 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-900 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-400 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-400 border-[1px] border-black rounded-sm"></div>
        </div>
        MEDIUM
      </button>
      <button
        onClick={() => handleButtonsClick("easy")}
        className={`  flex justify-center items-center gap-2 text-textGray text-md font-bold h-full w-28 rounded-md ${
          difficulty === "easy" ? " bg-midGray text-white" : ""
        }`}
      >
        <div className=" flex flex-col justify-center items-center w-[16px] h-7 border-[1px] border-black rounded-sm">
          <div className=" w-full h-[7px] bg-green-900 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-400 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-400 border-[1px] border-black rounded-sm"></div>
          <div className=" w-full h-[7px] bg-green-400 border-[1px] border-black rounded-sm"></div>
        </div>
        EASY
      </button>
    </div>
  );
}

export default DifficultySwitchButtons;
