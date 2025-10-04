import React from "react";

interface LoginFormProps {
  onSwitch: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitch }) => {
  return (
    <form className="space-y-4 mt-6">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 bg-white focus:outline-none focus:border-[#81c525] placeholder-gray-400 font-poppins"
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full px-4 py-2 bg-white focus:outline-none focus:border-[#81c525]  placeholder-gray-400 font-poppins"
      />
      <button
        type="submit"
        className="w-full bg-[#5e8b22] hover:bg-[#3b5220] text-white font-medium py-2 rounded-md mt-4"
      >
        Login
      </button>

      <p className="mt-4 text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <button onClick={onSwitch} className="text-[#81c525] font-medium">
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
