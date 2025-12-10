"use client";

import { Goal, MonitorSmartphone, ShieldCheck } from "lucide-react";
import { FeatureCard } from "@/components/feature-card";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
    icon: MonitorSmartphone,
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
    icon: Goal,
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
    icon: ShieldCheck,
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-black py-[72px] text-white sm:py-24">
      <div className="container">
        <h1 className="pt-6 text-center font-bold text-5xl tracking-tighter sm:text-6xl">
          Everything you need
        </h1>
        <div className="mx-auto max-w-3xl">
          <p className="mt-5 text-center text-white/70 text-xl">
            Enjoy customization lists, team work tools, and smart tracking all
            in one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex items-center justify-center">
          <div className="grid max-w-5xl gap-5 sm:grid-cols-3">
            {features.map((features, index) => (
              <FeatureCard
                key={index}
                title={features.title}
                description={features.description}
                icon={features.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
