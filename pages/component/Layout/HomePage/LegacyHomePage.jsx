import React, { useEffect, useState } from "react";
import TopScreen from "./TopScreen";
import Card from "./Card";
import Paginator from "./Paginator";
import { All } from "@/utils/All";
import { AIChatbot } from "@/utils/AIChatbot";
import { videoEdit } from "@/utils/VideoEdit";
import { copywriting } from "@/utils/Copywriting";
import { Paraphraser } from "@/utils/Paraphraser";
import { GeneralWriting } from "@/utils/GeneraWriting";
import { Prompt } from "@/utils/Prompts";
import { SocialMediaAssistant } from "@/utils/SocialMediaAssistant";
import { EmailAssistant } from "@/utils/EmailAssistant";
import { useRecoilState, useRecoilValue } from "recoil";
import { activeCategory } from "@/services";

const LegecyHomePage = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAIChatbot, setShowAIChatbot] = useState(false);
  const [showVideoEditing, setShowVideoEditing] = useState(false);
  const [showCopywriting, setShowCopywriting] = useState(false);
  const [showParaphraser, setShowParaphraser] = useState(false);
  const [showGeneralWriting, setShowGeneralWriting] = useState(false);
  const [showPrompts, setShowPrompts] = useState(false);
  const [showSocialMediaAssistant, setShowSocialMediaAssistant] =
    useState(false);
  const [showEmailAssistant, setShowEmailAssistant] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [_, setAcitveCategory] = useRecoilState(activeCategory);

  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;
  console.log(currentCategory);

  const handleShowAll = () => {
    setShowAll(true);
    setShowAIChatbot(false);
    setShowVideoEditing(false);
    setShowCopywriting(false);
    setShowParaphraser(false);
    setShowGeneralWriting(false);
    setShowPrompts(false);
    setShowSocialMediaAssistant(false);
    setShowEmailAssistant(false);
    setCurrentCategory("All");
    setAcitveCategory("All");
    setCurrentPage(1);
  };

  const handleShowAIChatbot = () => {
    setShowAll(false);
    setShowAIChatbot(true);
    setShowVideoEditing(false);
    setShowCopywriting(false);
    setShowParaphraser(false);
    setShowGeneralWriting(false);
    setShowPrompts(false);
    setShowSocialMediaAssistant(false);
    setShowEmailAssistant(false);
    setCurrentCategory("AiChatbot");
    setAcitveCategory("AiChatbot");
    setCurrentPage(1);
  };

  const handleShowVideoEditing = () => {
    setShowAll(false);
    setShowAIChatbot(false);
    setShowVideoEditing(true);
    setShowCopywriting(false);
    setShowParaphraser(false);
    setShowGeneralWriting(false);
    setShowPrompts(false);
    setShowSocialMediaAssistant(false);
    setShowEmailAssistant(false);
    setCurrentCategory("VideoEdit");
    setAcitveCategory("VideoEdit");
    setCurrentPage(1);
  };

  const handleShowCopywriting = () => {
    setShowAll(false);
    setShowAIChatbot(false);
    setShowVideoEditing(false);
    setShowCopywriting(true);
    setShowParaphraser(false);
    setShowGeneralWriting(false);
    setShowPrompts(false);
    setShowSocialMediaAssistant(false);
    setShowEmailAssistant(false);
    setCurrentCategory("Copywring");
    setAcitveCategory("Copywring");
    setCurrentPage(1);
  };

  const handleShowParaphraser = () => {
    setShowAll(false);
    setShowAIChatbot(false);
    setShowVideoEditing(false);
    setShowCopywriting(false);
    setShowParaphraser(true);
    setShowGeneralWriting(false);
    setShowPrompts(false);
    setShowSocialMediaAssistant(false);
    setShowEmailAssistant(false);
    setCurrentCategory("Paraphraser");
    setAcitveCategory("Paraphraser");
    setCurrentPage(1);
  };

  const handleShowGeneralWriting = () => {
    setShowAll(false);
    setShowAIChatbot(false);
    setShowVideoEditing(false);
    setShowCopywriting(false);
    setShowParaphraser(false);
    setShowGeneralWriting(true);
    setShowPrompts(false);
    setShowSocialMediaAssistant(false);
    setShowEmailAssistant(false);
    setCurrentCategory("GeneralWriting");
    setAcitveCategory("GeneralWriting");
    setCurrentPage(1);
  };

  const handleShowPrompts = () => {
    setShowAll(false);
    setShowAIChatbot(false);
    setShowVideoEditing(false);
    setShowCopywriting(false);
    setShowParaphraser(false);
    setShowGeneralWriting(false);
    setShowPrompts(true);
    setShowSocialMediaAssistant(false);
    setShowEmailAssistant(false);
    setCurrentCategory("Prompts");
    setAcitveCategory("Prompts");
    setCurrentPage(1);
  };

  const handleShowSocial = () => {
    setShowAll(false);
    setShowAIChatbot(false);
    setShowVideoEditing(false);
    setShowCopywriting(false);
    setShowParaphraser(false);
    setShowGeneralWriting(false);
    setShowPrompts(false);
    setShowSocialMediaAssistant(true);
    setShowEmailAssistant(false);
    setCurrentCategory("SocialMediaAssistant");
    setAcitveCategory("SocialMediaAssistant");
    setCurrentPage(1);
  };

  const handleShowEmail = () => {
    setShowAll(false);
    setShowAIChatbot(false);
    setShowVideoEditing(false);
    setShowCopywriting(false);
    setShowParaphraser(false);
    setShowGeneralWriting(false);
    setShowPrompts(false);
    setShowSocialMediaAssistant(false);
    setShowEmailAssistant(true);
    setCurrentCategory("EmailAssistant");
    setAcitveCategory("EmailAssistant");
    setCurrentPage(1);
  };

  const categoryData = {
    All: All,
    AiChatbot: AIChatbot,
    VideoEdit: videoEdit,
    Copywring: copywriting,
    Paraphraser: Paraphraser,
    GeneralWriting: GeneralWriting,
    Prompts: Prompt,
    SocialMediaAssistant: SocialMediaAssistant,
    EmailAssistant: EmailAssistant,
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = categoryData[currentCategory].slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );
  const currentEvent = currentEvents.sort((a, b) => b.id - a.id);
  const totalEvents = categoryData[currentCategory].length;

  return (
    <div className="mx-auto flex flex-col min-h-screen">
      <TopScreen />

      <div className="max-w-screen-xl mx-auto w-full px-9 mt-10">
        <h1 className="md:text-2xl font-medium">
          List of recommended AI Services
        </h1>
        <div className="lg:px-32 w-full flex justify-center mt-8">
          <div className="md:space-x-4 space-y-4 md:text-center">
            <button
              onClick={handleShowAll}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showAll ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">All</p>
            </button>
            <button
              onClick={handleShowAIChatbot}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showAIChatbot ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                AI Chatbots
              </p>
            </button>
            <button
              onClick={handleShowVideoEditing}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showVideoEditing ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                Video editing
              </p>
            </button>
            <button
              onClick={handleShowCopywriting}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showCopywriting ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                Copywriting
              </p>
            </button>
            <button
              onClick={handleShowParaphraser}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showParaphraser ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                Paraphraser
              </p>
            </button>
            <button
              onClick={handleShowGeneralWriting}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showGeneralWriting ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                General writing
              </p>
            </button>
            <button
              onClick={handleShowPrompts}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showPrompts ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                Prompts
              </p>
            </button>
            <button
              onClick={handleShowSocial}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showSocialMediaAssistant ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                Social medie assistant
              </p>
            </button>
            <button
              onClick={handleShowEmail}
              className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                showEmailAssistant ? "bg-blue-200" : ""
              }`}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                Email assistant
              </p>
            </button>
          </div>
        </div>
      </div>

      <Card data={currentEvent} />

      <Paginator
        totalEvents={totalEvents}
        eventsPerPage={eventsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default LegecyHomePage;
// data = { currentEvent };
