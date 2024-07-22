import AppScreen from "../assets/images/app-screen.png";
import Image from "next/image";

export function ProductShowcase() {
    return(
        <>
            <div className={"bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24"}>
                <div className={"container"}>
                    <h2 className={"text-center text-5xl sm:text-6xl font-bold tracking-tighter"}>Intuitive Interface</h2>
                    <div className={"max-w-3xl mx-auto"}>
                        <p className={"text-xl text-white/70 mt-5 text-center"}>
                            Celebrate the joy of accomplishment with an app designed to track your progress, motivates
                            your efforts, and celebrate yoy successes, one task at a time.
                        </p>
                    </div>
                    <div className={"flex items-center justify-center mt-14"}>
                        <Image src={AppScreen} alt={"App Screen"} />
                    </div>
                </div>
            </div>
        </>
    )
}
