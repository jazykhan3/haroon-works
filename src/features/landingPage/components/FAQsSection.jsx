import React, { useState } from "react";

const FAQsSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 0,
      question: "Is this allowed by ICAI?",
      answer:
        "Yes. This is a learning assistant, not a cheat tool. It complements your prep — not replaces your effort.",
    },
    {
      id: 1,
      question: "How does the AI-powered practice work?",
      answer:
        "Our AI analyzes your performance patterns and creates personalized practice questions tailored to your weak areas, helping you improve efficiently.",
    },
    {
      id: 2,
      question: "Can I track my progress over time?",
      answer:
        "Absolutely! Our platform provides detailed analytics showing your improvement trends, topic-wise performance, and areas that need more attention.",
    },
    {
      id: 3,
      question: "Is my data secure and private?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your personal information and study data. Your privacy is our top priority.",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, UPI, net banking, and digital wallets for your convenience.",
    },
    {
      id: 5,
      question: "Do you offer refunds?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our platform. Please check our refund policy for detailed terms.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="w-full bg-[#fafaf7] ">
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-orange-500 text-sm font-medium bg-white rounded-lg px-3 py-1 shadow-sm">
              ✏️ Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked
            <br />
            Question
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-4 bg bg-[#f2f2ef] p-4 rounded-2xl">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openFAQ === faq.id ? (
                    <svg
                      className="w-6 h-6 text-gray-600 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        {/* <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Still have questions? Contact our support team at{" "}
            <a
              href="mailto:support@example.com"
              className="text-orange-500 hover:text-orange-600"
            >
              support@example.com
            </a>
          </p>
        </div> */}
      </section>
    </div>
  );
};

export default FAQsSection;
