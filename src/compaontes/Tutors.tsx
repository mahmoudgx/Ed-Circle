import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TutorCard from "./TutorCard";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Tutors = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(".tutor-card");

    if (elements) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="mt-20 max-w-7xl mx-auto mb-20 space-y-10 px-5"
      ref={containerRef}
    >
      <div className="text-center space-y-2">
        <h1 className="text-[#7F56D9] font-bold">Tutors</h1>
        <p className="lg:text-4xl text-2xl font-bold">Meet the Heroes</p>
        <p className="lg:text-xl text-base text-gray-600">
          On Ed-Circle, instructors from all over the world instruct millions of
          students. We
          <br /> offer the knowledge and abilities.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <TutorCard
          className="tutor-card"
          name="Theresa Webb"
          job="Application Support Analyst Lead"
          about="Former co-founder of<br/> Opendoor. Early staff at<br/>  Spotify and Clearbit."
          avatar="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TutorCard
          className="tutor-card"
          name="Courtney Henry"
          job="Director Undergraduate Analytics and Planning"
          about="Lead engineering teams at<br/>  Figma, Pitch, and Protocol<br/>  Labs."
          avatar="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TutorCard
          className="tutor-card"
          name="Albert Flores"
          job="Career Educator"
          about="Former PM for Linear, Lambda School, and On Deck."
          avatar="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <TutorCard
          className="tutor-card"
          name="Marvin McKinney"
          job="Co-op & Internships Program & Operations Manager"
          about="Former Frontend Dev for<br/>  Linear, Coinbase, and Postscript."
          avatar="https://images.unsplash.com/photo-1638727295415-286409421143?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Tutors;
