"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import HelixImage from "../assets/images/helix2.png";
import EmojiStarImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {useRef} from "react";

export function CtaSection() {

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    })

    const translateY = useTransform(scrollYProgress, [0, 1], [30, -25]);

    return (
        <>
            <div className={"bg-black text-white text-center py-[72px] sm:py-24 overflow-x-clip"} ref={containerRef}>
                <div className={"container max-w-xl relative"}>
                    <motion.div style={{ translateY }} >
                        <Image src={HelixImage} alt={"Helix Image"} className={"absolute top-6 left-[calc(100%+36px)]"} />
                    </motion.div>
                    <motion.div style={{ translateY }}>
                        <Image src={EmojiStarImage} alt={"Emoji Star Image"} className={"absolute -top-[120px] right-[calc(100%+24px)]"} />
                    </motion.div>
                    <h2 className={"text-5xl font-bold tracking-tight text-center"}>Get Instant Access</h2>
                        <p className={"text-lg text-center text-white/70 mt-5 "}>
                            Celebrate the joy of accomplishment with an app designed to track your
                            progress and motivates your efforts.
                        </p>
                    <form className={"flex flex-col sm:flex-row gap-2.5 mt-10"}>
                        <Input placeholder={"Enter your email"} className={"bg-muted"} />
                        <Button>Get Started</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
