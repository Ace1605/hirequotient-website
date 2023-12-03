import React from "react";
import { motion } from "framer-motion";
import { cards } from "./constants";

function MoreFeatures() {
  return (
    <div className="grid grid-cols-1 px-0 880:px-20 880:grid-cols-3 gap-5">
      {cards?.map((x, index) => (
        <div key={index}>
          <div className="flex items-center bg-neutral-100 rounded-2xl p-8 h-[19rem]">
            <img
              className="w-7/12 880:w-8/12 mx-auto my-auto"
              src={x.image}
              alt="card_image"
            />
          </div>
          <p
            className={
              x.type === "grey"
                ? "mt-6 text-black font-semibold px-6 py-2 text-center inline-block bg-neutral-100 rounded-3xl"
                : x.type === "org"
                ? "mt-6 text-black font-semibold px-6 py-2 text-center inline-block bg-yellow-700 rounded-3xl"
                : x.type === "blue"
                ? "mt-6 text-black font-semibold px-6 py-2 text-center inline-block bg-primary-100 rounded-3xl"
                : x.type === "green"
                ? "mt-6 text-black font-semibold px-6 py-2 text-center inline-block bg-primary-200 rounded-3xl"
                : x.type === "peach"
                ? "mt-6 text-black font-semibold px-6 py-2 text-center inline-block bg-yellow-800 rounded-3xl"
                : "mt-6 text-black font-semibold px-6 py-2 text-center inline-block bg-primary-300 rounded-3xl"
            }
          >
            {x.title}
          </p>
          <p className="mt-8 leading-[2rem] font-medium text-neutral-700 text-base">
            {x.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MoreFeatures;
