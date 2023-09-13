import React from "react";
import { category } from "@/utils/category";

const Categories = () => {
  return (
    <div className="max-w-screen-xl mx-auto w-full px-9 mt-10">
      <h1 className="text-3xl font-semibold">
        List of recommended AI Services
      </h1>
      <div className="px-32 w-full flex justify-center mt-4">
        <div className=" space-x-4 space-y-4">
          {category.map((tool, idx) => (
            <div
              className="bg-gray-200 border-spacing-1 shadow px-5 py-1.5 font-medium rounded-full inline-block cursor-pointer"
              key={tool.id}
            >
              <p className="text-sm text-center">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
