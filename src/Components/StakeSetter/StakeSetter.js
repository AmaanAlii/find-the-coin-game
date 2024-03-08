import React from "react";

function StakeSetter({ stakeAmount, setStakeAmount }) {
  const MIN_STAKE = 0.00000001;
  const MAX_STAKE = 0.0000016;

  const handleStakeIncrement = () => {
    if (stakeAmount < MAX_STAKE) {
      let newStake = stakeAmount * 2;

      // To maintain the specific order of the stake increment
      if (newStake === 0.00000004) {
        newStake = 0.00000005;
      }
      setStakeAmount(newStake);
    }
  };

  const handleStakeDecrement = () => {
    if (stakeAmount > MIN_STAKE) {
      const newStake = stakeAmount / 2;
      setStakeAmount(newStake);
    }
  };

  const handleMinStakeCall = () => {
    setStakeAmount(MIN_STAKE);
  };

  const handleMaxStakeCall = () => {
    setStakeAmount(MAX_STAKE);
  };

  return (
    <div className=" w-full h-22 flex justify-between items-center bg-darkestGray rounded-lg border-lightGray border-4">
      <div
        className=" flex flex-col justify-start items-center 
      font-semibold text-lg text-textGray2 p-1 gap-1"
      >
        <button
          onClick={handleStakeDecrement}
          className=" w-16 h-8 bg-midGray rounded-sm hover:bg-lightGray"
        >
          -
        </button>
        <button
          onClick={handleMinStakeCall}
          className=" w-16 h-8 bg-midGray rounded-sm hover:bg-lightGray"
        >
          MIN
        </button>
      </div>
      <div>
        {" "}
        <span className=" font-semibold text-3xl text-textGray2">
          {stakeAmount.toFixed(8)}
        </span>
      </div>
      <div>
        <div
          className=" flex flex-col justify-start items-center 
      font-semibold text-lg text-textGray2 p-1 gap-1"
        >
          <button
            onClick={handleStakeIncrement}
            className=" w-16 h-8 bg-midGray rounded-sm hover:bg-lightGray"
          >
            +
          </button>
          <button
            onClick={handleMaxStakeCall}
            className=" w-16 h-8 bg-midGray rounded-sm hover:bg-lightGray"
          >
            MAX
          </button>
        </div>
      </div>
    </div>
  );
}

export default StakeSetter;
