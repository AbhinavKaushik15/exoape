import { motion } from "framer-motion";
import gsap, { Linear, Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

function Images() {
  const parentImg = useRef(null);
  const firstImg = useRef(null);
  const secondImg = useRef(null);
  const thirdImg = useRef(null);
  const fourImg = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parentImg.current,
        start: "0 50%",
        scrub: 1,
      },
    });
    tl.to(
      firstImg.current,
      {
        x: "-30%",
        ease: Linear,
      },
      "a"
    );
    tl.to(
      secondImg.current,
      {
        x: "100%",
        ease: Power4.easeOut,
      },
      "a"
    );
    tl.to(
      thirdImg.current,
      {
        x: "-50%",
        ease: Linear,
      },
      "a"
    );
    tl.to(
      fourImg.current,
      {
        x: "65%",
        ease: Linear,
      },
      "a"
    );
  });
  
  return (
    <div ref={parentImg} className="relative w-full h-[200vw] sm:h-[165vh] md:h-[185vh] lg:h-[220vh] xl:h-[275vh] bg-[#fff] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="centerImg relative h-[60vw] sm:h-[44.62vw] w-[36vw] sm:w-[26vw] mt-[18vh] sm:mt-[8.5vw]">
        <div
          ref={firstImg}
          className="lftTop absolute h-[19.5vw] sm:h-[17.5vw] w-[34vw] sm:w-[27vw] top-[19vw] sm:top-[13vw] -left-[26.5vw] sm:-left-[20vw]"
        >
          <video
            loop
            muted
            autoPlay
            className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>

        <div ref={secondImg} className="rgtTop absolute h-[23vw] sm:h-[17vw] w-[17vw] sm:w-[12vw] top-[5.2vw] sm:top-[4.5vw] left-[32.5vw] sm:left-[18vw]"
        >
          <img className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>

        <div ref={thirdImg} className="lftBtm absolute h-[24vw] sm:h-[17.6vw] w-[35vw] sm:w-[26.45vw] top-[53vw] sm:top-[40vw] -left-[29.5vw] sm:-left-[24vw]"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>

        <div ref={fourImg} className="rgtBtm absolute h-[32vw] sm:h-[26.25vw] w-[35vw] sm:w-[26.3vw] top-[53vw] sm:top-[40vw] left-[30.5vw] sm:left-[22vw]"
        >
          <video loop muted autoPlay className="h-full w-full object-cover"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>

        <img className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>


      <div data-scroll data-scroll-speed="0.2" className="max-w-screen-xl mx-auto mt-[22.2vw] sm:mt-[15vw] mb-20 sm:mb-0"
      >
        <div className="media flex justify-center gap-3">
          <svg
            className="w-[3vw] sm:w-[0.9vw]"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>

          <h1 className="text-[3.8vw] sm:text-[1.02vw] font-[500]">
            In the media
          </h1>
        </div>

        <div className="headingCenter font-[Lausanne_300] leading-[0.9] sm:leading-[1] -mt-20 sm:mt-[2vw] flex flex-col text-center">
          <h1 className="text-[16vw] sm:text-[10vw] font-[400] tracking-tight py-10 mt-14 overflow-hidden">
            <motion.span
              initial={{ rotate: 30, translateY: "50%", opacity: 0 }}
              whileInView={{ rotate: 0, translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: Power4.easeInOut, duration: 0.6 }}
              className="inline-block origin-left"
            >
              Spread
            </motion.span>
          </h1>

          <h1 className="text-[16vw] sm:text-[10vw] font-[400] -mt-10 tracking-tight overflow-hidden">
            <motion.span
              initial={{ rotate: 30, translateY: "50%", opacity: 0 }}
              whileInView={{ rotate: 0, translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ ease: Power4.easeInOut, duration: 0.6 }}
              className="inline-block origin-left"
            >
              the News
            </motion.span>
          </h1>
        </div>

        <div className="paras flex sm:hidden flex-col items-center justify-center leading-[1.2] mt-10">
          <p className="text-[5vw] tracking-tight">
            Find out more about our work
          </p>
          <p className="text-[5vw] tracking-tight">
            on these leading design and
          </p>
          <p className="text-[5vw] tracking-tight">technology platforms.</p>
        </div>

        <div className="paras hidden sm:flex flex-col items-center justify-center leading-[1.3] mt-[4vw]">
          <p className="sm:text-[1.75vw]  tracking-tight">
            Find out more about our work on these
          </p>
          <p className="sm:text-[1.75vw]  tracking-tight">
            leading design and technology platforms.
          </p>
        </div>

        <button className="font-[500] flex text-center mx-auto mt-[30px] sm:mt-[3.4vw]">
          <p className="text-[4.45vw] sm:text-[1.1vw] text-black font-[400] border-zinc-400 border-b-[.7px] sm:border-b-[.5px]">
            Browse all news
          </p>
        </button>
      </div>
    </div>
  );
}

export default Images;
