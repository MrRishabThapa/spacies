import { useState } from "react";
import {
  Send,
  Database,
  Rocket,
  Search,
  Globe2,
  Bot,
  User,
} from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const recommendations = [
    { icon: <Search className="w-5 h-5" />, text: "Search NASA missions" },
    {
      icon: <Database className="w-5 h-5" />,
      text: "Filter dataset by launch year",
    },
    { icon: <Globe2 className="w-5 h-5" />, text: "Find planetary data" },
    {
      icon: <Rocket className="w-5 h-5" />,
      text: "Show recent space launches",
    },
  ];

  // Simulated bot response function
  const getBotResponse = (userInput: string): string => {
    const text = userInput.toLowerCase();
    if (text.includes("mission"))
      return "NASA currently has active missions like Artemis, Voyager, and Perseverance exploring space.";
    if (text.includes("planet"))
      return "Here’s some planetary data: Mars has two moons, Phobos and Deimos, while Jupiter has 79 known moons!";
    if (text.includes("launch"))
      return "The most recent NASA launch was part of the SpaceX Crew-9 mission in 2025.";
    if (text.includes("year"))
      return "Filtering dataset by launch year... Found data from 2020 to 2025 in the NASA database.";
    return "I’m Spacies 🤖 — your NASA data assistant! Try asking about missions, planets, or launches.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages: Message[] = [
      ...messages,
      { sender: "user", text: input },
      { sender: "bot", text: getBotResponse(input) },
    ];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="max-h-screen mt-30 w-full flex flex-col items-center bg-transparent text-gray-900">
      {/* --- Chat Section --- */}
      <main className="flex flex-col flex-1 w-full max-w-6xl px-4 py-10">
        {/* Logo & Welcome */}
        {messages.length === 0 && (
          <div className="text-center items-center mb-10">
            <div className="w-100 h-80 rounded-full mx-auto mb-4">
              <img
                src="/bot.svg"
                alt="Spacies Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-3xl w-full md:text-[40px] font-bold mb-2">
              Greetings, I’m
              <span className="text-[#4caf50]"> Spacies v1.0</span>
              <br />— your Space Biotech Intelligence Assistant
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Your intelligent assistant for exploring and filtering NASA data
              efficiently.Empowering discoveries at the intersection of
              biotechnology and space science
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {recommendations.map((rec, i) => (
                <button
                  key={i}
                  onClick={() => setInput(rec.text)}
                  className="flex flex-col items-center justify-center bg-white p-5 rounded-2xl shadow-sm hover:shadow-md border border-gray-200 transition hover:-translate-y-1"
                >
                  <div className="p-3 rounded-full bg-blue-50 text-green-600 mb-2">
                    {rec.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {rec.text}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div
          className={`relative overflow-y-auto mb-6 px-2 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 transition-all duration-700 ease-in-out ${
            messages.length > 0 ? "max-h-[90vh]" : "max-h-[50vh]"
          }`}
        >
          {/* Watermark logo (centered background) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <img
              src="/spacies.svg"
              alt="Spacies Watermark"
              className="w-60 h-60 object-contain select-none"
            />
          </div>

          {messages.map((msg, index) => (
            <div
              key={index}
              className={`relative flex items-start gap-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                  <Bot className="w-5 h-5" />
                </div>
              )}

              <div
                className={`relative p-3 rounded-2xl max-w-[70%] text-sm md:text-base ${
                  msg.sender === "user"
                    ? "bg-green-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === "user" && (
                <div className="p-2 bg-green-600 text-white rounded-full">
                  <User className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="w-full">
          <div className="flex items-center border border-gray-300 rounded-2xl shadow-sm bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-green-500 transition">
            <input
              type="text"
              placeholder="Ask Spacies about NASA missions..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 outline-none text-gray-700 bg-transparent text-base"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Spacies may generate simulated NASA database results.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
