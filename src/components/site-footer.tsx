import Tiktok from "../assets/icons/tiktok.svg"
import Instagram from "../assets/icons/insta.svg"
import Linkedin from "../assets/icons/linkedin.svg"
import Pinterest from "../assets/icons/pinterest.svg"
import X from "../assets/icons/x-social.svg"
import Youtube from "../assets/icons/youtube.svg"

export function SiteFooter() {
    return (
        <>
            <footer className="py-6 md:px-8 md:py-0 border-t-2 bg-black">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
                        ©️ 2024 Spectron Labs, All rights reserved. Built by <a
                        href={"https://github.com/MrInspection"}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        Moussa
                    </a>
                        .
                    </p>
                    <div>
                        <ul className={"flex justify-center gap-2.5 text-muted-foreground"}>
                            <li className={"hover:text-white cursor-pointer"}> <X /> </li>
                            <li className={"hover:text-white cursor-pointer"}> <Instagram /> </li>
                            <li className={"hover:text-white cursor-pointer"}> <Tiktok /> </li>
                            <li className={"hover:text-white cursor-pointer"}> <Linkedin /> </li>
                            <li className={"hover:text-white cursor-pointer"}> <Pinterest /> </li>
                            <li className={"hover:text-white cursor-pointer"}> <Youtube /> </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
