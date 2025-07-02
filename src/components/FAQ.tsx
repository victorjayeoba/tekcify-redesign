"use client";

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <button
        className="w-full flex justify-between items-center text-left text-gray-800 focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'What is Tekcify?',
      answer: 'Tekcify is a suite of AI-powered tools designed to enhance digital experiences for students, professionals, and businesses. Our products include Binx AI for WhatsApp, PDFX for document analysis, and Campux for student networking.',
    },
    {
      question: 'Can I access all products with one account?',
      answer: 'Yes, a single Tekcify account gives you access to our entire ecosystem of products. We believe in a unified and seamless digital experience.',
    },
    {
      question: 'Is Tekcify free to use?',
      answer: 'Tekcify offers both free and premium plans for our products. You can start with our free tiers to experience the core features and upgrade for more advanced capabilities.',
    },
    {
      question: 'How does Binx AI differ from other chatbots?',
      answer: 'Binx AI is more than just a chatbot; it\'s a smart assistant integrated directly into WhatsApp. It focuses on productivity and content creation, helping you with tasks like brainstorming, trend analysis, and even image description generation.',
    },
    {
      question: 'When will Campux be available?',
      answer: 'Campux is currently in the final stages of development and will be launching soon. Sign up for our newsletter to be the first to know when it\'s available!',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about Tekcify and our products
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
        
        <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Contact Support
            </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 