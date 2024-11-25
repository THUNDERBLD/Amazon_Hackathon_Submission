import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Track error messages
  const navigate = useNavigate();

  const handleRegister = () => {
    // Basic validation logic
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError(""); // Clear error if validation passes
      console.log("Registration successful"); // Simulate API call
      navigate("/dashboard"); // Redirect to login after successful registration
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
      <div className="absolute top-2 left-2">
        <button className="border bg-blue-400 hover:bg-blue-700 px-5 py-1 rounded-lg text-white">
          <Link to="/">
            Back
          </Link>
        </button>
      </div>
        <h1 className="text-2xl font-semibold text-center text-gray-800">Register</h1>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full mt-1 px-3 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your username"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 px-3 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 px-3 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Enter your password"
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-1 px-3 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
            placeholder="Confirm your password"
          />
        </div>
        {error && (
          <p className="mt-4 text-sm text-red-600">{error}</p>
        )}
        <button
          onClick={handleRegister}
          className="w-full mt-6 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1"
        >
            Register
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;