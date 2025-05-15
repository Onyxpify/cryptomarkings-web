"use client";
import React from 'react';
import MyAccordion from '../accordion/Accordion';
import ScrollX from '../scrollX/ScrollX';

const Faq = () => {
  return (
    <section id='Faq' className="w-full max-w-7xl mx-auto px-4 py-16 mt-12 bg-gradient-to-br from-[#e6f7ef] via-[#95cea5]/40 to-[#003d2b]/10 rounded-3xl shadow-xl animate-fade-in-up">
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
      <ScrollX className="line1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12 min-h-[300px]">
        <div className="qa w-full max-w-2xl mx-auto order-2 lg:order-1 bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-8 animate-fade-in-up">
          <MyAccordion />
        </div>
        <div className="icon flex justify-center items-center order-1 lg:order-2 min-h-[300px] animate-fade-in-up delay-150">
          <div className="img w-full h-[250px] md:h-[350px] lg:w-[400px] lg:h-[350px] bg-[url('/faqIcon.svg')] bg-no-repeat bg-center bg-contain rounded-2xl shadow-lg" />
        </div>
      </ScrollX>
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
        }
        .animate-fade-in-up.delay-150 { animation-delay: 0.4s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}

export default Faq