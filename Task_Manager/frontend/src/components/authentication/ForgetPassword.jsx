import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (!formData.email || !formData.password) {
      alert("Please fill the data");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const res = await axios.post(
        "http://localhost:6969/user/forget",
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        formData
      );
      console.log(res);
      setFormData(res.data);
      alert("Password Reset successfully...");
      navigate("/");
    } catch (error) {
      console.log("Error submitting data:", error);
      alert(error.response.data.message);
    }

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Forget Password</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            name="password"
            placeholder="******"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>

      <NavLink to="/">
        <button className="w-full bg-black text-white py-2 mt-6 rounded-lg transition duration-200">
          Back
        </button>
      </NavLink>

      <button
        // type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 mt-6 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Submit
      </button>
    </div>
  );
};

export default ForgetPassword;
