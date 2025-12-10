"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import AppScreen from "../assets/images/app-screen.png";

export function ProductShowcase() {
  const appImage = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black bg-linear-to-b from-black to-[#5D2CA8] py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl tracking-tighter sm:text-6xl">
          Intuitive Interface
        </h2>
        <div className="mx-auto max-w-3xl">
          <p className="mt-5 text-center text-white/70 text-xl">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivates your efforts, and celebrate yoy successes,
            one task at a time.
          </p>
        </div>
        <div className="mt-14 flex items-center justify-center">
          <motion.div
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: "800px",
            }}
          >
            <Image src={AppScreen} alt="Product Showcase" ref={appImage} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
