import React from "react";
import { motion } from "framer-motion";

function MoreFeatures() {
  const cards = [
    {
      image: "/images/cal.svg",
      type: "grey",
      title: "Cross-Device Sync",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/taskss.svg",
      title: "Auto Event Import",
      type: "org",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },

    {
      image: "/images/todo.svg",
      title: "Task Delegation",
      type: "blue",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/meet.webp",
      title: "Voice Command Integration",
      type: "green",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/apps.webp",
      title: "Customizable Alerts",
      type: "peach",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/sche.webp",
      title: "Privacy Protection",
      type: "purple",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
  ];
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
