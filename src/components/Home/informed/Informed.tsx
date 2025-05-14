import React from 'react';
import FourBtn from '../fourBtn/FourBtn';

const Informed = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-2 sm:px-4 mt-8">
      <div className="relative rounded-3xl overflow-hidden min-h-[12rem] flex items-center justify-center bg-[#003d2b] bg-[url('/informedBg.svg')] bg-cover bg-center shadow-lg">
        <div className="absolute inset-0 bg-[#003d2bcc] z-10" />
        <div className="relative z-20 w-full flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8 px-2 sm:px-6 py-4 sm:py-6">
          <div className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-32 bg-[url('/Newsletter.svg')] bg-contain bg-no-repeat" />
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#95cea5] mb-2">Stay Informed with Blacktinum&apos; Blog</h3>
            <p className="text-base sm:text-lg text-white">For the latest crypto updates and popular trading strategies.</p>
          </div>
          <div className="flex-shrink-0 flex items-center mt-4 md:mt-0">
            <FourBtn style='informed-bt' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Informed