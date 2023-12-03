import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Posts from "../components/posts/Posts";
import { motion } from "framer-motion";

function Blog() {
  return (
    <>
      <Navbar />
      <div className="container px-8 880:px-4">
        <motion.h3
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="text-[2.2rem] 880:text-[3.5rem] mt-12 880:mt-20 text-center font-bold text-blackhue-100"
        >
          HireQuotient Blog
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="mt-6 leading-[2rem] font-medium w-full 880:w-5/12 mx-auto text-center text-neutral-700 text-base 880:text-xl"
        >
          All you need to start using our incredible tool correctly. And nothing
          else.
        </motion.p>
        <div className="pt-14 880:mt-28">
          <Posts />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
