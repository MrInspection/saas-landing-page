import Image from "next/image";
import LogoImage from "../assets/images/logosaas.png"
import {Menu} from "lucide-react";
import Link from "next/link";

export function SiteHeader() {
    return(
        <>
            <header className={"bg-black"}>
                <div className={"container py-4 flex items-center justify-between max-md:px-4"}>
                    <Link href={"/"} className={"relative"}>
                        <div className={"absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] blur-md"}></div>
                        <Image src={LogoImage} alt={"Saas Logo"} className={"size-10 relative"}/>
                    </Link>
                    <nav className={"flex items-center gap-8 max-md:hidden"}>
                        <Link href={"#"}
                              className={"text-opacity-60 text-white hover:text-opacity-100 transition"}>About</Link>
                        <Link href={"#"}
                              className={"text-opacity-60 text-white hover:text-opacity-100 transition"}>Features</Link>
                        <Link href={"#"}
                              className={"text-opacity-60 text-white hover:text-opacity-100 transition"}>Updates</Link>
                        <Link
                            href={"#"}
                            className={"text-opacity-60 text-white hover:text-opacity-100 transition"}>
                            Help
                        </Link>
                        <Link
                            href={"#"}
                            className={"text-opacity-60 text-white hover:text-opacity-100 transition"}>
                            Customers
                        </Link>
                    </nav>
                    <div>
                        <button className={"bg-white py-2 px-4 rounded-lg max-md:hidden text-sm font-medium"}>Get Started</button>
                        <div className={"border-2 border-muted-foreground border-opacity-30 inline-flex justify-center items-center size-10 p-1.5 rounded-lg md:hidden"}>
                            <Menu className={"text-white"}/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
