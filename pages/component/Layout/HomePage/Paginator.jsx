import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Pagination({
  totalEvents,
  eventsPerPage,
  currentPage,
  onPageChange,
  maxPagesToShow = 5, // Maximum number of pages to display in the middle
}) {
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  const next = () => {
    if (currentPage === totalPages) return;
    onPageChange(currentPage + 1);
  };

  const prev = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  };

  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPageButtons = () => {
    const pages = [];

    // Display page numbers with ellipsis if there are too many pages
    const halfMax = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(currentPage - halfMax, 1);
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    if (startPage > 1) {
      // Add the first page button
      pages.push(
        <button
          key={1}
          className={`border rounded-full w-8 h-8 md:w-10 md:h-10 text-sm md:text-base flex items-center justify-center focus:outline-none ${
            currentPage === 1
              ? "bg-gradient-to-b from-blue-100 to-blue-200 text-gray-600 font-bold"
              : "text-gray-800"
          }`}
          onClick={() => handleClick(1)}
        >
          1
        </button>
      );

      if (startPage > 2) {
        // Add ellipsis if there are pages before the displayed pages
        pages.push(
          <button
            key="ellipsis-start"
            className="border rounded-full w-8 h-8 md:w-10 md:h-10 text-sm md:text-base flex items-center justify-center focus:outline-none text-gray-800"
            disabled
          >
            ...
          </button>
        );
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <button
          key={page}
          className={`border rounded-full w-8 h-8 md:w-10 md:h-10 text-sm md:text-base flex items-center justify-center focus:outline-none ${
            currentPage === page
              ? "bg-gradient-to-b from-blue-100 to-blue-200 text-gray-600 font-bold"
              : "text-gray-800"
          }`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        // Add ellipsis if there are pages after the displayed pages
        pages.push(
          <button
            key="ellipsis-end"
            className="border rounded-full w-8 h-7 md:w-10 md:h-10 text-sm md:text-base flex items-center justify-center focus:outline-none text-gray-700"
            disabled
          >
            ...
          </button>
        );
      }

      // Add the last page button
      pages.push(
        <button
          key={totalPages}
          className={`border rounded-full w-7 h-7 md:w-10 md:h-10 text-sm md:text-base flex items-center justify-center focus:outline-none ${
            currentPage === totalPages
              ? "bg-gradient-to-b from-blue-100 to-blue-200 text-gray-600 font-bold"
              : "text-gray-700"
          }`}
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="max-w-screen-sm flex justify-center mx-auto mt-10">
      <div className="flex items-center gap-2 md:gap-4">
        <button
          className={`border rounded-md p-1 md:px-3 md:py-2 focus:outline-none ${
            currentPage === 1 ? "text-gray-300" : "text-gray-900"
          }`}
          onClick={prev}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="icon" />
        </button>
        <div className="flex items-center gap-1 md:gap-2">
          {renderPageButtons()}
        </div>
        <button
          className={`border rounded-md p-1 md:px-3 md:py-2 focus:outline-none ${
            currentPage === totalPages ? "text-gray-300" : "text-gray-900"
          }`}
          onClick={next}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon className="icon" />
        </button>
      </div>
    </div>
  );
}
