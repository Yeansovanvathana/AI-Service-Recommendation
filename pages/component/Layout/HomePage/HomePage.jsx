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
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import CardSkeleton from "./CardSkeleton";

const HomePage = () => {
  const [currentCategory, setCurrentCategory] = useState("All");
  const [active, setActive] = useState("All"); // Initialize with "All"
  const [_, setAcitveCategory] = useRecoilState(activeCategory);
  const router = useRouter();
  const { pathname, query } = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Get the category from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");

    if (category) {
      setActive(category);
      setCurrentCategory(category);
      setAcitveCategory(category);
    }
  }, []);

  const handleCategoryChange = (category) => {
    query.category = category;

    router.push({
      pathname,
      query,
    });

    setActive(category);
    setCurrentCategory(category);
    setAcitveCategory(category);
    setCurrentPage(1);

    setSearchResults([]);
    setSearchQuery("");
  };

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

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    setSearchQuery(searchTerm);
    setAcitveCategory("All");

    const filteredData = All.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredData);
    setCurrentPage(1);
  };
  // console.log("currentEvent:", currentEvent.length);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;

  const currentData =
    searchResults.length > 0
      ? searchResults.slice(indexOfFirstEvent, indexOfLastEvent)
      : categoryData[currentCategory]?.slice(
          indexOfFirstEvent,
          indexOfLastEvent
        ) || [];

  const totalEvents =
    searchResults.length > 0
      ? searchResults.length
      : categoryData[currentCategory].length;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="mx-auto ">
      <Navbar
        isTopOfPage={isTopOfPage}
        onSearch={handleSearch}
        buttonActive={true}
      />

      <div className="flex flex-col min-h-screen">
        <TopScreen />
        <div className="max-w-screen-xl mx-auto w-full px-9 mt-10">
          <h1 className="md:text-2xl font-medium">
            List of recommended AI Services
          </h1>
          <div className="lg:px-32 w-full flex justify-center mt-4 md:mt-8">
            <div className="md:space-x-4 space-y-4 md:text-center">
              {Object.keys(categoryData).map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`mr-2 md:mr-0 bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer ${
                    active === category
                      ? "bg-gradient-to-b from-blue-100 to-blue-200"
                      : ""
                  }`}
                >
                  <p className="text-xs md:text-sm font-normal text-center">
                    {category.replace(/_/g, " ")}{" "}
                    {/* Replace underscores with spaces */}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading ? (
          <CardSkeleton />
        ) : (
          <div className="flex-grow ">
            {searchResults.length > 0 ? (
              <Card data={currentData} />
            ) : searchQuery.length > 0 ? (
              <div className="mt-[10%] font-semibold text-xl md:text-3xl lg:text-4xl flex items-center justify-center h-full text-gray-600">
                No results found for "{searchQuery}".
              </div>
            ) : (
              <Card data={currentData} />
            )}
          </div>
        )}

        {loading || searchQuery.length > 0 ? (
          <div></div>
        ) : (
          <Paginator
            totalEvents={totalEvents}
            eventsPerPage={eventsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
