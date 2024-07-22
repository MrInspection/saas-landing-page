import {Goal, MonitorSmartphone, ShieldCheck} from "lucide-react";
import {FeatureCard} from "@/components/feature-card";

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
                                <FeatureCard
                                    key={index} title={features.title}
                                    description={features.description} icon={features.icon}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
