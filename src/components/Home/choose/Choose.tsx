import React from 'react';
import { reasons, reasonsTypes } from './chooseData';

const Choose = () => {
  return (
    <section id='Choose' className="w-full max-w-7xl mx-auto px-4 py-16 bg-[#f2f2f2] rounded-3xl mt-12">
      <h2 className="text-2xl md:text-4xl font-extrabold text-[#003d2b] text-center mb-12 tracking-tight uppercase">Why Choose Blacktinum?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-24">
        {reasons.map((each: reasonsTypes) => (
          <div key={each.id} className="reason flex flex-col items-start bg-white rounded-2xl shadow p-6 gap-4 hover:shadow-lg transition">
            <div className="img flex items-center justify-center w-12 h-12 rounded-full bg-[#95cea5] mb-2">
              {each.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 whitespace-nowrap">{each.title}</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">{each.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Choose