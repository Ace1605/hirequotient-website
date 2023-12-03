import React from "react";
import { useNavigate } from "react-router";
import { Avatar1 } from "../svg/Avatar";
import { motion } from "framer-motion";

function Posts() {
  const navigate = useNavigate();
  const blogPosts = [
    {
      image: "/images/bpic1.webp",
      type: "Apr 8, 2022",
      author: "Pierre Jacquel",
      title:
        "Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/bpic2.webp",
      author: "Pierre Jacquel",
      title:
        "From Chaos to Clarity: Organizing Your Calendar for Enhanced Productivity and Focus",
      type: "Mar 15, 2022",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },

    {
      image: "/images/bpic3.webp",
      author: "Pierre Jacquel",
      title:
        "The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks",
      type: "Feb 28, 2022",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/bpic4.webp",
      author: "Pierre Jacquel",
      title:
        "Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar",
      type: "Feb 6, 2022",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/bpic7.webp",
      author: "Pierre Jacquel",
      title:
        "The Art of Saying No: How to Set Boundaries and Protect Your Time for What Matters Most",
      type: "Jan 12, 2022",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
  ];
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
