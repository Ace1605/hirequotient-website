import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PriceBox from "./PriceBox";
import { motion } from "framer-motion";

function Pricing() {
  return (
    <div id="Pricing" className="container 880:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.8,
        }}
        className="grid place-items-center pt-48 pb-12 880:pb-20"
      >
        <p className="flex items-center gap-1 text-black font-semibold px-6 py-2 text-center inline-block bg-neutral-100 rounded-3xl">
          Pricing and plans
          <RiMoneyDollarCircleFill className="text-primary-400" />
        </p>
        <h3 className="text-[2rem] text-center 880:text-[3.5rem] mt-4 font-bold text-blackhue-100">
          Find the best plan for your needs
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.8,
        }}
      >
        <Tabs className="relative mt-0 880:mt-10 grid 880:place-items-center">
          <TabList className="flex items-center mx-auto w-max bg-neutral-100 pt-1 pb-2 px-1 font-semibold text-neutral-700 border-none rounded-xl">
            <Tab>Monthly</Tab>
            <Tab>Annually</Tab>
          </TabList>
          <p className="absolute top-12 880:top-2 left-[60%] 880:left-[70%] 1180:left-[65%] text-black font-medium">
            ✨ save 30%
          </p>
          <TabPanel>
            <PriceBox freeP={0} startP={19} proP={49} />
          </TabPanel>
          <TabPanel>
            <PriceBox freeP={0} startP={14} proP={44} />
          </TabPanel>
        </Tabs>
      </motion.div>
    </div>
  );
}

export default Pricing;
