import { easeInOut, motion } from "framer-motion";
import React from "react";

function White() {
  return (
    <div className="relative h-[610vw] sm:h-[190vw] lg:h-[325vh] xl:h-[396vh] w-full px-[2.8vw] xl:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex sm:hidden items-center gap-3 mt-[22.5vw] ml-6">
          <svg
            className="w-5"
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

          <h1 className="font-[500] text-[3.8vw]">Featured Projects</h1>
        </div>

        <h1 className="font-[Lausanne_600] tracking-tighter px-5 sm:px-[10.5vw] lg:px-[11.7vw] xl:px-[11.5vw] mt-[1vw] sm:mt-[8vw] lg:mt-[8.5vw] xl:mt-[8vw] text-[16.5vw] lg:text-[18vw] xl:text-[18vw] font-[400] sm:font-[500] lg:font-[400] overflow-hidden">
          <motion.span
            initial={{ rotate: 20, translateY: "90%", opacity: 0 }}
            whileInView={{ rotate: 0, translateY: 0, opacity: 1 }}
            transition={{ ease: easeInOut, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block origin-left"
          >
            Work
          </motion.span>
        </h1>

        <div className="mobile sm:hidden headings mt-[3.2vw] px-5 leading-[1.28]">
          <h1 className="text-[4.8vw] font-[400] font-[Lausanne_300]">
            Highlights of cases that we
          </h1>
          <h1 className="text-[4.8vw] font-[400] font-[Lausanne_300] whitespace-nowrap">
            passionately bulit with forward-thinking
          </h1>
          <h1 className="text-[4.8vw] font-[400] font-[Lausanne_300]">
            clients and friends over the years.
          </h1>
        </div>

        <div className="mobileimg1 sm:hidden w-[93.2vw] px-4 mt-[9.5vw]">
          <div className="relative img-container w-full h-[103.7vw]">
            <video
              muted
              loop
              autoPlay
              className="relative w-full h-full object-cover"
              src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
            ></video>
          </div>

          <div className="content mt-3">
            <h1 className="font-[500] text-[4.1vw]">Columbia Pictures</h1>
            <h1 className="text-[4.1vw] text-zinc-500 tracking-normal">
              Celebrating a Century Of Cinema
            </h1>
          </div>
        </div>

        <div className="mobileimg2 sm:hidden w-[93.2vw] px-4 mt-[16.3vw]">
          <div className="relative img-container w-full h-[103.7vw] mt-8">
            <video
              muted
              loop
              autoPlay
              className="relative w-full h-full object-cover"
              src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
            ></video>
          </div>

          <div className="content mt-3">
            <h1 className="font-[500] text-[4.1vw]">Rhino & Pelle</h1>
            <h1 className="text-[4.1vw] text-zinc-500 tracking-normal">
              Effortless chic lifestyle
            </h1>
          </div>
        </div>

        <div className="mobileimg3 sm:hidden w-[93.2vw] px-4 mt-[9vw]">
          <div className="relative img-container w-full h-[103.7vw] mt-8">
            <video
              muted
              loop
              autoPlay
              className="relative w-full h-full object-cover"
              src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
            ></video>
          </div>

          <div className="content mt-3">
            <h1 className="font-[500] text-[4.1vw]">Aebele Interiors</h1>
            <h1 className="text-[4.1vw] text-zinc-500 tracking-normal">
              Luxurious design experience{" "}
            </h1>
          </div>
        </div>

        <div className="mobileimg4 sm:hidden w-[93.2vw] px-4 -mt-[2.1vw]">
          <div className="relative img-container w-full mt-8">
            <video
              muted
              loop
              autoPlay
              className="relative w-full h-full object-cover"
              src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
            ></video>
          </div>

          <div className="content mt-3">
            <h1 className="font-[500] text-[4.1vw]">Aebele Interiors</h1>
            <h1 className="text-[4.1vw] text-zinc-500 tracking-normal">
              Luxurious design experience{" "}
            </h1>
          </div>
        </div>

        <button className="sm:hidden font-[500] flex text-center mx-auto mt-[19vw] sm:mb-[15vw]">
          <p className="px-1 text-[4.45vw] text-black font-[400] border-zinc-400 border-b-[.7px]">
            Browse all work
          </p>
        </button>

        <div className="hidden Bigimgs sm:flex gap-24 sm:gap-[9vw] lg:w-[76.5vw] xl:w-[76vw] sm:ml-[11.5vw] lg:ml-[12.5vw] mt-6">
          <motion.div initial={{opacity: 1}} className="rgt lg:w-[45vw] xl:w-[40.5vw] overflow-hidden">
            <div className="relative img-container w-full h-[52vw]">
              <video
                muted
                loop
                autoPlay
                className="relative w-full h-full object-cover"
                src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
                type="video/mp4"
              ></video>

              <motion.img
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                className="absolute top-0 left-0 w-full h-full object-bottom"
                src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                alt=""
              />
            </div>

            <motion.div
            className="content mt-3">
              <h1 className="text-[1vw] text-zinc-600">
                <span className="inline-block font-[700] text-black">
                  Columbia Pictures —
                </span>{" "}
                Celebrating a Century of Cinema
              </h1>
            </motion.div>
          </motion.div>

          <div className="lft w-[26vw]">
            <div className="flex items-center gap-3">
              <svg
                className="w-[0.9vw]"
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

              <h1 className="font-[400] text-sm">Featured Projects</h1>
            </div>

            <div className="headings mt-[3.2vw] leading-[2.2vw]">
              <h1 className="text-[1.7vw] font-[400] font-[Lausanne_300] whitespace-nowrap">
                Hightlights of cases that we
              </h1>
              <h1 className="text-[1.7vw] font-[400] font-[Lausanne_300] whitespace-nowrap">
                passionatelybulit with forward-
              </h1>
              <h1 className="text-[1.7vw] font-[400] font-[Lausanne_300] whitespace-nowrap">
                thinking clients and friends over
              </h1>
              <h1 className="text-[1.7vw] font-[400] font-[Lausanne_300] whitespace-nowrap">
                the years.
              </h1>
            </div>

            <motion.div 
            data-scroll
            data-scroll-speed="0.1"
             className="img h-[45vw] w-full sm:mt-[16.5vw]">
              <div className="relative img-container w-full h-[34vw] mt-8">
                <video
                  loop
                  muted
                  autoPlay
                  className="relative w-full h-full object-cover"
                  src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&amp;log_user=0&amp;signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
                  type="video/mp4"
                ></video>

                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="absolute top-0 left-0 w-full h-full object-bottom"
                  src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                  alt=""
                />
              </div>

              <div className="content mt-3">
                <h1 className="text-[1vw] text-zinc-600">
                  <span className="inline-block font-[700] text-black">
                    Rino & Pelle —
                  </span>{" "}
                  Effortless chic lifestyle
                </h1>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hidden Bigimgs sm:flex lg:w-[76.5vw] xl:w-[76vw] sm:ml-[11.5vw] lg:ml-[12.5vw] sm:mt-[9vw] xl:mt-[5vw]">
          <div className="lft w-[28.5vw]">
            <div data-scroll data-scroll-speed="-0.1" className="img w-[19vw] mt-60 xl:mt-[26.2vw]">
              <div className="relative img-container w-full h-[24vw]">
                <video
                  muted
                  loop
                  autoPlay
                  className="relative w-full h-full object-cover"
                  src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
                  type="video/mp4"
                ></video>

                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="absolute top-0 left-0 w-full h-full object-bottom"
                  src="https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)"
                  alt=""
                />
              </div>

              <div className="content mt-3">
                <h1 className="text-[1vw] text-zinc-600 whitespace-nowrap">
                  <span className="inline-block font-[700] text-black">
                    PixelFlakes —
                  </span>{" "}
                  Architecture marketng agency
                </h1>
              </div>
            </div>
          </div>

          <div className="rgt relative w-[33.3vw]">
            <motion.div
            data-scroll
            data-scroll-speed="0.135"
             className="img w-full mb-[14.5vw]">
              <div className="relative img-container w-full h-[42vw]">
                <video
                  muted
                  loop
                  autoPlay
                  className="relative w-full h-full object-cover"
                  src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
                  type="video/mp4"
                ></video>

                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="absolute top-0 left-0 w-full h-full object-bottom"
                  src="https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)"
                  alt=""
                />
              </div>

              <div className="content mt-3">
                <h1 className="text-[1vw] text-zinc-600">
                  <span className="inline-block font-[700] text-black">
                    Aebele Interiors —
                  </span>
                  Luxurious design experience
                </h1>
              </div>
            </motion.div>

            <button className="absolute bottom-0 right-0 font-[500] flex items-center -ml-[10px] xl:ml-[55px]">
              <span className="inline-block h-2 w-2 sm:h-[5.5px] sm:w-[5.5px] rounded-full border-[0.3px] border-zinc-400"></span>
              <p className="ml-1 sm:text-[1.1vw] text-zinc-600 font-[400] border-zinc-400 border-b-[.7px]">
                Browse all work
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default White;