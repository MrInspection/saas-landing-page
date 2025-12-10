"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CursorImage from "../assets/images/cursor.png";
import MessageImage from "../assets/images/message.png";

export function HeroSection() {
  return (
    <section className="relative overflow-clip bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] bg-black py-[72px] text-white sm:py-24">
      <div className="-translate-x-1/2 absolute top-[calc(100%-96px)] left-1/2 h-[375px] w-[750px] rounded-[100%] border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] bg-black sm:top-[calc(100%-128px)] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px]" />
      <div className="container relative">
        <div className="flex items-center justify-center">
          <Link
            href="#"
            className="inline-flex gap-3 rounded-xl border border-neutral-200/25 px-3 py-1.5"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text font-medium text-transparent">
              Version 2.0 is here
            </span>
            <span className="inline-flex items-center gap-1">
              Read More
              <ArrowRight className="size-4 text-white" />
            </span>
          </Link>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="relative inline-flex">
            <h1 className="inline-flex text-center font-bold text-7xl tracking-tighter sm:text-9xl">
              One Task <br />
              at a Time
            </h1>
            <motion.div
              className="absolute top-[108px] right-[476px] max-sm:hidden"
              drag
              dragSnapToOrigin={true}
            >
              <Image
                src={CursorImage}
                alt="Cursor Image"
                width={200}
                height={200}
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
            <motion.div
              className="absolute top-[56px] left-[498px] max-sm:hidden"
              drag
              dragSnapToOrigin={true}
            >
              <Image
                src={MessageImage}
                alt="Message Image"
                width={200}
                height={200}
                className="max-w-none"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="mt-8 max-w-md text-pretty text-center text-xl">
            Celebrate the joy of accomplishment with an app designed to track
            progress, motivate your efforts, and celebrate your successes.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="h-12 rounded-lg bg-white font-medium">
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  );
}
