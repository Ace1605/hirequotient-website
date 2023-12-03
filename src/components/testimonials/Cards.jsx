import React from "react";
import { FaStar } from "react-icons/fa";
import { Avatar1 } from "../svg/Avatar";

function Cards() {
  return (
    <>
      <div className="bg-white border border-neutral-20 rounded-2xl p-4">
        <div className="flex justify-between">
          <div className="flex gap-4 items-center">
            <Avatar1 />
            <p className="font-semibold">“Just love it”</p>
          </div>
          <div className="flex gap-1 items-center">
            <FaStar className="text-yellow-100" />
            <FaStar className="text-yellow-100" />
            <FaStar className="text-yellow-100" />
            <FaStar className="text-yellow-100" />
            <FaStar className="text-yellow-100" />
          </div>
        </div>
        <p className="mt-2 font-normal">
          I love how user-friendly this app is! It's so easy to add events and
          set reminders, and it's made my life so much more organized.
        </p>
        <div className="flex mt-2 justify-between items-center">
          <p className="font-semibold">Adam </p>
          <p>Manager</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
