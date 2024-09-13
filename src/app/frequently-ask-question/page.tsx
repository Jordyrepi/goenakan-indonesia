import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { faqs } from "@/utils/dummy-data/faq";
import React from "react";

const FrequentlyAskQuestionsPage = () => {
  return (
    <section className="mx-auto my-10 w-full max-w-7xl space-y-12 px-4">
      <h2 className="text-center font-gilda text-5xl font-medium">
        Frequently Asked Question
      </h2>
      <div className="flex items-center justify-center bg-white">
        <div className="w-[60rem] space-y-8 rounded-lg border border-black p-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <h3 className="font-gilda text-3xl font-medium mb-4">{faq.title}</h3>
                {faq.faq.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${faq.title}-${item.id}`}
                  >
                    <AccordionTrigger className="font-gilda text-start">{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskQuestionsPage;
