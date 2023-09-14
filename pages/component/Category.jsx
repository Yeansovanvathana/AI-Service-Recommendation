import React from "react";

const Category = ({ data, bgColor }) => {
  return (
    <div>
      <div className="space-y-3">
        {data.map((tool, idx) => (
          <div
            className={`border-spacing-1 shadow px-3 py-1 rounded-full inline-block cursor-pointer mr-2  ${
              bgColor ? `${bgColor}` : "bg-primary-50"
            }`}
            key={tool.id}
          >
            <p className="text-xs font-normal text-center">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
