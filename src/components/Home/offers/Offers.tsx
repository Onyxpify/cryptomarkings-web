"use client";
import React from 'react';
import { offers, offerTypes } from './offersData';
import LearnMore from '../learnMore/LearnMore';

const Offers = () => {
  return (
    <section id='Offers' className="w-full max-w-7xl mx-auto px-4 py-16 mt-12 bg-gradient-to-br from-[#e6f7ef] via-[#95cea5]/40 to-[#003d2b]/10 rounded-3xl shadow-xl animate-fade-in-up">
      <div className="mb-12 text-center">
        <h6 className="text-lg md:text-xl font-bold text-[#003d2b] mb-2 tracking-widest uppercase">Blacktinum Offers</h6>
        <p className="text-2xl md:text-3xl font-extrabold text-gray-900">Explore the Outstanding Features that Make Blacktinum your Gateway to Unparalleled Success:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {offers.map((offer: offerTypes) => (
          <div className="offer flex flex-col md:flex-row items-start bg-white/10 rounded-2xl shadow-lg p-6 gap-6 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 animate-fade-in-up" key={offer.id}>
            <div className="img flex items-center justify-center w-28 h-28 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6 bg-[#f2f2f2] rounded-2xl shadow animate-float">
              {offer.icon}
            </div>
            <div className="info flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-4">{offer.text}</p>
              <LearnMore />
            </div>
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

export default Offers