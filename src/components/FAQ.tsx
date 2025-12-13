import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Does it sound robotic?",
      answer: "No. We use ultra-low latency voice models that sound incredibly human. Most callers don't even realize they're speaking to an AI."
    },
    {
      question: "What if the AI doesn't know the answer?",
      answer: "If the AI encounters a question it can't answer, it politely takes a message or forwards the call to a designated staff member's phone."
    },
    {
      question: "Can I use my existing phone number?",
      answer: "Yes. You can forward your existing number to our system, or we can provide you with a new local number."
    },
    {
      question: "How long does setup take?",
      answer: "We typically have your AI receptionist live within 3-5 business days after receiving your onboarding information."
    },
    {
      question: "Does it integrate with my calendar?",
      answer: "Yes. We integrate with Calendly, Acuity, Google Calendar, and most major booking platforms to schedule appointments directly."
    },
    {
      question: "Can it handle multiple calls at once?",
      answer: "Yes. Unlike a human receptionist, our AI handles unlimited simultaneous calls. Your customers never hear a busy signal."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and are SOC 2 compliant. Your data is always protected."
    },
    {
      question: "How much does it cost?",
      answer: "Plans start at $499/month. See our pricing section for details. No hidden fees, no long-term contracts."
    },
    {
      question: "Can I customize the voice?",
      answer: "Yes. We can adjust the tone, speed, and accent of the AI to match your brand's personality."
    },
    {
      question: "Do I need to be technical?",
      answer: "Not at all. We handle all setup, configuration, and ongoing maintenance. You just answer qualified leads."
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Questions? Answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index 
                  ? 'bg-white/[0.03] border-white/10' 
                  : 'border-white/5 hover:border-white/10'
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-medium transition-colors ${openIndex === index ? 'text-white' : 'text-white/70'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  openIndex === index ? 'bg-white/10' : 'bg-white/5'
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-white/60" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/40" />
                  )}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-white/50 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
