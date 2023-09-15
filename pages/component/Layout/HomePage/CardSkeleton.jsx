import React from "react";
import { skeleton } from "@/utils/skeleton";

const CardSkeleton = () => {
  const data = skeleton;
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 place-content-center my-10 px-10 max-w-screen-xl">
        {data &&
          data.map((item, idx) => (
            <div
              class="max-w-sm bg-white border border-gray-200 rounded-xl"
              key={idx}
            >
              <div className="h-42 bg-gray-200 rounded-t-lg animate-pulse">
                <div className="px-10 pt-12">
                  <img
                    class="rounded-t-xl invisible"
                    alt="Poster"
                    src={item.img}
                  />
                </div>
              </div>

              <div class="flex-col px-5 space-y-3 my-3 flex justify-center items-center">
                <div class="w-28 h-2.5 rounded-full text-center font-medium truncate max-w-xs bg-gray-200 animate-pulse"></div>
                <div class="w-64 h-2 rounded-full text-center font-medium truncate max-w-xs bg-gray-200 animate-pulse"></div>
                <div class="w-64 h-2 rounded-full text-center font-medium truncate max-w-xs bg-gray-200 animate-pulse"></div>
                <div class="w-64 h-2 rounded-full text-center font-medium truncate max-w-xs bg-gray-200 animate-pulse"></div>
              </div>
              <div className="ml-5 pb-8 pt-2 animate-pulse">
                <div>
                  <div
                    className={`border-spacing-1 shadow w-20 h-2.5 rounded-full inline-block cursor-pointer mr-2  bg-gray-200`}
                  ></div>
                  <div
                    className={`border-spacing-1 shadow w-16 h-2.5 rounded-full inline-block cursor-pointer mr-2  bg-gray-200`}
                  ></div>
                  <div
                    className={`border-spacing-1 shadow w-14 h-2.5 rounded-full inline-block cursor-pointer mr-2  bg-gray-200`}
                  ></div>
                </div>
                <div
                  className={`border-spacing-1 shadow w-14 h-2.5 rounded-full inline-block cursor-pointer mr-2  bg-gray-200`}
                ></div>
                <div
                  className={`border-spacing-1 shadow w-28 h-2.5 rounded-full inline-block cursor-pointer mr-2  bg-gray-200`}
                ></div>
              </div>
            </div>
          ))}
        {/*  */}
      </div>
    </div>
  );
};

export default CardSkeleton;
