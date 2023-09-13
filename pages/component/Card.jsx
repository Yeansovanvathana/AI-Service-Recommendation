import React from "react";
import Image from "next/image";
import { category } from "@/utils/category";

const Card = () => {
  // console.log(category);
  return (
    <div className="w-full flex justify-center">
      <div className="grid grid-cols-4 gap-6 place-content-center my-10 px-10 max-w-screen-xl">
        {category.map((item, idx) => (
          <div
            class="max-w-sm bg-white border border-gray-200 rounded-xl"
            key={item.id}
          >
            <div className="h-42 bg-blue-100 rounded-t-lg">
              <div className="px-10 pt-12">
                <Image
                  width={300}
                  height={300}
                  class="rounded-t-xl"
                  alt="Poster"
                  src="/event1.jpg"
                />
              </div>
            </div>

            <div class="px-5 space-y-3 my-3">
              <h5 class="text-2xl text-center font-medium truncate max-w-xs">
                {item.name}
              </h5>
              <p class="flex justify-center text-gray-500">
                Work on every task that we need, CVD 10 10 NA NA, also find the
                best for customer service
              </p>
              <div className="space-x-2">
                <div className="bg-gray-200 border-spacing-1 shadow px-4 py-1.5 font-medium rounded-full inline-block cursor-pointer">
                  <p className="text-xs text-center">hii</p>
                </div>
                <div className="bg-gray-200 border-spacing-1 shadow px-5 py-1.5 font-medium rounded-full inline-block cursor-pointer">
                  <p className="text-xs text-center">vathana</p>
                </div>
                <div className="bg-gray-200 border-spacing-1 shadow px-5 py-1.5 font-medium rounded-full inline-block cursor-pointer">
                  <p className="text-xs text-center">Odvito</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default Card;
