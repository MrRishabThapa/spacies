import React from "react";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="h-screen bg-[#19191E] text-white flex flex-col gap-8 md:flex-row items-center justify-between px-10 md:px-20"
    >
      {/* Left Side - Text Content */}
      <div className="md:w-[55%] space-y-6">
        <h2 className="text-5xl font-bold text-[#b7d9a3]">
          About <span className="text-[#5E8B22]">Spacies</span>
        </h2>
        <p className="text-gray-300 w-[100%] text-sm leading-relaxed max-w-[90%]">
          Spacies is a next-generation bioscience intelligence platform built
          for NASA’s Space Apps Challenge. We simplify access to NASA’s decades
          of space biology data through AI-driven dashboards, knowledge graphs,
          and real-time visual analytics.
        </p>

        <div className="space-y-3 mt-8">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#5E8B22]" size={22} />
            <span className="text-gray-300 text-sm">
              User-friendly interactive dashboards
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#5E8B22]" size={22} />
            <span className="text-gray-300 text-sm">
              AI-powered insights from bioscience data
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#5E8B22]" size={22} />
            <span className="text-gray-300 text-sm">
              Real-time research updates and visualization
            </span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#5E8B22]" size={22} />
            <span className="text-gray-300 text-sm">
              Empowering next-gen explorers and scientists
            </span>
          </div>
        </div>
      </div>

      {/* Right Side - Graphic */}
      <div className="md:w-[40%] mt-10 md:mt-0 flex justify-center md:justify-start">
        <div className="w-[280px] h-[400px] sm:w-[320px] sm:h-[480px] md:w-[360px] md:h-[540px] rounded-3xl overflow-hidden">
          <img
            src="/about.svg"
            alt="Futuristic Bio Graphic"
            className="w-full h-full object-cover animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
