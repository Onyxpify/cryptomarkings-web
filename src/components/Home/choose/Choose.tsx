"use client";
import React from 'react';
import { reasons, reasonsTypes } from './chooseData';

const Choose = () => {
  return (
    <section id='Choose' className="w-full max-w-7xl mx-auto px-4 py-16 bg-gradient-to-br from-[#e6f7ef] via-[#95cea5]/40 to-[#003d2b]/10 rounded-3xl shadow-xl animate-fade-in-up mt-0">
      <h2 className="text-2xl md:text-4xl font-extrabold text-[#003d2b] text-center mb-12 tracking-tight uppercase">Why Choose Blacktinum?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-24">
        {reasons.map((each: reasonsTypes) => (
          <div key={each.id} className="reason flex flex-col items-start bg-white/10 rounded-2xl shadow p-6 gap-4 hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 animate-fade-in-up">
            <div className="img flex items-center justify-center w-16 h-16 rounded-2xl bg-[#f2f2f2] shadow animate-bounce-slow mb-2">
              {each.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">{each.title}</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">{each.text}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.5s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  )
}

export default Choose