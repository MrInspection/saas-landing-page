import {Goal, MonitorSmartphone, ShieldCheck} from "lucide-react";

const features = [
    {
        title: "Integration Ecosystem",
        description: "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
        icon: <MonitorSmartphone className={"size-7"} />,
    },
    {
        title: "Goal Setting and Tracking",
        description: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
        icon: <Goal className={"size-7"} />,
    },
    {
        title: "Secure Data Encryption",
        description: "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
        icon: <ShieldCheck className={"size-7"} />,
    },
]

export function FeaturesSection() {
    return (
        <>
            <div className={"bg-black text-white py-[72px] sm:py-24"}>
                <div className={"container"}>
                    <h1 className={"text-5xl sm:text-6xl font-bold text-center tracking-tighter pt-6"}>Everything you need</h1>
                    <div className={"max-w-3xl mx-auto"}>
                        <p className={"text-center mt-5 text-xl text-white/70"}>
                            Enjoy customization lists, team work tools, and smart tracking all in
                            one place. Set tasks, get reminders, and see your progress simply and
                            quickly.
                        </p>
                    </div>



                    <div className={"flex items-center justify-center mt-16"}>
                        <div className={"grid sm:grid-cols-3 gap-5 max-w-5xl"}>
                            {features.map((features, index) => (
                                <section key={index} className={"border border-white/30 px-5 py-10 rounded-2xl text-center sm:flex-1"}>
                                    <div className={"inline-flex size-14 bg-white text-black items-center justify-center rounded-lg"}>
                                        {features.icon}
                                    </div>
                                    <h3 className={"mt-6 font-bold"}>{features.title}</h3>
                                    <p className={"mt-2 text-white/70"}>{features.description}</p>
                                </section>
                            ))}
                        </div>


                    </div>










                </div>
            </div>
        </>
    )
}
