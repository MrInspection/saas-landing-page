"use client";

import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import LogoImage from "../assets/images/logosaas.png";

export function SiteHeader() {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const items = [
    { title: "About", href: "#" },
    { title: "Features", href: "#" },
    { title: "Updates", href: "#" },
    { title: "Help", href: "#" },
    { title: "Customers", href: "#" },
  ];

  if (typeof window !== "undefined") {
    if (openMobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <>
      <header className="bg-black">
        <div className="container flex max-w-[1400px] items-center justify-between py-4 max-md:px-4">
          <Link href="/" className="relative">
            <div className="absolute top-2 bottom-0 w-full bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] blur-md" />
            <Image
              src={LogoImage}
              alt="Saas Logo"
              className="relative size-10"
            />
          </Link>
          <nav className="flex items-center gap-8 max-md:hidden">
            {items.map((item, index) => (
              <Link
                href={item.href as Route}
                key={index}
                className="text-white/60 transition hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <div>
            <Button className="rounded-lg bg-white max-md:hidden">
              Get Started
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-lg border-neutral-200/25 md:hidden"
              onClick={() => setOpenMobileNav((prev) => !prev)}
            >
              <div className="relative flex h-8 w-4 items-center justify-center">
                <div className="relative size-4">
                  <span
                    className={cn(
                      "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                      openMobileNav ? "-rotate-45 top-[0.4rem]" : "top-1",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute left-0 block h-0.5 w-4 bg-foreground transition-all duration-100",
                      openMobileNav ? "top-[0.4rem] rotate-45" : "top-2.5",
                    )}
                  />
                </div>
                <span className="sr-only">Toggle Menu</span>
              </div>
            </Button>
          </div>
        </div>
      </header>
      {openMobileNav && (
        <section className="fixed top-30 right-0 bottom-0 left-0 z-40 overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container relative h-full">
            <nav className="flex h-full flex-col gap-4 py-10">
              {items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href as Route}
                  className="h-10 font-bold text-md text-muted-foreground uppercase tracking-widest"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      )}
    </>
  );
}
