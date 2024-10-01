"use client";
//@ts-expect-error asdf
import gsap from "gsap/all";
import { useEffect, useRef } from "react";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

//@ts-expect-error asdf
ScrollMagicPluginGsap(ScrollMagic, gsap);
const LinePath = () => {
  const activePathRef = useRef<SVGPathElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const activePath = activePathRef.current;
      if (activePath) {
        const lineLength = activePath.getTotalLength();
        activePath.style.strokeDasharray = `${lineLength}`;
        activePath.style.strokeDashoffset = `${lineLength}`;

        const controller = new ScrollMagic.Controller({ refreshInterval: 0 });

        const scene = new ScrollMagic.Scene({
          triggerElement: wrapRef.current,
          duration: 1000,
          triggerHook: 0.5,
        })
          //@ts-expect-error asdf
          .setTween(gsap.to(activePath, { strokeDashoffset: 0, ease: "none" }))
          .addTo(controller);

        return () => {
          scene.destroy();
          controller.destroy(true);
        };
      }
    }
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full min-h-[1200px] mb-[110px]">
      <svg
        className="absolute w-[600px] top-[50px] left-1/2 overflow-visible -translate-x-full z-[1]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
      >
        <path
          ref={activePathRef}
          className="active-path"
          d="M604.5 0V218.5C604.5 248.876 629.124 273.5 659.5 273.5H1150C1180.38 273.5 1205 298.124 1205 328.5V540.5C1205 570.876 1180.38 595.5 1150 595.5H56.5C26.1243 595.5 1.5 620.124 1.5 650.5V1126"
          fill="none"
          stroke="green"
          strokeWidth="2px"
        />
      </svg>
      <svg
        className="absolute w-[600px] top-[50px] left-1/2 overflow-visible -translate-x-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 1200"
      >
        <path
          d="M604.5 0V218.5C604.5 248.876 629.124 273.5 659.5 273.5H1150C1180.38 273.5 1205 298.124 1205 328.5V540.5C1205 570.876 1180.38 595.5 1150 595.5H56.5C26.1243 595.5 1.5 620.124 1.5 650.5V1126"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="2px"
        />
      </svg>
    </div>
  );
};

export default LinePath;
