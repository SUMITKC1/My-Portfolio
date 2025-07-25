import React, { useState, useEffect } from "react";
import TitleHeader from "../components/TitleHeader";

const projects = [
  {
    images: [
      "/images/route-optimization-1.png",
      "/images/route-optimization-2.png",
      "/images/route-optimization-3.png",
    ],
    title: "Route Optimization",
  },
  {
    images: [
      "/public/images/LUMINA/landing.png",
      "/public/images/LUMINA/login.png",
      "/public/images/LUMINA/signup.png",
      "/public/images/LUMINA/home.png",
      "/public/images/LUMINA/dashboard.png",
      "/public/images/LUMINA/about.png",
      "/public/images/LUMINA/notifications.png",
      "/public/images/LUMINA/newpost.png",
      "/public/images/LUMINA/profile.png",
      "/public/images/LUMINA/editprofile.png",
    ],
    title: "LUMINA",
  },
  {
    images: [
      "/public/images/SAGE/home.png",
      "/public/images/SAGE/upload.png",
    ],
    title: "SAGE",
  },
];

function ProjectCarousel({ images, title }) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliding(true);
      setTimeout(() => {
        setPrevIndex(index);
        setIndex((prev) => (prev + 1) % images.length);
        setSliding(false);
      }, 400); // slide duration
    }, 4000);
    return () => clearInterval(interval);
  }, [index, images.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col justify-end items-center overflow-hidden h-[28rem] md:h-[38rem] rounded-2xl shadow-2xl">
      {/* Previous image (slide out) */}
      {sliding && (
        <img
          src={images[prevIndex]}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain object-center z-0 rounded-2xl transition-transform duration-500 transform translate-x-0"
          style={{ transform: "translateX(-100%)" }}
        />
      )}
      {/* Current image (slide in) */}
      <img
        src={images[index]}
        alt={title}
        className={`absolute inset-0 w-full h-full object-contain object-center z-0 rounded-2xl transition-transform duration-500 ${sliding ? 'transform translate-x-0' : ''}`}
        style={{ transform: sliding ? "translateX(0%)" : "translateX(0%)" }}
      />
      {/* Bottom gradient for text readability */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 rounded-b-2xl" />
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end z-20 pb-8">
        <h3 className="text-white font-extrabold text-3xl md:text-4xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-center px-4">
          {title}
        </h3>
      </div>
    </div>
  );
}

function ShowcaseSection() {
  return (
    <section id="work" className="py-16 px-4 md:px-16 bg-[#0a0a0a]">
      <TitleHeader title="Projects" subtitle="Showcase" />
      <div className="flex flex-col gap-8 w-full">
        {projects.map((project, idx) => (
          <ProjectCarousel key={idx} images={project.images} title={project.title} />
        ))}
      </div>
    </section>
  );
}

export default ShowcaseSection; 