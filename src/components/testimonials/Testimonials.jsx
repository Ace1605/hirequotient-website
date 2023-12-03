import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from "./Cards";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 50,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 50,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 50,
  },
};

function Testimonials() {
  const dummy = [
    {
      image: "/images/cal.svg",
      type: "grey",
      title: "Cross-Device Sync",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/taskss.svg",
      title: "Auto Event Import",
      type: "org",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },

    {
      image: "/images/todo.svg",
      title: "Task Delegation",
      type: "blue",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/meet.webp",
      title: "Voice Command Integration",
      type: "green",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/apps.webp",
      title: "Customizable Alerts",
      type: "peach",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
    {
      image: "/images/sche.webp",
      title: "Privacy Protection",
      type: "purple",
      text: "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
    },
  ];
  return (
    <>
      <div id="Testimonial" className="grid place-items-center pt-48">
        <motion.p
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.4,
          }}
          className="flex items-center gap-1 text-black font-semibold px-6 py-2 text-center inline-block bg-neutral-100 rounded-3xl"
        >
          They already love our products
          <FaHeart className="text-yellow-100" />
        </motion.p>
        <motion.h3
          initial={{ scale: 0.7 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.4,
          }}
          className="text-[2rem] text-center 880:text-[3.5rem] mt-2 880:mt-4 mb-8 font-bold text-blackhue-100"
        >
          See what our users say about us
        </motion.h3>
      </div>
      <div className="my-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay
          autoPlaySpeed={1600}
          customTransition="transform 600ms ease-in-out"
          className="react-multi-carousel-track"
        >
          {dummy.map((x, index) => (
            <div className="" key={index}>
              <Cards />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="my-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay
          autoPlaySpeed={2000}
          customTransition="transform 400ms ease-in-out"
          className="react-multi-carousel-track"
        >
          {dummy.map((x, index) => (
            <div className="" key={index}>
              <Cards />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="my-4">
        <Carousel
          responsive={responsive}
          infinite={true}
          arrows={false}
          autoPlay
          autoPlaySpeed={1000}
          customTransition="transform 800ms ease-in-out"
          className="react-multi-carousel-track"
        >
          {dummy.map((x, index) => (
            <div className="" key={index}>
              <Cards />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Testimonials;
