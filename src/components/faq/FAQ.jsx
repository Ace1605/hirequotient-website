import React, { useState } from "react";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Plus } from "../svg/Plus";
import { easeInOut, motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: {
    y: -40,
    opacity: 0.4,
    transition: { duration: 0.7, ease: easeInOut },
    display: "none",
  },
};

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [isOpenss, setIsOpenss] = useState(false);
  const [isOpensss, setIsOpensss] = useState(false);
  const [isOpenssss, setIsOpenssss] = useState(false);
  const [isOpensssss, setIsOpensssss] = useState(false);
  const questions = [
    {
      cue: "Can I cancel my subscrition?",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      cue: "What happens when my trial ends?",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },

    {
      cue: "Do you offer discounts to educational institutions ?",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      cue: "What payment methods do you offer?",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      cue: "Can I cancel my subscrition?",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      cue: "What is your refund policy?",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
  ];
  return (
    <div id="FAQs" className="container">
      {" "}
      <div className="grid place-items-center pt-48 pb-20 px-6 880:px-28">
        <motion.p
          initial={{ scale: 0.4 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="flex items-center gap-1 text-black font-semibold px-6 py-2 text-center inline-block bg-neutral-100 rounded-3xl"
        >
          Troubling questions ?
          <HiOutlineSpeakerphone className="" />
        </motion.p>
        <motion.h3
          initial={{ scale: 0.4 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="text-[2.2rem] 880:text-[3.5rem] text-center mt-4 font-bold text-blackhue-100"
        >
          Frequently asked questions
        </motion.h3>
        <Accordion allowMultipleExpanded className="w-full">
          <motion.div
            initial={{ opacity: 0, x: [-10, 0] }}
            whileInView={{ opacity: 1, x: [-10, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
          >
            <AccordionItem className="p-8 bg-neutral-100 rounded-2xl my-12">
              <AccordionItemHeading
                onClick={() => setIsOpen((isOpen) => !isOpen)}
              >
                <AccordionItemButton className="flex items-center justify-between font-bold text-lg 880:text-xl">
                  {questions[0].cue}
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
              >
                <AccordionItemPanel className="pt-6 text-black">
                  {questions[0].text}
                </AccordionItemPanel>
              </motion.div>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: [10, 0] }}
            whileInView={{ opacity: 1, x: [10, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
          >
            <AccordionItem className="p-8 bg-neutral-100 rounded-2xl my-12">
              <AccordionItemHeading
                onClick={() => setIsOpens((isOpens) => !isOpens)}
              >
                <AccordionItemButton className="flex items-center justify-between font-bold text-lg 880:text-xl">
                  {questions[1].cue}
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <motion.div
                animate={isOpens ? "open" : "closed"}
                variants={variants}
              >
                <AccordionItemPanel className="pt-6 text-black">
                  {questions[1].text}
                </AccordionItemPanel>
              </motion.div>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: [-10, 0] }}
            whileInView={{ opacity: 1, x: [-10, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
          >
            {" "}
            <AccordionItem className="p-8 bg-neutral-100 rounded-2xl my-12">
              <AccordionItemHeading
                onClick={() => setIsOpenss((isOpenss) => !isOpenss)}
              >
                <AccordionItemButton className="flex items-center justify-between font-bold text-lg 880:text-xl">
                  {questions[2].cue}
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <motion.div
                animate={isOpenss ? "open" : "closed"}
                variants={variants}
              >
                <AccordionItemPanel className="pt-6 text-black">
                  {questions[2].text}
                </AccordionItemPanel>
              </motion.div>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: [10, 0] }}
            whileInView={{ opacity: 1, x: [10, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
          >
            {" "}
            <AccordionItem className="p-8 bg-neutral-100 rounded-2xl my-12">
              <AccordionItemHeading
                onClick={() => setIsOpensss((isOpensss) => !isOpensss)}
              >
                <AccordionItemButton className="flex items-center justify-between font-bold text-lg 880:text-xl">
                  {questions[3].cue}
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <motion.div
                animate={isOpensss ? "open" : "closed"}
                variants={variants}
              >
                <AccordionItemPanel className="pt-6 text-black">
                  {questions[3].text}
                </AccordionItemPanel>
              </motion.div>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: [-10, 0] }}
            whileInView={{ opacity: 1, x: [-10, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
          >
            {" "}
            <AccordionItem className="p-8 bg-neutral-100 rounded-2xl my-12">
              <AccordionItemHeading
                onClick={() => setIsOpenssss((isOpenssss) => !isOpenssss)}
              >
                <AccordionItemButton className="flex items-center justify-between font-bold text-lg 880:text-xl">
                  {questions[4].cue}
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <motion.div
                animate={isOpenssss ? "open" : "closed"}
                variants={variants}
              >
                <AccordionItemPanel className="pt-6 text-black">
                  {questions[4].text}
                </AccordionItemPanel>
              </motion.div>
            </AccordionItem>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: [10, 0] }}
            whileInView={{ opacity: 1, x: [10, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
          >
            {" "}
            <AccordionItem className="p-8 bg-neutral-100 rounded-2xl my-12">
              <AccordionItemHeading
                onClick={() => setIsOpensssss((isOpensssss) => !isOpensssss)}
              >
                <AccordionItemButton className="flex items-center justify-between font-bold text-lg 880:text-xl">
                  {questions[5].cue}
                  <Plus />
                </AccordionItemButton>
              </AccordionItemHeading>
              <motion.div
                animate={isOpensssss ? "open" : "closed"}
                variants={variants}
              >
                <AccordionItemPanel className="pt-6 text-black">
                  {questions[5].text}
                </AccordionItemPanel>
              </motion.div>
            </AccordionItem>
          </motion.div>
        </Accordion>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="mt-28 text-black font-semibold px-4 py-1 text-center inline-block bg-neutral-100 rounded-3xl"
        >
          Last call Baby! 🚀
        </motion.p>
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.4,
          }}
          className="relative text-blackhue-100 text-[2rem] 880:text-[3.5rem] font-bold text-center leading-[4rem] 880:leading-[5.1rem]"
        >
          Ready to start?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.4,
          }}
          className="pt-10 text-lg 880:text-xl font-medium text-neutral-700 text-center px-0 880:px-32"
        >
          Here is your last chance to explain how cool your app is. Focus on the
          benefits for your users, not on the features.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.4,
          }}
          href="/"
          className="dark-button h-14 px-8 mt-8"
        >
          Get started, it&apos;s free
        </motion.button>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.4,
          }}
          className="relative px-0 880:px-44 mt-8 flex h-[10rem] w-full items-center"
        >
          <img
            className="mt-24 w-[5rem] h-[5rem]"
            src="/images/avat.webp"
            alt="avatar"
          />
          <div className="bg-yellow-700 rounded-tr-xl p-3 rounded-tl-xl rounded-br-xl w-7/12">
            <p className="text-black font-semibold">
              I love how user-friendly this app is! It's so easy to add events
              and set reminders!
            </p>
            <p className="text-neutral-900 font-semibold mt-2">
              Adam, entrepreneur
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FAQ;
