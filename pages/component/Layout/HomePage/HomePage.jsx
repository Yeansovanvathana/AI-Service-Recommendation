import React, { useState } from "react";
import TopScreen from "./TopScreen";
import Categories from "./Categories";
import Card from "./Card";
import { Service } from "@/utils/item";
import Paginator from "./Paginator";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 8;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = Service.slice(indexOfFirstEvent, indexOfLastEvent);
  const currentEvent = currentEvents.sort((a, b) => b.id - a.id);
  const totalEvents = Service.length;

  return (
    <div className="mx-auto flex flex-col min-h-screen">
      <TopScreen />

      <Categories />

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

export default HomePage;
// data = { currentEvent };
