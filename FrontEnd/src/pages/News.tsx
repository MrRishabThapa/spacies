import React from "react";
import { ArrowUpRight } from "lucide-react";

const mainNews = {
  title: "Gene Therapy Trial Shows Promise for Astronaut Immunity",
  author: "Dr. L. Ramos",
  img: "https://images.unsplash.com/photo-1580795479025-93d13fd9aa6c?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const sideNews = [
  {
    title: "AI Predicts Microbial Mutations in Space Labs",
    author: "Dr. A. Nair",
    img: "https://plus.unsplash.com/premium_photo-1730134247527-51e238f85caf?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "New Bio-Printing Techniques Advance Organ Growth in Orbit",
    author: "Prof. Mei Chen",
    img: "https://images.unsplash.com/photo-1668511238530-ab0d1bc3037c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJpby10ZWNofGVufDB8fDB8fHww",
  },
  {
    title: "NASA Integrates CRISPR for Space Agriculture Projects",
    author: "Rahul Desai",
    img: "https://plus.unsplash.com/premium_photo-1729871881792-a7106ce6c0bd?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const latestNews = [
  {
    title: "Synthetic Biology Helps Create Radiation-Resistant Cells",
    author: "Lina Carter",
    img: "https://images.unsplash.com/photo-1648792940059-3b782a7b8b20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmlvLXRlY2h8ZW58MHwwfDB8fHww",
  },
  {
    title: "AI Tutors Assist Astronauts in Complex Lab Workflows",
    author: "Rahul Desai",
    img: "https://plus.unsplash.com/premium_photo-1699387202945-090fd57c69f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWklMjBiaW8tdGVjaHxlbnwwfDB8MHx8fDA%3D",
  },
];

const popularNews = [
  {
    title:
      "Construction Begins on Space-Based Biotech Labs for Long-Term Missions",
    img: "https://plus.unsplash.com/premium_photo-1699747377041-bf612eb95088?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWklMjBiaW8tdGVjaHxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title:
      "Construction Begins on Space-Based Biotech Labs for Long-Term Missions",
    img: "https://plus.unsplash.com/premium_photo-1699747377041-bf612eb95088?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QWklMjBiaW8tdGVjaHxlbnwwfDB8MHx8fDA%3D",
  },
];

const NewsPage: React.FC = () => {
  return (
    <div className="bg-white text-[#19191E] font-poppins pt-24">
      {/* HEADER */}
      <section className="text-center py-16 px-6">
        <h1 className="text-3xl md:text-5xl text-[#2F4F4F] font-bold mb-6">
          <span className="text-[#4caf50]">Catch Up on</span> <br />
          What’s Happening Around the Globe
        </h1>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            placeholder="Search any biotech news..."
            className="w-full md:w-1/2 px-4 py-3 rounded-lg border border-gray-300"
          />
          <button className="bg-[#5E8B22] text-white px-6 py-3 rounded-lg hover:bg-[#b7d9a3] hover:text-[#19191E] transition">
            Search News
          </button>
        </div>
      </section>

      {/* MAIN + SIDE NEWS */}
      <section className="grid md:grid-cols-3 gap-6 px-6 md:px-12 mb-16">
        {/* Main News Card */}
        <div className="col-span-2 relative rounded-xl overflow-hidden shadow-md">
          <img
            src={mainNews.img}
            alt={mainNews.title}
            className="w-full h-96 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h2 className="text-2xl font-bold mb-2">{mainNews.title}</h2>
            <p className="text-sm">By {mainNews.author}</p>
          </div>
          <div className="absolute bottom-4 right-4 bg-[#5E8B22] hover:bg-[#b7d9a3] p-3 rounded-full">
            <ArrowUpRight
              size={20}
              className="text-white hover:text-[#19191E]"
            />
          </div>
        </div>

        {/* Side News Cards */}
        <div className="flex flex-col gap-6">
          {sideNews.map((news, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-center rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
            >
              <img
                src={news.img}
                alt={news.title}
                className="w-28 h-28 object-cover"
              />
              <div className="flex-1 p-2">
                <h3 className="font-semibold text-sm">{news.title}</h3>
                <p className="text-xs text-gray-500 mt-1">By {news.author}</p>
              </div>
              <div className="mr-3">
                <ArrowUpRight size={16} className="text-[#5E8B22]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="px-6 text-center md:px-12 mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl pt-4 font-bold mb-2 text-center md:text-center ">
          Latest Bio-Tech Research
        </h2>
        <p className="text-base sm:text-lg md:text-xl mx-auto  max-w-4xl p-3 font-light mb-6 text-center md:text-center">
          Fresh breakthroughs at the intersection of biotechnology and space
          exploration
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {latestNews.map((news, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-center rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
            >
              <img
                src={news.img}
                alt={news.title}
                className="w-40 h-28 object-cover"
              />
              <div className="flex-1 p-3">
                <h3 className="font-semibold text-base">{news.title}</h3>
                <p className="text-xs text-gray-500 mt-1">By {news.author}</p>
              </div>
              <div className="mr-3">
                <ArrowUpRight size={18} className="text-[#5E8B22]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR STORY */}
      <section className="px-6 p-10 text-center text-white bg-[#19191e] md:px-12 pb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl pt-4 font-bold mb-2 text-center md:text-center">
          Popular Story
        </h2>
        <p className="text-base sm:text-lg md:text-xl mx-auto  max-w-4xl p-3 font-light mb-6 text-center md:text-center">
          Explore the biotech breakthroughs capturing global attention — from
          space research to real-world innovation — and see why these stories
          matter
        </p>
        {popularNews.map((popular, idx) => (
          <div
            key={idx}
            className="grid bg-[#4caf50]/20 p-5 md:grid-cols-2 mt-4 gap-10 m-10 rounded-lg items-center"
          >
            <img
              src={popular.img}
              alt={popular.title}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="flex flex-col text-center items-center">
              <h3 className="text-lg font-md mb-4">{popular.title}</h3>
              <button className="flex items-center gap-2 bg-orange-500/50 px-5 py-2 rounded-full text-white hover:bg-[#b7d9a3] hover:text-[#19191E] transition">
                See more news <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
        ;
      </section>
    </div>
  );
};

export default NewsPage;
