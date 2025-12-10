"use client";

import { motion } from "motion/react";
import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import apexLogo from "../assets/images/apex.png";
import celestialLogo from "../assets/images/celestial.png";
import echoLogo from "../assets/images/echo.png";
import pulseLogo from "../assets/images/pulse.png";
import quantumLogo from "../assets/images/quantum.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export function LogoTicker() {
  return (
    <section className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-white/70 text-xl">
          Trusted by the world's most innovative teams
        </h2>
        <div className="relative mt-9 flex overflow-hidden before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-5 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] before:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-5 after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))] after:content-['']">
          <motion.div
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="flex flex-none gap-16 pr-16"
          >
            {[...images, ...images].map((image, index) => (
              <Image
                src={image.src}
                alt={image.alt}
                key={index}
                className="h-8 w-auto flex-none"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
