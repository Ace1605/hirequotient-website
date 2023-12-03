import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { IoMdHome } from "react-icons/io";
import { FaGreaterThan } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";

function SingleBlog() {
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
  const location = useLocation();
  let finder = location.pathname.slice(6, location.pathname.length);
  const [snip, setSnip] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSnip(finder.replace(/%20/g, " "));
  }, [finder]);

  useEffect(() => {
    const opt = blogPosts?.filter((x) => x.title === snip);
    setData(opt);
  }, [snip]);

  console.log(data);
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.4, y: [100, 0] }}
        whileInView={{ opacity: 1, scale: 1, y: [100, 0] }}
        viewport={{ once: false }}
        transition={{
          duration: 0.2,
        }}
        className="container px-8 880:px-48"
      >
        <div className="flex items-center gap-4 mt-24">
          <IoMdHome
            onClick={() => navigate("/")}
            className="text-neutral-700 cursor-pointer text-xl"
          />
          <FaGreaterThan className="text-neutral-700" />
          <a href="/blog" className="text-neutral-700">
            Blog
          </a>
          <FaGreaterThan className="text-neutral-700" />
          <p className="hidden 880:block text-blackhue-100 font-medium">
            {data[0]?.title}
          </p>
          <p className="block 880:hidden text-blackhue-100 font-medium">
            {data[0]?.title.slice(0, 20)}
          </p>
        </div>
        <img
          className="w-full mt-4 cursor-pointer h-[400px] my-auto rounded-3xl"
          src={data[0]?.image}
          alt="card_image"
        />
        <div className="px-3 880:px-32 mt-12">
          <h3 className="text-2xl 880:text-5xl">{data[0]?.title}</h3>
          <p className="mt-4 text-neutral-700 font-medium">{data[0]?.type}</p>
          <p className="mt-8 text-neutral-700 font-medium leading-[2rem]">
            In our increasingly busy lives, it's easy to find ourselves saying
            "yes" to every request or opportunity that comes our way. Although
            this may seem like the best way to maintain relationships and stay
            involved, it can also lead to burnout and prevent us from focusing
            on what truly matters. The art of saying "no" is a crucial skill
            that allows us to set boundaries, protect our time, and prioritize
            our own well-being. In this article, we'll explore the importance of
            saying no and provide practical tips on how to do so effectively.
          </p>
          <ol className="list-decimal mt-10">
            <li>
              <p className="text-neutral-700 font-medium">
                Understand the value of your time
              </p>
              <p className="my-8">
                Time is a finite resource, and every moment we spend on one task
                or commitment is a moment we can't spend on another. Before
                committing to a new task or obligation, take a moment to assess
                the value of your time and whether the new commitment is worth
                the investment. Consider the potential opportunity cost and
                whether saying yes could detract from your most important goals
                and priorities.
              </p>
            </li>
            <li>
              <p className="text-neutral-700 font-medium">
                Understand the value of your time
              </p>
              <p className="my-8">
                Time is a finite resource, and every moment we spend on one task
                or commitment is a moment we can't spend on another. Before
                committing to a new task or obligation, take a moment to assess
                the value of your time and whether the new commitment is worth
                the investment. Consider the potential opportunity cost and
                whether saying yes could detract from your most important goals
                and priorities.
              </p>
            </li>
            <li>
              <p className="text-neutral-700 font-medium">
                Understand the value of your time
              </p>
              <p className="my-8">
                Time is a finite resource, and every moment we spend on one task
                or commitment is a moment we can't spend on another. Before
                committing to a new task or obligation, take a moment to assess
                the value of your time and whether the new commitment is worth
                the investment. Consider the potential opportunity cost and
                whether saying yes could detract from your most important goals
                and priorities.
              </p>
            </li>
            <li>
              <p className="text-neutral-700 font-medium">
                Understand the value of your time
              </p>
              <p className="my-8">
                Time is a finite resource, and every moment we spend on one task
                or commitment is a moment we can't spend on another. Before
                committing to a new task or obligation, take a moment to assess
                the value of your time and whether the new commitment is worth
                the investment. Consider the potential opportunity cost and
                whether saying yes could detract from your most important goals
                and priorities.
              </p>
            </li>
          </ol>
          <div className="mt-8 bg-neutral-100 rounded-2xl py-5 px-10">
            <h3 className="text-[1.2rem] 880:text-[1.7rem] leading-[1.8rem] text-center mt-4 text-blackhue-100 font-bold">
              Ready to meet the most advanced calendar app in the market?
            </h3>
            <p className="pt-2 text-sm font-medium text-neutral-700 text-center px-4 640:px-12 880:px-20">
              It’s time to change the way you manage time.
            </p>
            <button href="/" className="dark-button mx-auto h-14 px-8 mt-8">
              Get started
            </button>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-[2.5rem] leading-[1.8rem] text-left text-primary-1000 font-bold">
            Latest articles
          </h3>
          <div className="grid grid-cols-1 880:grid-cols-2 mt-14 gap-6 justify-between">
            <div
              className="relative group cursor-pointer flex h-[154px] items-center"
              onClick={() => {
                navigate(`/blog/${blogPosts[2]?.title}`);
              }}
            >
              {" "}
              <div className="w-4/12 880:w-8/12">
                <img
                  className="w-full object-none h-[154px] my-auto rounded-bl-2xl rounded-tl-2xl"
                  src={blogPosts[2]?.image}
                  alt="card_image"
                />
              </div>
              <div className="bg-white h-[154px] 880:w-full w-8/12 p-3 rounded-tr-2xl rounded-br-2xl">
                <p className="text-neutral-700 mb-4 font-semibold text-xs">
                  Resources
                </p>
                <p className="font-semibold text-blackhue-100 text-sm">
                  {blogPosts[2]?.title}
                </p>
                <p className="text-sm mt-2 font-medium text-neutral-700">
                  {blogPosts[2]?.type}
                </p>
              </div>
              <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
            <div
              className="relative group cursor-pointer flex h-[154px] items-center"
              onClick={() => {
                navigate(`/blog/${blogPosts[4]?.title}`);
              }}
            >
              {" "}
              <div className="w-4/12 880:w-8/12">
                <img
                  className="w-full object-none h-[154px] my-auto rounded-bl-2xl rounded-tl-2xl"
                  src={blogPosts[4]?.image}
                  alt="card_image"
                />
              </div>
              <div className="bg-white h-[154px] 880:w-full w-8/12 p-3 rounded-tr-2xl rounded-br-2xl">
                <p className="text-neutral-700 mb-4 font-semibold text-xs">
                  Resources
                </p>
                <p className="font-semibold text-blackhue-100 text-sm">
                  {blogPosts[4]?.title}
                </p>
                <p className="text-sm mt-2 font-medium text-neutral-700">
                  {blogPosts[4]?.type}
                </p>
              </div>
              <div class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default SingleBlog;
