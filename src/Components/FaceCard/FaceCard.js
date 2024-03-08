import React from "react";

import FaceCoinImg from "../../Images/Coins/FaceCoinImg.png";
import FaceSkullImg from "../../Images/Coins/FaceSkullImg.png";
function FaceCard({ faceValue }) {
  return (
    <div className=" flex justify-center items-center w-[100px] h-[100px] bg-cardGray rounded-md">
      <div
        className={` flex justify-center items-center w-full h-full rounded-lg ${
          faceValue === 1
            ? " bg-green-400 bg-opacity-20 border-green-700 border-2"
            : ""
        }`}
      >
        {faceValue === 1 ? (
          <img className=" w-[50%]" src={FaceCoinImg} alt="Coin Face" />
        ) : (
          <img className=" w-[50%]" src={FaceSkullImg} alt="Skull Face" />
        )}
      </div>
    </div>
  );
}

export default FaceCard;
