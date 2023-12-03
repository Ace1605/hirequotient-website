import React from "react";
import { FaCheck } from "react-icons/fa6";

function PriceBox({ freeP, startP, proP }) {
  return (
    <div className="mt-10 grid grid-cols-1 w-full 880:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-xl">
        <p className="text-black font-semibold px-6 py-2 text-center inline-block bg-neutral-100 rounded-3xl">
          Free
        </p>
        <p className="mt-4 leading-[2rem] tracking-tight font-medium text-neutral-700 text-lg">
          So you can see how incredible our tool is.
        </p>
        <h3 className="text-[3rem]  mt-4 text-blackhue-100 font-bold">
          ${freeP}
          <span className="text-sm">/mo</span>
        </h3>
        <p className="font-medium text-black text-base tracking-tight">
          Free for ever
        </p>
        <button
          href="/"
          className="dark-button w-full flex justify-center h-14 px-8 mt-8"
        >
          Get started
        </button>
        <p className="font-medium text-center mt-1 text-black text-sm tracking-tight">
          No credit card needed
        </p>
        <p className="mt-8 leading-[2.5rem] font-medium text-blackhue-100 text-base">
          What's included:
        </p>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A cool feature</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A basic feature</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A top feature with limitations</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A basic feature</p>
        </div>
      </div>
      <div className="relative bg-white p-8 rounded-xl">
        <p className="text-black font-semibold px-6 py-2 text-center inline-block bg-yellow-700 rounded-3xl">
          Starter
        </p>
        <p className="-top-3 left-[64%] 880:left-25 1180:left-52 absolute text-sm text-white font-medium py-2 inline-block bg-black px-3 rounded-3xl">
          Best deal 🔥
        </p>
        <p className="mt-4 leading-[2rem] tracking-tight font-medium text-neutral-700 text-lg">
          So you can see how incredible our tool is.
        </p>
        <h3 className="text-[3rem]  mt-4 text-blackhue-100 font-bold">
          ${startP}
          <span className="text-sm">/mo</span>
        </h3>
        <p className="font-medium text-black text-base tracking-tight">
          Free for ever
        </p>
        <button
          href="/"
          className="dark-button w-full flex justify-center h-14 px-8 mt-8"
        >
          Get started
        </button>
        <p className="font-medium text-center mt-1 text-black text-sm tracking-tight">
          7 days free trial no credit card needed
        </p>
        <p className="mt-8 leading-[2.5rem] font-medium text-blackhue-100 text-base">
          What's included:
        </p>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A basic feature</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">An incredible feature so useful</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A basic feature</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A basic feature</p>
        </div>
      </div>
      <div className="bg-white p-8 rounded-xl">
        <p className="text-black font-semibold px-6 py-2 text-center inline-block bg-yellow-800 rounded-3xl">
          Pro
        </p>
        <p className="mt-4 leading-[2rem] tracking-tight font-medium text-neutral-700 text-lg">
          So you can see how incredible our tool is.
        </p>
        <h3 className="text-[3rem]  mt-4 text-blackhue-100 font-bold">
          ${proP}
          <span className="text-sm">/mo</span>
        </h3>
        <p className="font-medium text-black text-base tracking-tight">
          Free for ever
        </p>
        <button
          href="/"
          className="dark-button w-full flex justify-center h-14 px-8 mt-8"
        >
          Get started
        </button>
        <p className="font-medium text-center mt-1 text-black text-sm tracking-tight">
          7 days free trial no credit card needed
        </p>
        <p className="mt-8 leading-[2.5rem] font-medium text-blackhue-100 text-base">
          What's included:
        </p>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A basic feature</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A basic feature</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A basic feature</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">You need this feature</p>
        </div>
        <div className="flex items-center gap-2 my-3">
          <FaCheck className="text-primary-300 text-xl" />
          <p className="font-medium">A premium feature</p>
        </div>
      </div>
    </div>
  );
}

export default PriceBox;
