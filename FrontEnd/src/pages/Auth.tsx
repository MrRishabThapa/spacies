import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupFrom";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden md:flex w-2/5 bg-[#b7d9a3]">
        <img
          src="../public/auth.jpg"
          alt="Auth Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-3/5 px-12 py-8">
        <h1 className="text-6xl font-bold text-[#3b5220] mb-6">
          {isLogin ? "Welcome Back" : "Get Started"}
        </h1>

        <div className="flex gap-10 mb-10 text-2xl">
          <button
            className={`pb-2 border-b-4 transition ${
              isLogin
                ? "border-[#3b5220] text-[#3b5220] font-bold"
                : "border-transparent text-gray-400"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`pb-2 border-b-4 transition ${
              !isLogin
                ? "border-[#3b5220] text-[#3b5220] font-bold"
                : "border-transparent text-gray-400"
            }`}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>

        <div className="w-full max-w-lg">
          {isLogin ? (
            <LoginForm onSwitch={() => setIsLogin(false)} />
          ) : (
            <SignupForm onSwitch={() => setIsLogin(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
