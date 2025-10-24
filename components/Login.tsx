
import React, { useState } from 'react';
import { AppleIcon, GoogleIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon } from './Icons';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here.
    alert(`Logging in with Email: ${email}`);
  };

  return (
    <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
        <p className="text-gray-500 mt-2">Please sign in to continue</p>
      </div>

      <form onSubmit={handleLogin}>
        <div className="space-y-6">
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <MailIcon />
            </span>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
            />
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <LockIcon />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOffIcon /> : <EyeIcon />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 text-sm">
          <label className="flex items-center text-gray-600">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            <span className="ml-2">Remember me</span>
          </label>
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full mt-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
        >
          Sign In
        </button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      <div className="space-y-4">
        <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
          <GoogleIcon />
          <span className="ml-3 font-medium text-gray-700">Sign in with Google</span>
        </button>
        <button className="w-full flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
          <AppleIcon />
          <span className="ml-3 font-medium text-gray-700">Sign in with Apple</span>
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-10">
        Don't have an account?{' '}
        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default Login;
