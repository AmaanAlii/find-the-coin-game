// import logo from './logo.svg';
import { useState, useRef, useEffect } from "react";
import "./App.css";
import DifficultySwitchButtons from "./Components/DifficultySwitchButtons/DifficultySwitchButtons";

import StakeSetter from "./Components/StakeSetter/StakeSetter";
import CardRow from "./Components/CardRow/CardRow";

const rowArray = Array(10).fill(0);

const MAX_ROWS = 10;

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [stakeAmount, setStakeAmount] = useState(0.0000001);

  const [activeCardRow, setActiveCardRow] = useState(0);
  const [gameState, setGameState] = useState("start");
  const [payout, setPayout] = useState(0);

  const [isNotifyAnimation, setIsNotifyAnimation] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  // const [facesRevealed, setFacesRevealed] = useState(false);

  const scrollRef = useRef(null);

  const handleGameStart = () => {
    setActiveCardRow(0);
    setGameState("running");
    setPayout(0);
    // setFacesRevealed(false);
  };

  // useEffect(() => {
  //   console.log("execute croll called");
  //   let scrollAmount = 0;
  //   if (activeCardRow === 0) {
  //     scrollAmount = 100;
  //   } else {
  //     scrollAmount = activeCardRow * -100;
  //   }

  //   if (scrollRef.current) {
  //     console.log("inside if");
  //     scrollRef.current.scrollTo({
  //       top: scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [activeCardRow]);

  // const executeRowScroll = () => {
  //   console.log("execute croll called");
  //   let scrollAmount = 0;
  //   if (activeCardRow === 0) {
  //     scrollAmount = 100;
  //   } else {
  //     scrollAmount = activeCardRow * -100;
  //   }
  //   if (scrollRef.current) {
  //     console.log("inside if");
  //     scrollRef.current.scrollTo({
  //       top: scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  const handleCardClick = (faceValue) => {
    if (faceValue === 1) {
      // Increase payout based on stake
      setActiveCardRow((prevState) => prevState + 1);
      const newPayout = payout + stakeAmount;
      setPayout(newPayout);
      console.log("newpayout=", newPayout);
      console.log("payoutstate=", payout);
    } else if (faceValue === 0) {
      // Game over
      setGameState("over");
      // setFacesRevealed(true);
    }
  };

  const handlePlayAreaClick = () => {
    console.log("play area click");
    if (gameState !== "running") {
      setNotificationMessage("Please start the game!");
      setIsNotifyAnimation(true);
      setTimeout(() => {
        setIsNotifyAnimation(false);
      }, 3000);
    }
  };
  // const handleScroll = (event) => {
  //   Prevent manual scrolling
  //   event.preventDefault();
  // };

  const renderAdditionalRows = () => {
    const additionalRows = [];
    for (let i = 1; i < activeCardRow; i++) {
      additionalRows.push(
        <CardRow
          key={i}
          handleCardClick={handleCardClick}
          difficulty={difficulty}
          gameState={gameState}
          activeCardRow={activeCardRow}
          thisRowIndex={i}
        />
      );
    }
    return additionalRows;
  };

  useEffect(() => {
    if (gameState === "over") {
      setNotificationMessage("Game Over!");
      setIsNotifyAnimation(true);

      setTimeout(() => {
        setIsNotifyAnimation(false);
      }, 3000);
    }
  }, [gameState]);

  return (
    <div className="App">
      <div className=" flex justify-center items-center bg-black h-[100vh] w-full pt-10">
        <div className=" h-[70vh] w-[90%] rounded-lg flex justify-center items-center relative">
          <div
            className={` absolute inset-0 z-50 -top-56 ${
              isNotifyAnimation
                ? " animate-bounce flex justify-center items-center"
                : " hidden"
            }`}
          >
            <span className=" text-3xl font-bold text-red-500">
              {notificationMessage}
            </span>
          </div>
          <div className=" w-40% h-full relative">
            {gameState === "running" && (
              <div
                className="absolute inset-0 bg-gray-900 opacity-30 z-50 cursor-not-allowed"
                onClick={() => {}}
              />
            )}
            <div
              className=" w-full h-full bg-darkGray flex flex-col justify-start items-center 
          gap-5 p-5 rounded-l-lg"
            >
              <DifficultySwitchButtons
                difficulty={difficulty}
                setDifficulty={setDifficulty}
              />
              <button
                onClick={handleGameStart}
                className={`w-full h-16 rounded-lg text-2xl font-semibold hover:bg-blend-overlay hover:text-4xl ${
                  gameState === "running"
                    ? "bg-lightGray text-textGray"
                    : "bg-gradient-to-r from-purple-400 via-orange-300 to-green-300 text-black"
                }`}
              >
                {gameState === "running" ? "PICK A TILE" : "PLAY"}
              </button>
              <StakeSetter
                stakeAmount={stakeAmount}
                setStakeAmount={setStakeAmount}
              />
            </div>
          </div>
          <div
            onClick={handlePlayAreaClick}
            className=" w-[60%] h-full bg-lightGray rounded-r-lg p-10
           flex flex-col justify-start items-center gap-7"
          >
            <span className=" text-textGray font-semibold text-xl">
              {gameState === "start"
                ? `START THE GAME`
                : gameState === "running"
                ? `CURRENT PAYOUT - ${payout.toFixed(8)}`
                : `TAKEAWAY - ${payout.toFixed(8)}`}
            </span>

            <div
              className={`w-full h-[90%] flex flex-col-reverse justify-start 
            items-center gap-5 bg-darkestGray rounded-lg overflow-y-scroll pb-16 ${
              gameState === "running"
                ? ""
                : " pointer-events-none cursor-not-allowed"
            }`}
              // onWheel={handleScroll}
              ref={scrollRef}
            >
              {/* {rowArray.map((row, index) => (
                <CardRow
                  handleCardClick={handleCardClick}
                  difficulty={difficulty}
                  gameState={gameState}
                  activeCardRow={activeCardRow}
                  thisRowIndex={index}
                  // facesRevealed={facesRevealed}
                  key={index}
                />
              ))} */}

              {[...Array(MAX_ROWS)].map((_, index) => (
                <CardRow
                  key={index}
                  handleCardClick={handleCardClick}
                  difficulty={difficulty}
                  gameState={gameState}
                  activeCardRow={activeCardRow}
                  thisRowIndex={index}
                />
              ))}
              {/* Render additional rows based on game progress */}
              {renderAdditionalRows()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
