import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignupFormProps {
  onSwitch: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const api = "http://127.0.0.1:5000/api/auth/register";
    try {
      setIsLoading(true);
      const res = await fetch(api, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      });

      if (!res.ok) {
        console.log("Error in Response", res);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      const token = data.token;
      console.log(token);
      localStorage.setItem("token", token);
      navigate("/dashboard");
    } catch (err) {
      console.log("Error Found", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4 mt-6" onSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 bg-white focus:outline-none focus:border-[#81c525] placeholder-gray-400"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 bg-white focus:outline-none focus:border-[#81c525] placeholder-gray-400"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full px-4 py-2 bg-white focus:outline-none focus:border-[#81c525] placeholder-gray-400"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className={`w-full bg-[#5e8b22] hover:bg-[#3b5220] text-white font-medium py-2 rounded-md mt-4 ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Signing Up..." : "Sign Up"}
      </button>

      <p className="mt-4 text-sm text-center text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-[#5e8b22] font-medium"
        >
          Login
        </button>
      </p>
    </form>
  );
};

export default SignupForm;
