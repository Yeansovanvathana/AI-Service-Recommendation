import React from "react";

const TopScreen = () => {
  return (
    <div className="flex justify-center flex-col items-center w-full bg-gradient-to-b from-blue-100 to-blue-200 pt-40 md:pt-40 py-28 space-y-3 md:space-y-8">
      <h1 className="font-medium md:text-5xl text-2xl">
        AI Service Recommendation
      </h1>
      <p className="md:text-2xl text-base">
        Deliever your best experience with AI
      </p>
    </div>
  );
};

export default TopScreen;
