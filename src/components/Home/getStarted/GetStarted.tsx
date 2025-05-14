import React from "react";
import { steps, stepsTypes } from "./getstartedData";
import FourBtn from "../fourBtn/FourBtn";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section id="GetStarted" className="w-full max-w-7xl mx-auto px-4 py-16 mt-20">
      <div className="text-center mb-12">
        <h6 className="text-lg md:text-xl font-bold text-[#003d2b] mb-2 tracking-widest uppercase">How to Get Started</h6>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Crypto can be challenging, but Blacktinum simplifies it.</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Phone illustration */}
        <div className="w-full h-[350px] md:h-[500px] bg-[url('/png/phoneDots.png')] bg-cover bg-center rounded-3xl shadow-md" />
        {/* Right: Steps */}
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-xl md:text-2xl font-bold text-[#003d2b] mb-6">How to Get Started</h3>
          <div className="flex flex-col gap-6">
            {steps.map((each: stepsTypes) => (
              <div className="flex items-start gap-4" key={each.id}>
                <div className="flex-shrink-0 w-12 h-12 border-2 border-[#003d2b] rounded-full flex items-center justify-center bg-white shadow">
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
    </section>
  );
};

export default GetStarted;
