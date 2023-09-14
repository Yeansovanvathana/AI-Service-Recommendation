import React from "react";

const Category = ({ data, bgColor }) => {
  return (
    <div className="space-y-3">
      {data &&
        data.map((tool, idx) => (
          <div
            className={`border-spacing-1 shadow px-3 py-1 rounded-full inline-block cursor-pointer mr-2  ${bgColor}`}
            key={tool.id}
          >
            <p className="text-xs font-normal text-center">{tool.name}</p>
          </div>
        ))}
    </div>
  );
};

export default Category;
