import React, { useState } from "react";
import user_icon from "../assets/images/Assets/person.png";
import "../style/Register.css";
import { useNavigate } from "react-router-dom";
import email_icon from "../assets/images/Assets/email.png";
import password_icon from "../assets/images/Assets/password.png";
import Login from "./Login";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    try {
      const response = await fetch(
        "https://suryauday-backend.onrender.com/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      console.log(result);
      navigate("/login"); // Navigate to login page after successful signup
    } catch (error) {
      console.error(error.message);
    } finally {
      setFormData({
        email: "",
        name: "",
        password: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={(e) => e.preventDefault()}>
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="submit-container">
        <div className="submit" onClick={handleSignup}>
          Sign Up
        </div>
      </div>
      <div className="forgot-password">
        Already have an account?&nbsp;
        <span
          onClick={() => {
            navigate("/Login"); // Navigate to login page
          }}
        >
          Login
        </span>
      </div>
    </div>
  );
};

export default Register;
