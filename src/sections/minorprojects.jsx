import React from "react";
import TiltedCard from "./TiltedCard";
import TitleHeader from "../components/TitleHeader";

const minorProjects = [
  {
    title: "Food Waste Reduction",
    description: "A web-based Food Waste Reduction Project aimed at minimizing food waste by connecting food providers (such as restaurants or stores) with local charities and receivers. The platform allows users to sign in as either providers or receivers, manage their profiles, and facilitate food donation. Key sections include home, login/sign-up, provider and receiver details, and contact information. The system ensures only authenticated users can access provider or receiver details, promoting responsible and efficient food sharing.",
    tech: ["HTML", "CSS", "Django (Python)", "GitHub for version control"],
  },
  {
    title: "Financial Diversification Advisory Dashboard",
    description: "The Financial Diversity Advisor is a machine learning-powered dashboard designed to simplify and personalize investment planning. It empowers users—regardless of their financial background—to build well-diversified portfolios based on real-time data and personal inputs like age, investment amount, and risk tolerance. By bridging the gap between expensive human advisors and impersonal robo-advisors, it offers dynamic, sector-wise and company-wise diversification using clustering algorithms. The intuitive dashboard visualizes personalized portfolio recommendations, helping users make smarter investment decisions.",
    tech: ["Python", "K-Means Clustering", "Matplotlib", "Plotly", "Sectoral company data", "real-time financial market trends"],
  },
  {
    title: "Healthcare Management System",
    description: "A responsive Healthcare Patient Management Application that enables patients to register, create profiles, and seamlessly book appointments with doctors. Administrators can manage, confirm, schedule, or cancel appointments from the backend. The app also features SMS notifications for appointment confirmations, file uploads, and real-time performance monitoring. It’s designed with a focus on clean code architecture, modularity, and reusability to ensure scalability and maintainability.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN UI", "Appwrite", "Twilio (SMS)", "Appwrite File Storage", "Sentry"],
  },
  {
    title: "Real-Time Weather Website",
    description: "The Real-Time Weather Website is a responsive web application that provides accurate, live weather updates for any searched city or location. It displays key weather parameters such as temperature, humidity, wind speed, and weather conditions with real-time data fetched from weather APIs. The website features a clean user interface, allowing users to easily check the current weather and forecast. Designed for ease of use, the site is ideal for everyday users looking for quick and reliable weather information.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API (or similar)", "GitHub for version control"],
  },
  {
    title: "Venue Booking System",
    description: "The Venue Booking System is a web-based application that simplifies the process of booking venues for events like meetings, weddings, or conferences. Users can browse available venues, view details such as capacity, location, and pricing, and book them based on availability. The system includes user authentication, real-time booking status updates, and an admin panel for managing venue listings and reservations. It streamlines venue management and enhances user convenience with a clean and responsive interface.",
    tech: [ "React", "Node.js", "MongoDB", "Express", "TailwindCSS", "GitHub for version control"],
  },
  
  // Add more projects as needed
];

function MinorProjects() {
  return (
    <section id="minor-projects" className="py-16 px-4 md:px-16 bg-[#0a0a0a]">
      <TitleHeader title="Minor Projects" subtitle="Other Work" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {minorProjects.map((project, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-xl p-6 flex flex-col items-center justify-center min-h-[180px] transition-all duration-300 hover:shadow-2xl hover:border-blue-400/40 group overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none group-hover:blur-sm group-hover:opacity-60 transition-all duration-300" style={{ background: "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.15) 0%, transparent 70%)" }} />
            <h3 className="font-bold text-lg mb-2 text-white z-10 text-center drop-shadow-lg">{project.title}</h3>
            <p className="text-sm text-white/80 mb-2 z-10 text-center drop-shadow">{project.description}</p>
            <div className="flex flex-wrap gap-2 justify-center z-10">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-blue-900/60 text-blue-200 text-xs px-2 py-1 rounded-full font-semibold shadow">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MinorProjects; 