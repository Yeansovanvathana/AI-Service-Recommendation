import React from "react";
import Image from "next/image";
import { Service } from "@/utils/item";
import Link from "next/link";
import Category from "./Category";
import { category2 } from "@/utils/category";

const Card = () => {
  // console.log(category);
  return (
    <div className="w-full flex justify-center mt-5">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 place-content-center my-10 px-10 max-w-screen-xl">
        {Service.map((item, idx) => (
          <Link
            class="max-w-sm bg-white border border-gray-200 rounded-xl"
            key={item.id}
            href={`/tool/${item.id}`}
          >
            <div className="h-42 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-lg">
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
              <p class="text-gray-500 text-sm">
                Work on every task that we need, CVD 10 10 NA NA, also find the
                best for customer service
              </p>
              <Category data={category2} />
            </div>
          </Link>
        ))}
        {/*  */}
      </div>
    </div>
  );
};

export default Card;
