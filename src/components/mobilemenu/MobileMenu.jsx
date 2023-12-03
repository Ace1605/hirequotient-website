import React, { useState } from "react";
import { BoxCancel, Hamburger } from "../svg/Menu";
import { easeInOut, motion } from "framer-motion";

function MobileMenu() {
  const [show, setShow] = useState(false);

  function close() {
    setShow(false);
  }

  const links = ["Features", "Testimonial", "Pricing", "FAQs", "Blog"];
  return (
    <div className="y-center block 880:hidden">
      <button
        onClick={() => setShow(!show)}
        className="my-auto h-10 w-10 rounded-lg"
      >
        {!show && (
          <div className="x-center">
            <Hamburger />
          </div>
        )}
      </button>

      {show && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: [-200, 0],
            opacity: 1,
            transition: { duration: 0.5, ease: easeInOut },
          }}
          exit={{
            y: -200,
            opacity: 0,
            transition: { duration: 0.5, ease: easeInOut },
          }}
          className="w-[100%] border-b border-neutral-20 bg-cream-100 top-0 left-0 absolute w-full"
        >
          <div className="x-between w-full py-4 px-4">
            <a href="/" onClick={() => setShow(false)} className="my-auto">
              <img
                src="/logos/logohq.webp"
                alt="logo"
                className="w-[130px] object-cover"
              />
            </a>

            <button onClick={() => setShow(!show)} className="my-auto">
              <div className="x-center">
                <BoxCancel />
              </div>
            </button>
          </div>
          <nav className="px-4 pb-4">
            <ul className="grid justify-center gap-1 880:gap-8">
              {links.map((item) => (
                <li key={item} className="my-1">
                  <a
                    href={item === "Blog" ? "/blog" : "/#" + item}
                    className="gap-1 block font-bold text-neutral-700 text-center hover:underline hover:text-blackhue-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="">
            <a
              href="/"
              className="h-12 block mx-auto w-[6rem] rounded-xl bg-neutral-100 p-2  text-center text-black font-semibold transition-colors hover:bg-neutral-20"
            >
              Log in
            </a>
            <a
              href="/"
              className="mt-4 mb-10 h-14 block mx-auto rounded-xl  w-[8rem] bg-blackhue-100 p-4 text-center text-white font-semibold transition-colors hover:bg-gray-900"
            >
              Get started
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default MobileMenu;
