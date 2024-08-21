"use client";
import React, { useEffect, useState } from "react";
import Brands from "../components/Brands";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import HomePagdData from "../data/HomePagdData.json";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Galaries from "../components/gallaries/Galaries";
import UpcomingProjects from "../components/UpcomingProjects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const {
  hero,
  socialBtns,
  brands,
  about,
  projects,
  service,
  experience,
  testimonial,
  contact,
} = HomePagdData;
export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <>
      {isClient && (
        <>
          <Header />
          <>
            <Hero data={hero} socialData={socialBtns} />
            {/* <Brands data={brands} /> */}
            <About data={about} />
            <Projects data={projects} />
            <UpcomingProjects data={projects} />
            {/* <Service data={service} /> */}
            {/* <Experience data={experience} /> */}
            {/* <Testimonial data={testimonial} /> */}
            <Galaries />
            <Contact data={contact} socialData={socialBtns} />
          </>
          <Footer />
        </>
      )}
    </>
  );
}
