"use client";
import React from "react";
import { steps, stepsTypes } from "./getstartedData";
import FourBtn from "../fourBtn/FourBtn";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section id="GetStarted" className="relative w-full max-w-7xl mx-auto px-4 py-16 mt-20 bg-gradient-to-br from-[#e6f7ef] via-[#95cea5]/40 to-[#003d2b]/10 rounded-3xl shadow-xl animate-fade-in-up overflow-hidden">
      {/* Decorative phone image in background */}
      <div className="absolute left-8 md:left-20 bottom-0 w-5/6 md:w-1/2 h-[380px] md:h-[600px] pointer-events-none select-none opacity-90 z-0 animate-float-slow">
        <Image src="/png/phoneDots.png" alt="Phone illustration" fill className="object-contain object-left-bottom" />
      </div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h6 className="text-lg md:text-xl font-bold text-[#003d2b] mb-2 tracking-widest uppercase">How to Get Started</h6>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Crypto can be challenging, but Blacktinum simplifies it.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Empty for spacing on desktop */}
          <div className="hidden md:block" />
          {/* Right: Steps */}
          <div className="flex flex-col justify-center h-full bg-white/30 backdrop-blur-md rounded-2xl shadow-lg p-8 animate-fade-in-up delay-150 md:mr-12 lg:mr-20">
            <h3 className="text-xl md:text-2xl font-bold text-[#003d2b] mb-6">How to Get Started</h3>
            <div className="flex flex-col gap-6">
              {steps.map((each: stepsTypes) => (
                <div className="flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300" key={each.id}>
                  <div className="flex-shrink-0 w-12 h-12 border-2 border-[#003d2b] rounded-full flex items-center justify-center bg-white shadow hover:scale-110 transition-transform duration-300">
                    <Image width={32} height={32} src={each.icon} alt="icon" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">{each.text}</p>
                    {each.hr && <div className="w-1 h-10 bg-[#003d2b] mx-auto my-2 rounded-full opacity-30" />}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <FourBtn style="get-btns" />
            </div>
          </div>
        </div>
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
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </section>
  );
};

export default GetStarted;
