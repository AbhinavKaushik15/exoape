import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap/all";
import React, { useRef } from "react";

function Loader() {
    const loaderLeft = useRef(null);
    const loaderRight = useRef(null);
    
  useGSAP(() => {
     gsap.to(loaderLeft.current, {
        left: "-100%",
        delay: 1.4,
        duration: 0.7,
        ease: 'power3.in',
     })
     gsap.to(loaderRight.current, {
        right: "-100%",
        delay: 1.4,
        duration: 0.7,
        ease: 'power3.in',
     })
  });

  return (
    <div className="w-full">
        <div ref={loaderLeft} className="fixed top-0 left-0 z-[9999] w-1/2 h-screen bg-black"></div>

        <div ref={loaderRight} className="fixed top-0 right-0 z-[9999] w-1/2 h-screen bg-black"></div>
    </div>
  );
}

export default Loader;
