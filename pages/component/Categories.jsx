import React from "react";
import { category } from "@/utils/category";

const Categories = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full px-9 mt-10">
      <h1 className="md:text-2xl font-medium">
        List of recommended AI Services
      </h1>
      <div className="lg:px-32 w-full flex justify-center mt-8">
        <div className="space-x-4 space-y-4 text-center">
          {category.map((tool, idx) => (
            <div
              className="bg-primary-50 border-spacing-1 shadow px-3 py-1 md:px-5 md:py-1.5 rounded-full inline-block cursor-pointer"
              key={tool.id}
            >
              <p className="text-xs md:text-sm font-normal text-center">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
