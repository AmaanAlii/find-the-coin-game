import React, { useEffect, useState } from "react";
import FaceCard from "../FaceCard/FaceCard";

function CardRow({
  difficulty,
  handleCardClick,
  activeCardRow,
  thisRowIndex,
  //   facesRevealed,
  gameState,
}) {
  const [arrayToDisplay, setArrayToDisplay] = useState([]);

  const [clikedCard, setClickedCard] = useState(null);
  const [rowFaceReveal, setRowFaceReveal] = useState(false);

  const [isRowActive, setIsRowActive] = useState(false);

  useEffect(() => {
    if (activeCardRow === thisRowIndex && gameState === "running") {
      setIsRowActive(true);
    } else {
      setIsRowActive(false);
    }
  }, [activeCardRow, gameState]);

  useEffect(() => {
    if (gameState === "over") {
      setRowFaceReveal(true);
    }
  }, [gameState]);

  const handleCardClickLocal = (value, index) => {
    setClickedCard(index);
    handleCardClick(value);
    setRowFaceReveal(true);
  };

  // Defining the initial array based on the difficulty
  let initialArray = [];
  if (difficulty === "easy") {
    initialArray = [1, 1, 1, 0];
  } else if (difficulty === "medium") {
    initialArray = [1, 1, 0, 0];
  } else if (difficulty === "hard") {
    initialArray = [1, 0, 0, 0];
  }

  // Defining the shuffle function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Using useEffect to shuffle the array when the component mounts or difficulty changes
  useEffect(() => {
    const shuffledArray = shuffleArray([...initialArray]);

    setArrayToDisplay(shuffledArray);
  }, [difficulty]);

  //   console.log(isRowActive);

  return (
    <div>
      <div
        className={`flex gap-5 justify-center items-center ${
          isRowActive ? "" : " pointer-events-none"
        }`}
      >
        {arrayToDisplay.map((value, index) => (
          <div
            key={index}
            onClick={() => handleCardClickLocal(value, index)}
            className={`relative ${isRowActive ? "" : " pointer-events-none"}`}
          >
            <div
              className={`${
                rowFaceReveal === false
                  ? `absolute inset-0  z-10 cursor-pointer rounded-lg ${
                      isRowActive
                        ? " bg-gradient-to-tr from-purple-400 to-orange-400 opacity-100"
                        : " bg-lightGray"
                    }
              ${
                clikedCard === index ? " border-gray-300 border-2" : " border-0"
              }`
                  : " hidden"
              }
              `}
            ></div>
            <FaceCard faceValue={value} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardRow;
