"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EmojiStarImage from "../assets/images/emojistar.png";
import HelixImage from "../assets/images/helix2.png";

export function CtaSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [30, -25]);

  return (
    <div
      className="overflow-x-clip bg-black py-[72px] text-center text-white sm:py-24"
      ref={containerRef}
    >
      <div className="container relative max-w-xl">
        <motion.div style={{ translateY }}>
          <Image
            src={HelixImage}
            alt="Helix Image"
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={EmojiStarImage}
            alt="Emoji Star Image"
            className="-top-[120px] absolute right-[calc(100%+24px)]"
          />
        </motion.div>
        <h2 className="text-center font-bold text-5xl tracking-tight">
          Get Instant Access
        </h2>
        <p className="mt-5 text-center text-lg text-white/70">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivates your efforts.
        </p>
        <form className="mt-10 flex flex-col gap-2.5 sm:flex-row">
          <Input placeholder="Enter your email" className="bg-muted" />
          <Button className="rounded-lg bg-white">Get Started</Button>
        </form>
      </div>
    </div>
  );
}
