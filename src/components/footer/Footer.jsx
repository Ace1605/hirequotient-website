import React from "react";
import { useNavigate } from "react-router";
import { Google, Instagram, LinkedIn, Twitter } from "../svg/Socials";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-100">
      <div className="container">
        <div className="grid 880:flex px-2 gap-4 880:gap-1 880:px-10 justify-between mt-24 pb-12 pt-16">
          <div className="880:w-3/12">
            {" "}
            <a href="/">
              <img
                src="/logos/logohq.webp"
                alt="logo"
                className="w-[130px] object-cover"
              />
            </a>
            <p className="mt-1 leading-[2rem] font-medium w-8/12 text-neutral-700 text-base">
              Gamification like you have never seen before... right?
            </p>
            <p className="mt-6 leading-[1.8rem] font-medium text-neutral-700 text-base">
              ©hirequotient
            </p>
            <div className=" mt-6 flex gap-2 items-center">
              <img
                src="/images/twit.svg"
                alt="socials"
                className="object-cover"
              />
              <img
                src="/images/face.svg"
                alt="socials"
                className="object-cover"
              />
              <img
                src="/images/linked.svg"
                alt="socials"
                className="object-cover"
              />
            </div>
          </div>
          <div className="880:w-1/6">
            <h3 className="text-xl font-semibold text-black">Products</h3>
            <a
              href="/#Features"
              className="mt-4 block leading-[2rem] cursor-pointer font-medium text-neutral-700 text-base hover:underline hover:text-blackhue-100"
            >
              Features
            </a>
            <a
              href="#Testimonial"
              className="mt-4 leading-[2rem] block cursor-pointer font-medium text-neutral-700 text-base hover:underline hover:text-blackhue-100"
            >
              Testimonials
            </a>
            <a
              href="#Pricing"
              className="mt-4 leading-[2rem] block cursor-pointer font-medium text-neutral-700 text-base hover:underline hover:text-blackhue-100"
            >
              Pricing
            </a>
            <a
              href="#FAQs"
              className="mt-4 leading-[2rem] block cursor-pointer font-medium text-neutral-700 text-base hover:underline hover:text-blackhue-100"
            >
              FAQs
            </a>
          </div>
          <div className="880:w-1/6">
            <h3 className="text-xl font-semibold text-black">Resources</h3>
            <p className="mt-4 leading-[2rem] font-medium text-neutral-700 text-base">
              Change log
            </p>
            <p className="mt-4 leading-[2rem] font-medium text-neutral-700 text-base">
              Help center
            </p>
            <a
              href="/blog"
              className="mt-4 leading-[2rem] block font-medium text-neutral-700 text-base hover:underline hover:text-blackhue-100"
            >
              Blog
            </a>
            <p className="mt-4 leading-[2rem] font-medium text-neutral-700 text-base">
              Contact
            </p>
          </div>
          <div className="880:w-1/6">
            <h3 className="text-xl font-semibold text-black">Others</h3>
            <p className="mt-4 leading-[2rem] font-medium text-neutral-700 text-base">
              Privacy
            </p>
            <p className="mt-4 leading-[2rem] font-medium text-neutral-700 text-base">
              Terms
            </p>
            <p className="mt-4 leading-[2rem] font-medium text-neutral-700 text-base">
              Affiliation
            </p>
            <p className="mt-4 leading-[2rem] font-medium text-neutral-700 text-base">
              Press
            </p>
          </div>
          <div className="880:w-3/12">
            <h3 className="text-xl font-semibold text-black">From the blog</h3>
            <a
              href="/"
              className="mt-4 leading-[1.7rem] block font-medium text-neutral-700 text-base hover:text-blackhue-100 hover:underline"
            >
              Mastering Your Schedule: Top Time Management Techniques for
              Balancing Work and Life
            </a>
            <a
              href="/"
              className="mt-4 leading-[1.7rem] block font-medium text-neutral-700 text-base hover:text-blackhue-100 hover:underline"
            >
              Organizing Your Calendar for Enhanced Productivity and Focus
            </a>
            <a
              href="/"
              className="mt-4 leading-[1.7rem] block font-medium text-neutral-700 text-base hover:text-blackhue-100 hover:underline"
            >
              The Power of Prioritization: Effective Strategies for Managing
              Your Time and Tasks
            </a>
            <a
              href="/"
              className="mt-4 leading-[1.7rem] block font-medium text-neutral-700 text-base hover:text-blackhue-100 hover:underline"
            >
              Maximizing Your Minutes: Essential Tips for Streamlining Your
              Daily Routine and Calendar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
