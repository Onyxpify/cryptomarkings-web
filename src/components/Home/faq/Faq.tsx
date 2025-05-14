import React from 'react';
import MyAccordion from '../accordion/Accordion';
import ScrollX from '../scrollX/ScrollX';

const Faq = () => {
  return (
    <section id='Faq' className="w-full max-w-7xl mx-auto px-4 py-16 mt-12">
      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
      <ScrollX className="line1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12 min-h-[300px]">
        <div className="qa w-full max-w-2xl mx-auto order-2 lg:order-1">
          <MyAccordion />
        </div>
        <div className="icon flex justify-center items-center order-1 lg:order-2 min-h-[300px]">
          <div className="img w-full h-[250px] md:h-[350px] lg:w-[400px] lg:h-[350px] bg-[url('/faqIcon.svg')] bg-no-repeat bg-center bg-contain" />
        </div>
      </ScrollX>
    </section>
  )
}

export default Faq