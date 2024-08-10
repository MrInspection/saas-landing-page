import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "SaaS Landing Page",
    description: "A beautiful dark landing page for a SaaS application.",
    openGraph: {
        images: [
            {
                url: "/spectronlabs.png",
                width: 1200,
                height: 630,
                alt: "Moussax • Website",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS Landing Page",
        description: "A beautiful dark landing page for a SaaS application.",
        images: [
            {
                url: "/spectronlabs.png",
                width: 1200,
                height: 630,
                alt: "Moussax • Website",
            },
        ],
    },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={clsx(dmSans.className, "antialiased")}>
        {children}
        </body>
        </html>
    );
}
