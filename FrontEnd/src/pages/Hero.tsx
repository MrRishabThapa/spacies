import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

const Hero: React.FC = () => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      {/* ===== HERO SECTION (1st 100vh) ===== */}
      <section
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-white"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#3B5220] mb-8">
            Accelerating <br /> Space Biology Research
          </h1>
          <p className="text-[#5E8B22]-600 w-[80%] text-sm md:text-md md:w-[55%] m-auto">
            Interactive dashboards, AI-powered insights, and knowledge graphs—
            built to make NASA’s plant research accessible for scientists,
            educators, and explorers.
          </p>

          <div className="mt-6">
            <Link
              to="/signup"
              className="px-8 mr-3 py-2 text-[#b7d9a3] bg-[#19191E] border border-[#19191E] rounded-md font-semibold hover:bg-[#b7d9a3] hover:text-[#19191E] transition"
            >
              Get Started
            </Link>
            <Link
              to="/"
              className="px-8 py-2 bg-[#b7d9a3] border border-black rounded-md font-normal hover:bg-black/50 hover:text-[#b7d9a3] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION (2nd 100vh) ===== */}
      <section className="h-screen w-full">
        <About />
      </section>
    </div>
  );
};

export default Hero;
