"use client";
import React from 'react';
import LearnMore from '../learnMore/LearnMore';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <section id='AboutUs' className="w-full max-w-6xl mx-auto px-4 py-16 bg-gradient-to-br from-[#f2f2f2] via-[#e6f7ef] to-[#95cea5]/30 rounded-3xl shadow-xl animate-fade-in-up mb-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#003d2b] text-center mb-8 tracking-tight">About Us</h2>
      <div className="relative flex justify-center items-center mx-auto rounded-3xl mt-4 mb-8 shadow-lg overflow-hidden animate-fade-in-up" style={{height: '15.625rem', maxWidth: '95vw'}}>
        <div className="absolute inset-0 w-full h-full bg-[url('/watch.svg')] bg-cover bg-center" />
        <Link target='_blank' href="https://youtube.com/@blacktinum" className="absolute inset-0 flex items-center justify-center z-10">
          <span className="block w-24 h-24 md:w-40 md:h-40 bg-[url('/watchIcon.svg')] bg-contain bg-no-repeat cursor-pointer transition-transform hover:scale-110 animate-pulse-slow" />
        </Link>
      </div>
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-6 animate-fade-in-up delay-150">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-4">At Blacktinum, we&apos;ve redefined the way you trade cryptocurrencies. We combine cutting-edge artificial intelligence algorithms with a range of innovative trading tools.</h3>
        <LearnMore />
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          At Blacktinum, we unveil the power of exclusive, closely guarded trading strategies that have been honed over several years of meticulous refinement. These unique strategies, crafted with precision and tested rigorously for over six years, have finally been made accessible to the public. This groundbreaking revelation is your gateway to unparalleled success in the world of crypto trading.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          We take immense pride in introducing a crypto trading experience that is truly exceptional, built upon a distinct, proven trading strategy that has evolved over six years. This strategy seamlessly harmonizes with artificial intelligence, harnessing the capabilities of automation. The outcome? A trading solution that flawlessly executes trades, even while you&apos;re at rest, ensuring you awaken to substantial gains.
        </p>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          With Blacktinum, you&apos;re not just trading; you&apos;re trading with a strategic edge that&apos;s been kept under wraps until now. Join us, and unlock the unparalleled potential of our exclusive trading strategies today. It&apos;s time to redefine your crypto trading experience with the best-kept secret in the market.
        </p>
      </div>
      <style jsx>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) 0.2s forwards;
        }
        .animate-fade-in-up.delay-150 {
          animation-delay: 0.4s;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.08); }
        }
      `}</style>
    </section>
  )
}

export default AboutUs
