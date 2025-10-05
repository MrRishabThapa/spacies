import { useState, useEffect } from "react";
import { BarChart3, Leaf, Rocket, Search } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

const publicationsData = [
  { year: 2020, value: 20 },
  { year: 2021, value: 33 },
  { year: 2022, value: 60 },
  { year: 2023, value: 80 },
  { year: 2024, value: 105 },
  { year: 2025, value: 125 },
];

const speciesData = [
  { name: "Human", value: 40 },
  { name: "Plants", value: 35 },
  { name: "Microbes", value: 50 },
];

const COLORS = ["#2f4f2f", "#4caf50", "#8bc34a"];

const radarData = [
  { subject: "Genomics", Knowledge: 86, Gaps: 110 },
  { subject: "Physiology", Knowledge: 70, Gaps: 90 },
  { subject: "Metabolism", Knowledge: 65, Gaps: 95 },
  { subject: "Cell Bio", Knowledge: 60, Gaps: 85 },
  { subject: "Pathology", Knowledge: 75, Gaps: 100 },
];

type CounterProps = {
  end: number;
  duration?: number;
};

function Counter({ end, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
}

// Define proper type for KPI
type KpiType = {
  total_publications: number;
  species_experimented: number;
  missions_covered: number;
};

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [showResearchDesc, setShowResearchDesc] = useState(false);
  const [showSpeciesDesc, setShowSpeciesDesc] = useState(false);
  const [username, setUsername] = useState("");
  const [kpi, setKpi] = useState<KpiType>({
    total_publications: 0,
    species_experimented: 0,
    missions_covered: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handlefetch();
  }, []);

  const handlefetch = async () => {
    const BASE = "http://127.0.0.1:5000/api/app/dashboard";
    try {
      setIsLoading(true);
      const res = await fetch(BASE, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "GET",
      });

      if (!res.ok) {
        console.log(res, "Error in Response");
        return;
      }

      const data = await res.json();
      const kpi_data = data.kpi;

      setKpi({
        total_publications: kpi_data.total_publications || 0,
        species_experimented: kpi_data.species_experimented || 0,
        missions_covered: kpi_data.missions_covered || 0,
      });
      setUsername(data.username);
    } catch (e) {
      console.log("Network Error", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6 min-h-screen mt-25 -z-10">
      {isLoading && (
        <div className="text-center text-green-900 font-bold mb-4">
          Loading...
        </div>
      )}

      {/* Search Bar */}
      <div className="w-3/5 mx-auto">
        <div className="flex items-center gap-2 glassmorphism-card bg-green-50 border rounded-lg p-3">
          <Search className="text-green-700" />
          <input
            type="text"
            placeholder="Search research Research..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ fontFamily: "Poppins, sans-serif" }}
            className="flex-1 border-none bg-transparent text-green-900 placeholder-green-700 outline-none"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="z-100 bg-transparent w-[30%] h-20 mx-auto flex flex-col justify-evenly gap-2 rounded-lg md:w-[40%] space-y-1">
        <div className="z-100 flex gap-1">
          <div className="z-100 flex md:gap-2">
            <select className="w-20 h-10 p-2 border rounded md:w-40">
              <option>Select Species</option>
              <option>Human</option>
              <option>Plants</option>
              <option>Microbes</option>
            </select>
            <select className="w-20 h-10 p-2 border rounded md:w-40">
              <option>Select Year</option>
              <option>2025</option>
              <option>2024</option>
            </select>
            <select className="w-20 h-10 p-2 border rounded md:w-40">
              <option>Select Mission</option>
              <option>Mission A</option>
              <option>Mission B</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Greeting */}
      <div
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="w-[80%] h-65 mx-auto glassmorphism-card md:w-[40%] rounded-lg shadow p-6 flex items-center gap-4 relative"
      >
        <div className="absolute top-5 left-5 md:-top-25 md:-left-25">
          <img
            src="./user.svg"
            alt="User Avatar"
            className="w-70 h-70 drop-shadow-2xl transform hover:scale-110 transition duration-300 md:w-130 md:h-130"
          />
        </div>

        <div className="ml-auto w-[45%]">
          <h2 className="text-4xl font-bold text-green-900">
            Hello, {username}
          </h2>
          <p className="text-green-800 font-normal text-md mt-2">
            Welcome back! Here’s your personalized dashboard.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            icon: <BarChart3 size={40} />,
            count: kpi.total_publications,
            label: "Researchs",
          },
          {
            icon: <Leaf size={40} />,
            count: kpi.species_experimented,
            label: "Species Covered",
          },
          {
            icon: <Rocket size={40} />,
            count: kpi.missions_covered,
            label: "Missions",
          },
          { icon: <Search size={40} />, count: 0, label: "Knowledge Gaps" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="glassmorphism-card h-60 rounded p-6 shadow flex flex-col justify-center items-center text-center"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            <div className="text-green-900 mb-2">{item.icon}</div>
            <p className="text-4xl font-extrabold text-green-900">
              <Counter end={item.count} />
            </p>
            <p className="text-lg text-green-800">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Research Over Time */}
        <div className="glassmorphism-card border rounded-lg p-4 group">
          <h3
            className="font-semibold text-green-900 text-3xl mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Research Over Time
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={publicationsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#2f4f2f" dot />
            </LineChart>
          </ResponsiveContainer>
          {/* Description for desktop & mobile */}
          <div className="hidden sm:block">
            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-3 glassmorphism-card border rounded-lg p-3">
              <p>This graph illustrates research trend over time.</p>
            </div>
          </div>
          <div className="block sm:hidden">
            <button
              onClick={() => setShowResearchDesc(!showResearchDesc)}
              className="mt-3 text-green-700 text-sm underline"
            >
              {showResearchDesc ? "Hide Details" : "Show Details"}
            </button>
            {showResearchDesc && (
              <div className="mt-3 bg-white border rounded-lg p-3 text-sm">
                <p>This graph illustrates research trend over time.</p>
              </div>
            )}
          </div>
        </div>

        {/* Species Distribution */}
        <div className="glassmorphism-card border rounded-lg p-4 group">
          <h3
            className="font-semibold text-green-900 text-3xl mb-2"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Species Distribution
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={speciesData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {speciesData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-3 mt-2 text-xs sm:text-sm">
            {speciesData.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[idx] }}
                ></div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="hidden sm:block">
            <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-3 glassmorphism-card border rounded-lg p-3">
              <p>
                This chart shows the proportional distribution of different
                species.
              </p>
            </div>
          </div>
          <div className="block sm:hidden">
            <button
              onClick={() => setShowSpeciesDesc(!showSpeciesDesc)}
              className="mt-3 text-green-700 text-sm underline"
            >
              {showSpeciesDesc ? "Hide Details" : "Show Details"}
            </button>
            {showSpeciesDesc && (
              <div className="mt-3 bg-white border rounded-lg p-3 text-sm">
                <p>
                  This chart shows the proportional distribution of different
                  species.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Radar Chart */}
      <div className="glassmorphism-card border rounded-lg p-4">
        <h3
          className="font-semibold text-green-900 text-3xl mb-2"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Knowledge vs Gaps
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Knowledge"
              dataKey="Knowledge"
              stroke="#2f4f2f"
              fill="#2f4f2f"
              fillOpacity={0.6}
            />
            <Radar
              name="Gaps"
              dataKey="Gaps"
              stroke="#8bc34a"
              fill="#8bc34a"
              fillOpacity={0.4}
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
