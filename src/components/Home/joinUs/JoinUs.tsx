import React from "react";
import Image from "next/image";
import FourBtn from "../fourBtn/FourBtn";

const JoinUs = () => {
  return (
    <section id="JoinUs" className="w-full max-w-7xl mx-auto px-4 py-16 mt-12 bg-[#95cea5] rounded-3xl">
      <div className="mb-12 text-center">
        <h6 className="text-lg md:text-xl font-bold text-[#003d2b] mb-2 tracking-widest uppercase">Blacktinum Offers</h6>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Join our affiliate program and start earning compensation with our various plans:</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Rewards List */}
        <div className="flex flex-col gap-8">
          <div className="cell1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Direct Referral Reward</h3>
            <p className="text-base md:text-lg text-white/90 mb-4">Earn from 15% to 50% of the subscription fee from your direct referrals who sign up with Blacktinum.</p>
          </div>
          <div className="cell1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Binary Plan</h3>
            <p className="text-base md:text-lg text-white/90 mb-4">Receive a Daily Binary Commission of 10% based on the subscription value of your weaker leg, with no limitations.</p>
          </div>
          <div className="cell1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Leadership Reward (Unilevel)</h3>
            <p className="text-base md:text-lg text-white/90 mb-4">Earn a percentage from the trading fees we charge your downline, extending up to your 7th level of downlines.</p>
          </div>
        </div>
        {/* Community Image */}
        <div className="flex justify-center items-center">
          <Image alt="our community" src="/community.svg" width={404} height={280} className="rounded-2xl shadow-lg" />
        </div>
      </div>
      {/* Mobile App Download Area */}
      <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
        <div className="relative w-full md:w-1/2 h-[350px] md:h-[400px] flex items-center justify-center">
          <Image className="absolute z-10 left-1/2 -translate-x-1/2 bottom-8 w-2/3 md:w-1/2" alt="phones" src="/phones.svg" width={388} height={456} />
          <Image className="absolute z-0 left-0 top-0 w-full h-full object-contain" alt="dots" src="/green_dots.svg" width={560} height={528} />
        </div>
        <div className="box flex-1 flex flex-col justify-center items-start md:items-start gap-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Download the mobile app to start exploring</h3>
          <p className="text-base md:text-lg text-white/90">Download the app to monitor strategy statistics, activate bots, and close orders. Whether you&apos;re at home or on the go, position management is at your fingertips.</p>
          <FourBtn style="join-btns" />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
