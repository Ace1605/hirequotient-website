import React from "react";
import { Eclipse } from "../svg/Eclipse";
import { GiGamepad } from "react-icons/gi";
import { Avatar1, Avatar2 } from "../svg/Avatar";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div id="hero" className="container 880:px-12">
      <div className="grid place-items-center pt-20 pb-20 px-0 880:px-48">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="text-black font-semibold px-4 py-1 text-center inline-block bg-neutral-100 rounded-3xl"
        >
          Another way to manage time
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="relative text-blackhue-100 text-4xl 640:text-[3.7rem] mt-2 880:mt-0 880:text-[5rem] font-bold text-center leading-[2.7rem] 640:leading-[3rem] 880:leading-[5.1rem]"
        >
          Your new favorite{" "}
          <span className="relative">
            {" "}
            gaming
            <span className="hidden 880:block absolute -top-8 640:-top-4 880:top-0 -left-2 640:-left-4">
              <Eclipse className="w-11/12 880:w-full" />
            </span>{" "}
          </span>
          <GiGamepad className="inline-block text-neutral-700" /> app
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
          }}
          className="pt-10 text-xl font-medium text-neutral-700 text-center px-4 640:px-12 880:px-20"
        >
          Have fun with this new gamification platform. Try out new and exciting
          games and also earn while you have fun on the platform
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
          }}
          href="/"
          className="dark-button h-14 px-8 mt-8 hover:scale-105 hover:transition-transform"
        >
          Get started, it&apos;s free
        </motion.button>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
          }}
          className="text-xs text-neutral-700 font-medium mt-2 tracking-tight"
        >
          Free 14 days trials,no credit card needed
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
          }}
          className="flex mt-8 items-center"
        >
          <Avatar1 className="border-2 border-white rounded-full" />
          <Avatar2 className="-ml-2 border-2 border-white rounded-full" />
          <Avatar1 className="-ml-2 border-2 border-white rounded-full" />
          <Avatar2 className="-ml-2 border-2 border-white rounded-full" />
          <Avatar1 className="-ml-2 border-2 border-white rounded-full" />
          <div className="pl-4">
            <div className="flex gap-1 items-center">
              <FaStar className="text-yellow-100" />
              <FaStar className="text-yellow-100" />
              <FaStar className="text-yellow-100" />
              <FaStar className="text-yellow-100" />
              <FaStar className="text-yellow-100" />
              <p className="font-medium text-blackhue-200">5.0</p>
            </div>
            <p className="font-medium text-sm tracking-tight">
              From 200+ happy users
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <img
          className="object-contain border border-neutral-20 rounded-2xl shadow-md"
          src="/images/superpage.webp"
          alt="hero_img"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
