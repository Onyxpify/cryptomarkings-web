"use client";
import React from 'react';
import FourBtn from '../fourBtn/FourBtn';

const Informed = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 mt-16 animate-fade-in-up">
      <div className="relative rounded-3xl overflow-hidden min-h-[14rem] flex items-center justify-center bg-[#003d2b] bg-[url('/informedBg.svg')] bg-cover bg-center shadow-2xl">
        <div className="absolute inset-0 bg-[#003d2bcc] z-10" />
        <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8 px-2 sm:px-8 py-8 sm:py-10">
          <div className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-32 animate-float">
            <div className="w-full h-full bg-[#f2f2f2] rounded-2xl shadow flex items-center justify-center">
              <div className="w-24 h-16 sm:w-32 sm:h-24 bg-[url('/Newsletter.svg')] bg-contain bg-no-repeat" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left animate-fade-in-up delay-100">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#95cea5] mb-2 drop-shadow-lg">Stay Informed with Blacktinum&apos; Blog</h3>
            <p className="text-base sm:text-lg text-white/90">For the latest crypto updates and popular trading strategies.</p>
          </div>
          <div className="flex-shrink-0 flex items-center mt-4 md:mt-0 animate-fade-in-up delay-200">
            <FourBtn style='informed-bt' />
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
        }
        .animate-fade-in-up.delay-100 { animation-delay: 0.3s; }
        .animate-fade-in-up.delay-200 { animation-delay: 0.5s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  )
}

export default Informed