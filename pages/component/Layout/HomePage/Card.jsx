import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Category from "../Category";

const Card = ({ data }) => {
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 place-content-center my-10 px-10 max-w-screen-xl">
        {data &&
          data.map((item, idx) => (
            <Link
              class="max-w-sm bg-white border border-gray-200 rounded-xl"
              key={idx}
              href={`/tool/${item.handle}`}
            >
              <div className="h-42 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-lg">
                <div className="px-10 pt-12">
                  <Image
                    width={300}
                    height={300}
                    class="rounded-t-xl"
                    alt="Poster"
                    src={item.image}
                  />
                </div>
              </div>

              <div class="px-5 space-y-3 my-3">
                <h5 class="text-2xl text-center font-medium truncate max-w-xs">
                  {item.name}
                </h5>
                <p class="text-gray-500 text-sm line-clamp-3">
                  {item.description}
                </p>
                <Category data={item.categories} bgColor={"bg-primary-50"} />
              </div>
            </Link>
          ))}
        {/*  */}
      </div>
    </div>
  );
};

export default Card;
