import React from "react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";

function Experience() {
  return (
    <section id="experience" className="py-16 px-4 md:px-16 ">
      <TitleHeader title="Experience" subtitle="Career" />
      <div className="flex flex-col md:flex-row gap-8">
        {/* Timeline on the left */}
        <div className="hidden md:flex flex-col items-center mr-8">
          <div className="w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full rounded-full" style={{ minHeight: "400px" }}></div>
        </div>
        {/* Experience content on the right */}
        <div className="flex-1 flex flex-col gap-8">
          {expCards.map((exp, idx) => (
            <div key={idx} className="border-1 border-white bg-opacity-10 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
              <p className="text-sm text-blue-300 mb-2">{exp.date}</p>
              <ul className="list-disc list-inside text-white text-sm pl-2">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience; 