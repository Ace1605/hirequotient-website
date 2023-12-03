import React from "react";
import { SiNintendogamecube } from "react-icons/si";
import { FaFantasyFlightGames } from "react-icons/fa";
import MoreFeatures from "./MoreFeatures";
import { motion } from "framer-motion";

function Features() {
  return (
    <div id="Features" className="container">
      <div className="grid place-items-center pt-48 880:px-10 pb-20">
        <motion.p
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center gap-1 text-black font-semibold px-6 py-2 text-center inline-block bg-neutral-100 rounded-3xl"
        >
          Our main features
          <SiNintendogamecube className="text-yellow-100" />
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="text-[2.2rem] 880:text-[3.5rem] mt-4 text-center font-bold text-blackhue-100"
        >
          Discover your latest upgrades
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="mt-14 880:mt-20 grid grid-cols-1 880:grid-cols-2 items-center"
        >
          <div>
            <p className="text-black font-semibold px-6 py-2 text-center inline-block bg-yellow-700 rounded-3xl">
              Seamless Network
            </p>
            <h3 className="text-[1.8rem] leading-[2.4rem] 880:leading-[3rem] 880:text-[2.5rem] mt-4 text-blackhue-100 font-bold">
              Focus on what matters most for you
            </h3>
            <p className="mt-16 leading-[2.5rem] font-medium text-neutral-700 text-xl">
              Effortlessly game with friends everyday with our AI powered
              interface. Sync with multiple users, interact, via text or audio,
              and add participants with just a few clicks.
            </p>
            <div className="relative mt-4 flex h-[10rem] items-center">
              <img
                className="mt-24 w-[5rem] h-[5rem]"
                src="/images/avtl.webp"
                alt="avatar"
              />
              <div className="bg-blackhue-100 rounded-tr-xl p-3 rounded-tl-xl rounded-br-xl w-10/12 880:w-7/12">
                <p className="text-white font-semibold">
                  I love how user-friendly this app is! It's so easy to add
                  events and set reminders!
                </p>
                <p className="text-neutral-900 font-semibold mt-2">
                  Adam, entrepreneur
                </p>
              </div>
            </div>
          </div>
          <img
            className="mt-12 880:mt-0"
            src="/images/calendar.webp"
            alt="date"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: [-10, 0] }}
          whileInView={{ opacity: 1, x: [-10, 0] }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="mt-48 880:mt-56 grid grid-cols-1 880:grid-cols-2 items-center"
        >
          <img
            className="mt-12 880:-mt-8  order-2 880:order-1 "
            src="/images/schedule.webp"
            alt="date"
          />
          <div className="order-1 880:order-2">
            <p className="text-black font-semibold px-6 py-2 text-center inline-block bg-primary-100 rounded-3xl">
              Smart Reminders & Task
            </p>
            <h3 className="text-[1.8rem] leading-[2.4rem] 880:leading-[3rem] 880:text-[2.5rem] mt-4 text-blackhue-100 font-bold">
              Never miss an important deadline or event again
            </h3>
            <p className="mt-16 leading-[2.5rem] font-medium text-neutral-700 text-xl">
              Never miss an important deadline again with our AI-driven
              notifications. Our app intelligently analyzes your schedule to
              prioritize what's most important, keeping you on track and
              ensuring your day is productive and stress-free.
            </p>
            <div className="relative mt-4 flex h-[10rem] justify-end items-center">
              <div className="bg-blackhue-100 rounded-tr-xl p-3 rounded-tl-xl rounded-bl-xl w-10/12 880:w-7/12">
                <p className="text-white font-semibold">
                  I love how user-friendly this app is! It's so easy to add
                  events and set reminders!
                </p>
                <p className="text-neutral-900 font-semibold mt-2">
                  Adam, entrepreneur
                </p>
              </div>
              <img
                className="mt-24 w-[5rem] h-[5rem]"
                src="/images/avat.webp"
                alt="avatar"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: [10, 0] }}
          whileInView={{ opacity: 1, x: [10, 0] }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="mt-48 880:mt-56 grid grid-cols-1 880:grid-cols-2 items-center"
        >
          <div>
            <p className="text-black font-semibold px-6 py-2 text-center inline-block bg-primary-200 rounded-3xl">
              Seamless Network
            </p>
            <h3 className="text-[1.8rem] leading-[2.4rem] 880:leading-[3rem] 880:text-[2.5rem] mt-4 text-blackhue-100 font-bold">
              Focus on what matters most for you
            </h3>
            <p className="mt-16 leading-[2.5rem] font-medium text-neutral-700 text-xl">
              Effortlessly game with friends everyday with our AI powered
              interface. Sync with multiple users, interact, via text or audio,
              and add participants with just a few clicks.
            </p>
            <div className="relative mt-4 flex h-[10rem] items-center">
              <img
                className="mt-10 w-[5rem] h-[5rem]"
                src="/images/avt.webp"
                alt="avatar"
              />
              <div className="bg-blackhue-100 rounded-tr-xl p-3 rounded-tl-xl rounded-br-xl w-10/12 880:w-7/12">
                <p className="text-white font-semibold">
                  I love how user-friendly this app is! It's so easy to add
                  events and set reminders!
                </p>
                <p className="text-neutral-900 font-semibold mt-2">
                  Adam, entrepreneur
                </p>
              </div>
            </div>
          </div>
          <img className="mt-12 880:mt-0" src="/images/chart.webp" alt="date" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: [-10, 0] }}
          whileInView={{ opacity: 1, x: [-10, 0] }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="mt-36 880:mt-44 grid grid-cols-1 880:grid-cols-2 items-center"
        >
          <img
            className="mt-12 880:mt-0order-2 880:order-1"
            src="/images/notifica.webp"
            alt="date"
          />
          <div className="order-1 880:order-2">
            <p className="text-black leading-[3rem] font-semibold px-6 py-2 text-center inline-block bg-yellow-800 rounded-3xl">
              Smart Reminders & Task
            </p>
            <h3 className="text-[1.8rem] leading-[2.4rem] 880:leading-[3rem] 880:text-[2.5rem]  mt-4 text-blackhue-100 font-bold">
              Focus on what matters most for you
            </h3>
            <p className="mt-16 leading-[2.5rem] font-medium text-neutral-700 text-xl">
              Effortlessly game with friends everyday with our AI powered
              interface. Sync with multiple users, interact, via text or audio,
              and add participants with just a few clicks.
            </p>
            <div className="relative mt-4 flex h-[10rem] justify-end items-center">
              <div className="bg-blackhue-100 rounded-tr-xl p-3 rounded-tl-xl rounded-bl-xl w-10/12 880:w-7/12">
                <p className="text-white font-semibold">
                  I love how user-friendly this app is! It's so easy to add
                  events and set reminders!
                </p>
                <p className="text-neutral-900 font-semibold mt-2">
                  Adam, entrepreneur
                </p>
              </div>
              <img
                className="mt-24 w-[5rem] h-[5rem]"
                src="/images/avat.webp"
                alt="avatar"
              />
            </div>
          </div>
        </motion.div>
        <div className=" grid place-items-center pt-36">
          <motion.p
            initial={{ y: [-30, 0] }}
            whileInView={{ y: [-30, 0] }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 80,
              duration: 0.4,
            }}
            className="flex items-center gap-1 text-black font-semibold px-6 py-2 text-center inline-block bg-neutral-100 rounded-3xl"
          >
            And so much more...
            <FaFantasyFlightGames className="text-primary-main" />
          </motion.p>
          <motion.h3
            initial={{ y: [70, 0] }}
            whileInView={{ y: [70, 0] }}
            viewport={{ once: false }}
            transition={{
              type: "spring",
              stiffness: 80,
              duration: 0.4,
            }}
            className="text-[2rem] 880:text-[3.5rem] mt-4 880:px-28 text-center font-bold text-blackhue-100"
          >
            Our features to make your life easier
          </motion.h3>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
        }}
      >
        <MoreFeatures />
      </motion.div>
    </div>
  );
}

export default Features;
