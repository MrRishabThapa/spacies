import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center ">
      <div className="max-w-8xl ml-20 mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        <div className="flex-1 mt-20 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#3B5220] mb-8">
            Accelerating <br /> Space Biology Research
          </h1>
          <p className="text-[#5E8B22]-600 text-xl mb-10 max-w-md">
            Interactive dashboards, AI-powered insights, and knowledge
            graphs—built to make NASA’s plant research accessible for
            scientists, educators, and explorers
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-md font-semibold hover:bg-gray-900 transition">
              Learn More
            </button>

            <Link
              to="/signup"
              className="px-8 py-4 border border-black rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Get Started
            </Link>
          </div>

          <div className="flex-1 flex justify-center md:justify-end h-full">
            <img src="/dna.svg" alt="DNA" className="h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
