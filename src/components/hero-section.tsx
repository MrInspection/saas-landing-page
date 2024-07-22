"use client"

import Link from "next/link";
import {ArrowRight} from "lucide-react";
import CursorImage from "../assets/images/cursor.png"
import MessageImage from "../assets/images/message.png"
import Image from "next/image";
import {motion} from "framer-motion";

export function HeroSection() {
    return (
        <>
            <div className={"bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip"}>
                <div className={"absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px]   rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-128px)]"}></div>
                <div className={"container relative"}>
                    <div className={"flex items-center justify-center"}>
                        <Link href={"#"} className={"inline-flex gap-3 border-white/40 border py-1 px-2 rounded-lg"}>
                            <span className={"bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] bg-clip-text text-transparent"}>
                                Version 2.0 is here
                            </span>
                            <span className={"inline-flex items-center gap-1"}>
                                Read More
                                <ArrowRight className={"text-white size-4"}/>
                            </span>
                        </Link>
                    </div>
                    <div className={"flex justify-center mt-8"}>
                        <div className={"inline-flex relative"}>
                            <h1 className={"text-7xl sm:text-9xl font-bold tracking-tighter text-center inline-flex"}>
                                One Task <br/>at a Time
                            </h1>
                            <motion.div
                                className={"absolute right-[476px] top-[108px] max-sm:hidden"}
                                drag dragSnapToOrigin={true}
                            >
                                <Image
                                    src={CursorImage} alt={"Cursor Image"}
                                    width={200} height={200}
                                    className={"max-w-none"}
                                    draggable={false}
                                />
                            </motion.div>

                            <motion.div
                                className={"absolute top-[56px] left-[498px] max-sm:hidden"}
                                drag dragSnapToOrigin={true}
                            >
                                <Image
                                    src={MessageImage} alt={"Message Image"}
                                    width={200} height={200}
                                    className={"max-w-none"}
                                    draggable={false}
                                />
                            </motion.div>

                        </div>
                    </div>
                    <div className={"flex justify-center"}>
                        <p className={"text-center text-xl mt-8 max-w-md"}>
                            Celebrate the joy of accomplishment with an app designed to track
                            progress, motivate your efforts, and celebrate your successes.
                        </p>
                    </div>
                    <div className={"flex mt-8 justify-center"}>
                        <button className={"bg-white text-black font-medium py-3 px-5 rounded-lg"}>Get Started for Free</button>
                    </div>
                </div>
            </div>
        </>
    )
}
