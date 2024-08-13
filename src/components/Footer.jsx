import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import React from "react";

function Footer() {
  return (
    <div data-scroll data-scroll-speed="-0.7"
     className="relative z-[-1] w-full h-[95vh] sm:h-[111.5vh] pt-14 sm:pt-20 md:h-[150vh] lg:h-[155vh] xl:h-[146vh] bg-[#070707] text-[#E0CCBB] -mb-[13.5vh] sm:-mb-[29.5vh] md:-mb-[300px] xl:mb-0">
      <div className="relative w-full pl-7 sm:pl-[7.9vw] flex mt-5">
        <div className="vidoContainer relative w-[72vw] sm:w-[60vw] h-[34vw] sm:h-[30vw] ml-[23vw] sm:ml-[30.8vw] mt-5">
          <video
            className="h-full w-full object-cover overflow-hidden"
            loop
            muted
            autoPlay
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>
        <div className="ourStory absolute z-[999] leading-[1] top-10">
          <h1 className="text-[12vw] sm:text-[10vw] overflow-hidden">
            <motion.span
              initial={{ rotate: 30, translateY: "50%", opacity: 0 }}
              whileInView={{ rotate: 0, translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: Power4.easeInOut, duration: 0.6 }}
              className="inline-block origin-left xl:tracking-tight"
            >
              Our
            </motion.span>
          </h1>
          <h1 className="text-[12vw] sm:text-[10vw]">
          <motion.span
              initial={{ rotate: 30, translateY: "50%", opacity: 0 }}
              whileInView={{ rotate: 0, translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: Power4.easeInOut, duration: 0.6 }}
              className="inline-block origin-left xl:tracking-tight"
            >
              Story
            </motion.span>
          </h1>
        </div>
      </div>

      <div className="para px-7 pb-3 sm:-mt-[5vw] sm:pl-[7.9vw]">
        <p className="text-[3.5vw] sm:text-[1.69vw]">
          The story behind Exo Ape is one of
        </p>
        <p className="text-[3.5vw] sm:text-[1.69vw]">
          exploration, creativity and curiosity.
        </p>
      </div>

      <a className="flex sm:hidden underline px-7 text-sm" href="#">
        Our Story
      </a>

      <div className="w-[90.6%] sm:w-[84%] border-[0.2px] mx-auto border-[#E0CCBB] mt-7"></div>

      <div className="btm flex items-center gap-[35vw] sm:gap-[12vw] px-7 sm:px-[7.9vw] mt-5 sm:mt-[4.5vw]">
        <div className="hidden sm:flex flex-col gap-[0.5vw]">
          <a className="text-xs " href="#">
            Willem II Singel 8
          </a>
          <a className="text-sm whitespace-nowrap" href="#">
            6041 HS, Roermond
          </a>  
          <a className="text-sm" href="#">
            The Netherlands
          </a>
          <a className="text-sm" href="#">
            hello@exoape.com
          </a>
        </div>

        <div className="left flex flex-col sm:gap-[0.5vw]">
          <a className="text-[13px]" href="#">
            Work
          </a>
          <a className="text-[13px]" href="#">
            Studio
          </a>
          <a className="text-[13px]" href="#">
            News
          </a>
          <a className="text-[13px]" href="#">
            Contact
          </a>
        </div>

        <div className="text-sm right flex flex-col sm:gap-[0.5vw] sm:-ml-[1vw]">
          <a className="text-[13px]" href="#">
            Behance
          </a>
          <a className="text-[13px]" href="#">
            Dribbble
          </a>
          <a className="text-[13px]" href="#">
            Twitter
          </a>
          <a className="text-[13px]" href="#">
            Instagram
          </a>
        </div>

        <a
          className="hidden sm:flex absolute right-0 underline sm:px-[7.9vw] text-sm ml-[vw] mt-[6.5vw] whitespace-nowrap"
          href="#"
        >
          Our Story
        </a>
      </div>
    </div>
  );
}

export default Footer;
