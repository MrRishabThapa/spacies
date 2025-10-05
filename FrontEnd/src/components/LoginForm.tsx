import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
  onSwitch: () => void;
}


const LoginForm: React.FC<LoginFormProps> = ({ onSwitch }) => {
    const [isLoading, setisLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
  const handleLogin = async (e) => {
    e.preventDefault()
    const api = 'http://127.0.0.1:5000/api/auth/login'
    try {
      setisLoading(true);
      const res = await fetch(api, {
        headers: {"Content-Type": "application/json"},
        method:"POST",
         body: JSON.stringify({
         email: email,
         password: password
        })
      });
      
      if (!res.ok) {
        console.log('Error in Response', res)
      }

      const data = await res.json();
      console.log(data)
      const token = data.token;
      console.log(token)
      localStorage.setItem('token', token);
      navigate('/dashboard')
      setisLoading(false)

    }
    catch (e) {
      setisLoading(false)
      console.log('Error Found', e)
      
    }
    finally {
      setisLoading(false)
    }
  }

  return (
    <form className="space-y-4 mt-6">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 bg-white focus:outline-none focus:border-[#81c525] placeholder-gray-400 font-poppins"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="w-full px-4 py-2 bg-white focus:outline-none focus:border-[#81c525]  placeholder-gray-400 font-poppins"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-[#5e8b22] hover:bg-[#3b5220] text-white font-medium py-2 rounded-md mt-4"
        onClick={(e) => handleLogin(e)}
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
