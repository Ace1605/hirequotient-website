import React from "react";
import MobileMenu from "../mobilemenu/MobileMenu";
import { motion } from "framer-motion";

function Navbar() {
  const links = ["Features", "Testimonial", "Pricing", "FAQs", "Blog"];
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 left-0 z-[1000] bg-cream-100 border-b border-neutral-20"
    >
      <div className="container px-4 flex items-center justify-between 880:px-12 py-4 768:py-[1.15rem]">
        <a href="/">
          <img
            src="/logos/logohq.webp"
            alt="logo"
            className="w-[130px] object-cover"
          />
        </a>
        <nav className="hidden 880:block">
          <ul className="flex gap-4 1180:gap-10">
            {links.map((item, index) => (
              <li key={index} className="font-normal">
                <a
                  href={item === "Blog" ? "/blog" : "/#" + item}
                  className="flex gap-1 items-center text-neutral-700 font-semibold text-base hover:underline hover:text-blackhue-100"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden 880:flex items-center gap-2">
          <a
            href="/"
            className="light-button hover:scale-105 hover:transition-transform"
          >
            Log in
          </a>
          <a
            href="/"
            className="dark-button hover:scale-105 hover:transition-transform"
          >
            Get started
          </a>
        </div>
        <MobileMenu />
      </div>
    </motion.header>
  );
}

export default Navbar;
