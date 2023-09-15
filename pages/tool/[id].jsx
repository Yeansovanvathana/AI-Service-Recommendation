import React from "react";
import Head from "next/head";
import Link from "next/link";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { All } from "@/utils/All";
import { AIChatbot } from "@/utils/AIChatbot";
import { videoEdit } from "@/utils/VideoEdit";
import { copywriting } from "@/utils/Copywriting";
import { Paraphraser } from "@/utils/Paraphraser";
import { GeneralWriting } from "@/utils/GeneraWriting";
import { Prompt } from "@/utils/Prompts";
import { SocialMediaAssistant } from "@/utils/SocialMediaAssistant";
import { EmailAssistant } from "@/utils/EmailAssistant";
import { useRecoilValue } from "recoil";
import { activeCategory } from "@/services";

const tool = () => {
  const router = useRouter();
  const { id } = router.query;
  const active = useRecoilValue(activeCategory);

  const categoryData = {
    All: All,
    AI_Chatbot: AIChatbot,
    Video_Editing: videoEdit,
    Copywritng: copywriting,
    Paraphraser: Paraphraser,
    General_Writing: GeneralWriting,
    Prompts: Prompt,
    Social_Media_Assistant: SocialMediaAssistant,
    Email_Assistant: EmailAssistant,
  };

  let filterData = [];

  if (active && categoryData[active]) {
    filterData = categoryData[active].filter((item) => item.handle === id);
  }

  return (
    <div>
      <Head>
        <title>AI Recommender Hub</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>
      {filterData.map((item, idx) => (
        <div>
          <div className="flex justify-center flex-col items-center w-full bg-gradient-to-b from-blue-100 to-blue-200 pt-40 md:pt-40 py-12 space-y-3 md:space-y-8">
            <h1 className="font-medium md:text-5xl text-2xl">{item.name}</h1>
            <p className="md:text-lg text-sm max-w-2xl text-center font-light leading-6 md:leading-8 px-10">
              {item.description}
            </p>
          </div>
          <div className="flex justify-center mt-12 flex-col max-w-screen-sm mx-auto z-20 px-10 md:px-0">
            <div className="flex justify-center items-center">
              <img src={item.image} alt="" className="drop-shadow rounded-md" />
            </div>

            <div className="bg-primary-box bg-opacity-50 rounded-lg mt-5 py-5 px-5 md:px-10">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between space-y-4 md:space-x-0">
                <div>
                  <p className="font-bold text-xl ">{item.name}</p>
                  <div className="max-w-xs">
                    <div className="space-y-3">
                      {item.categories.map((tool, idx) => (
                        <div
                          className={`border-spacing-1 shadow px-3 py-1 rounded-full inline-block cursor-pointer mr-2  bg-white`}
                          key={idx}
                        >
                          <p className="text-xs font-normal text-center">
                            {tool.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="border-2 rounded-lg p-2">
                      <CalendarIcon className="icon" />
                    </div>
                    <div>
                      <p className="text-xs">Monthly Visits</p>
                      <p className="font-bold text-sm">
                        {item.month_visited_count}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={item.website}
                    className="h-8 rounded-xl border-2 border-blue-500 font-medium text-blue-500 text-sm cursor-pointer flex items-center justify-center transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-105 duration-300"
                  >
                    Open Site
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-primary-box bg-opacity-50 rounded-lg mt-5 py-2 px-5 md:px-10">
              <p className="font-bold text-sm md:text-base text-primary-blue">
                What is {item.name}?
              </p>
            </div>

            <div className="bg-primary-box bg-opacity-50 rounded-lg mt-5 py-5 px-5 md:px-10">
              <p className="font-light text-sm md:text-baseleading-6 md:leading-8">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default tool;
