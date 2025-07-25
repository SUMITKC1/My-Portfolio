import React from "react";
import TiltedCard from "./TiltedCard";
import TitleHeader from "../components/TitleHeader";

const skillCategories = [
  {
    category: "Languages and Tools",
    skills: [
      { name: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Bootstrap", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "jQuery", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
      { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "UI/UX Design", image: null },
      { name: "Responsive Design", image: null },
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", whiteBg: true },
      { name: "REST", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg", whiteBg: true },
      { name: "WebSockets", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg", whiteBg: true },
    ],
  },
  {
    category: "Databases & DevOps",
    skills: [
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Redis", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
      { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", whiteBg: true },
      { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    ],
  },
  {
    category: "CS Fundamentals",
    skills: [
      { name: "DSA", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-plain.svg" },
      { name: "OOPs", image: null },
      { name: "Operating Systems", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "DBMS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Computer Networks", image: null },
      { name: "System Design", image: null },
      { name: "Microservices", image: null },
      { name: "Scalability", image: null },
    ],
  },
];

function TechStack() {
  return (
    <section id="skills" className="py-16 px-4 md:px-16 bg-[#0a0a0a]">
      <TitleHeader title="Skills" subtitle="Tech Stack" />
      <div className="flex flex-col gap-16 mt-8">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="w-full">
            <h3 className="text-lg font-bold text-blue-400 mb-6 pl-2">{cat.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
              {cat.skills.map((skill, i) => (
                <div key={i} className="flex flex-col items-center justify-center bg-white/5 rounded-xl p-4 min-h-[120px] h-full shadow-md">
                  <span className="font-bold text-blue-500 text-base mb-2 mt-1 text-center block w-full">{skill.name}</span>
                  {skill.image && (
                    <div className={`w-full flex justify-center ${(skill.name === 'Express' || skill.name === 'WebSockets' || skill.name === 'REST') ? 'bg-white p-2 rounded-lg' : ''}`}>
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="mx-auto object-contain"
                        style={{ maxHeight: "64px", maxWidth: "64px" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack; 