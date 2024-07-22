import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {Separator} from "@/components/ui/separator";


const FAQ = [
    {
        question: "What payment methods do you accept?",
        answer:
            "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
    },
    {
        question: "How does the pricing work for teams?",
        answer:
            "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
    },
    {
        question: "Can I change my plan later?",
        answer:
            "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
    },
];

export function FAQsSection() {
    return (
        <>
            <div className={"bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-[72px] sm:py-24"}>
                <div className="container">
                    <h2 className={"text-5xl font-bold tracking-tight text-center"}>Frequently Asked Questions</h2>
                    <div className={"mt-12 max-w-4xl mx-auto"}>
                        <Separator/>
                        <Accordion type="single" collapsible>
                            {FAQ.map((item, index) => (
                                <AccordionItem key={index} value={item.question}>
                                    <AccordionTrigger className={"text-md lg:text-lg font-bold"}>{item.question}</AccordionTrigger>
                                    <AccordionContent className={"text-sm"}>
                                        {item.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}
