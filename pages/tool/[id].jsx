import React from "react";
import Head from "next/head";

const tool = () => {
  return (
    <div>
      <Head>
        <title>AI Services</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <div className="flex justify-center flex-col items-center w-full bg-gradient-to-b from-blue-100 to-blue-200 pt-40 md:pt-40 py-28 space-y-3 md:space-y-8">
        <h1 className="font-medium md:text-5xl text-2xl">
          AI Service Recommendation
        </h1>
        <p className="md:text-2xl text-base">
          Deliever your best experience with AI
        </p>
      </div>
    </div>
  );
};

export default tool;
