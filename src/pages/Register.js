import React, { useState } from "react";
import user_icon from "../assets/images/Assets/person.png";
import "../style/Register.css";
import { useNavigate } from "react-router-dom";
import email_icon from "../assets/images/Assets/email.png";
import password_icon from "../assets/images/Assets/password.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
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
    setErrorMessages((prevErrorMessages) => ({
      ...prevErrorMessages,
      [name]: "",
    }));
  };

  const handleSignup = async () => {
    const newErrorMessages = {};

    if (!formData.name) {
      newErrorMessages.name = "Please fill in this field.";
    }

    if (!formData.email) {
      newErrorMessages.email = "Please fill in this field.";
    }

    if (!formData.password) {
      newErrorMessages.password = "Please fill in this field.";
    }

    if (Object.keys(newErrorMessages).length > 0) {
      setErrorMessages(newErrorMessages);
      return;
    }

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
      if (response.ok) {
        console.log(result);
        navigate("/login"); // Navigate to login page after successful signup
      } else {
        // Handle errors returned by the server
        toast.error(result.message);
        setErrorMessages((prevErrorMessages) => ({
          ...prevErrorMessages,
          email: result.message,
        }));
      }
    } catch (error) {
      console.error(error.message);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
        {errorMessages.name && (
          <div
            style={{
              color: "red",
              position: "relative",
              marginTop: "-15px",
              fontSize: "15px",
              paddingLeft: "40px",
            }}
          >
            {errorMessages.name}
          </div>
        )}
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
        {errorMessages.email && (
          <div
            style={{
              color: "red",
              position: "relative",
              marginTop: "-15px",
              fontSize: "15px",
              paddingLeft: "40px",
            }}
          >
            {errorMessages.email}
          </div>
        )}
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
        {errorMessages.password && (
          <div
            style={{
              color: "red",
              position: "relative",
              marginTop: "-15px",
              fontSize: "15px",
              paddingLeft: "40px",
              marginBottom: "-15px",
            }}
          >
            {errorMessages.password}
          </div>
        )}
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
