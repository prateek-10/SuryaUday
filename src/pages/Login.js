import React, { useState } from "react";
import email_icon from "../assets/images/Assets/email.png";
import password_icon from "../assets/images/Assets/password.png";
import "../style/Register.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage(""); // Clear error message when user starts typing
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://suryauday-backend.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Only store the token and navigate if the login was successful
        localStorage.setItem("token", result.token);
        console.log(result);
        navigate("/Dashboard"); // Example navigation to dashboard
      } else {
        // Display error message from the server
        setErrorMessage(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form className="inputs" onSubmit={(e) => e.preventDefault()}>
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
        {errorMessage && (
          <div
            style={{
              color: "red",
              position: "relative",
              marginTop: "-15px",
              fontSize: "15px",
              paddingLeft: "40px",
            }}
          >
            {errorMessage}
          </div>
        )}
      </form>
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
