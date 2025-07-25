import React, { useRef } from "react";
import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

function FeatureCards() {
  const cardRefs = useRef([]);

  // GlowCard-like shine effect
  const handleMouseMove = (idx) => (e) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <section id="abilities" className="py-16 px-4 md:px-16 ">
      <TitleHeader title="What I Offer" subtitle="What I Offer" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {abilities.map((card, idx) => (
          <div
            key={idx}
            ref={el => (cardRefs.current[idx] = el)}
            onMouseMove={handleMouseMove(idx)}
            className="card card-border rounded-xl p-8 flex flex-col gap-4 group relative overflow-hidden bg-white bg-opacity-10"
            style={{
              background: "rgba(255,255,255,0.05)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              '--start': '0',
            }}
          >
            <div className="glow"></div>
            <h3 className="font-bold text-lg text-white z-10">{card.title}</h3>
            <p className="text-white text-sm z-10">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureCards; 