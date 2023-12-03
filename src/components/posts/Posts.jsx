import React from "react";
import { useNavigate } from "react-router";
import { Avatar1 } from "../svg/Avatar";
import { motion } from "framer-motion";
import { blogPosts } from "./contants";

function Posts() {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 px-0 880:px-20 880:grid-cols-3 gap-8">
      {blogPosts?.map((x, index) => (
        <div key={index}>
          <motion.img
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
            className="w-full cursor-pointer h-[200px] my-auto rounded-2xl"
            src={x.image}
            onClick={() => {
              navigate(`/blog/${x.title}`);
            }}
            alt="card_image"
          />
          <motion.p
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
            className="mt-6 text-black text-2xl font-bold py-2"
          >
            {x.title}
          </motion.p>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Avatar1 className="w-[1.7rem]" />
              <p className="font-medium text-sm">{x.author}</p>
            </div>
            <p className="text-sm">{x.type}</p>
          </div>
          <p className="mt-8 leading-[2rem] font-medium text-neutral-700 text-base">
            {x.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
