import React from 'react';
import { offers, offerTypes } from './offersData';
import LearnMore from '../learnMore/LearnMore';

const Offers = () => {
  return (
    <section id='Offers' className="w-full max-w-7xl mx-auto px-4 py-16 mt-12 bg-[#f2f2f2] rounded-3xl">
      <div className="mb-12 text-center">
        <h6 className="text-lg md:text-xl font-bold text-[#003d2b] mb-2 tracking-widest uppercase">Blacktinum Offers</h6>
        <p className="text-2xl md:text-3xl font-extrabold text-gray-900">Explore the Outstanding Features that Make Blacktinum your Gateway to Unparalleled Success:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {offers.map((offer: offerTypes) => (
          <div className="offer flex flex-col md:flex-row items-start bg-white rounded-2xl shadow p-6 gap-6 hover:shadow-lg transition" key={offer.id}>
            <div className="img flex items-center justify-center w-28 h-28 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6">{offer.icon}</div>
            <div className="info flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{offer.title}</h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">{offer.text}</p>
              <LearnMore />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Offers