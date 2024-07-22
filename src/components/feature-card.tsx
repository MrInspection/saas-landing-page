"use client"

import {useEffect, useRef} from "react";
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";

type FeatureProps = {
    title: string,
    description: string,
    icon: any,
}

export function FeatureCard({title, description, icon}: FeatureProps) {
    const offsetX = useMotionValue(-100);
    const offsetY = useMotionValue(-100);
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
    const border = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateMousePosition = (event: MouseEvent) => {
            if (!border.current) return;
            const borderRect = border.current?.getBoundingClientRect();
            offsetX.set(event.x - borderRect.x);
            offsetY.set(event.y - borderRect.y);
        }
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    })

    return (
        <>
            <section className={"border-2 border-white/30 px-5 py-10 rounded-xl text-center sm:flex-1 relative"}>
                <motion.div
                    className={"absolute inset-0 border-2 border-purple-400 rounded-xl"}
                    style={{maskImage, WebkitMaskImage: maskImage,}}
                    ref={border}
                >
                </motion.div>
                <div className={"inline-flex size-14 bg-white text-black items-center justify-center rounded-lg"}>
                    {icon}
                </div>
                <h3 className={"mt-6 font-bold"}>{title}</h3>
                <p className={"mt-2 text-white/70"}>{description}</p>
            </section>
        </>
    )
}
