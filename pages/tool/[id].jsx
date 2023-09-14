import React from "react";
import Head from "next/head";
import Link from "next/link";
import Category from "../component/Category";
import { category2 } from "@/utils/category";
import { CalendarIcon } from "@heroicons/react/24/outline";

const tool = () => {
  return (
    <div className="">
      <Head>
        <title>AI Services</title>
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <div className="flex justify-center flex-col items-center w-full bg-gradient-to-b from-blue-100 to-blue-200 pt-40 md:pt-40 py-12 space-y-3 md:space-y-8">
        <h1 className="font-medium md:text-5xl text-2xl">Flot.ai</h1>
        <p className="md:text-xl text-base max-w-2xl text-center font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat cumque
          aut deserunt iure animi doloribus maiores ullam inventore voluptatum.
          Perferendis vitae illo voluptas? Corporis vitae eveniet natus,
          obcaecati blanditiis amet!
        </p>
      </div>
      <div className="flex justify-center mt-12 flex-col max-w-screen-sm mx-auto z-20">
        <div className="flex justify-center items-center">
          <img src="/event1.jpg" alt="" className="drop-shadow rounded-md" />
        </div>

        <div className="bg-primary-box bg-opacity-50 rounded-lg mt-5 py-5 px-5 md:px-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-bold text-xl ">Flot.ai</p>
              <div className="max-w-xs">
                <Category data={category2} bgColor={"bg-white"} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="border-2 rounded-lg p-2">
                  <CalendarIcon className="icon" />
                </div>
                <div>
                  <p className="text-sm">Add Date</p>
                  <p className="font-bold text-sm">12 12 2022</p>
                </div>
              </div>
              <div className="h-8 rounded-xl border-2 bg-blue-400 text-white font-semibold text-sm hover:border-2 flex items-center justify-center">
                Open Site
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-box bg-opacity-50 rounded-lg mt-5 py-2 px-5 md:px-10">
          <p className="font-bold text-sm md:text-base text-primary-blue">
            What is Flot.ai?
          </p>
        </div>

        <div className="bg-primary-box bg-opacity-50 rounded-lg mt-5 py-5 px-5 md:px-10">
          <p className="font-light text-sm md:text-base text-primary-blue">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            saepe cum voluptates tempora doloremque, eius ipsa excepturi
            tenetur, rem ducimus, ipsum consequatur. Nulla illum atque sapiente
            sit, magnam officia ullam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default tool;
