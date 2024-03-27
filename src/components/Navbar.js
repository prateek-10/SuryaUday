import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo1 from "../assets/images/Logo1.png";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  const resetActiveSection = () => {
    setActiveSection("home"); // Reset to default section
  };

  const navbarStyle = {
    position: "sticky",
    top: "0",
    zIndex: "130",
    background: "rgba(0, 0, 0, 0.7)", // Semi-transparent background
    backdropFilter: "blur(7px)",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    transition: "transform 0.3s", // Add transition for zoom effect
  };

  const activeLinkStyle = {
    ...linkStyle,
    // borderBottom: "3px solid #FF2625",
    transform: "scale(1.1)", // Zoom effect on active link
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "90px", xs: "40px" },
        mt: { sm: "0px", xs: "6px", ...navbarStyle, padding: "10px 0px" },
      }}
    >
      <Link to="/" onClick={resetActiveSection}>
        {" "}
        {/* Reset active section when logo is clicked */}
        <img
          src={Logo1}
          alt="Logo"
          style={{
            width: "52px",
            height: "52px",
            margin: "0 0px",
            display: "block",
            alignItems: "center",
          }}
        />
      </Link>
      <Stack
        direction="row"
        gap="30px"
        fontSize="20px"
        alignItems="center"
        marginLeft="410px"
        style={{ fontWeight: "30px", fontFamily: "Inter" }}
      >
        <Link
          to="/"
          style={activeSection === "home" ? activeLinkStyle : linkStyle}
          onMouseEnter={() => setActiveSection("home")}
          onMouseLeave={resetActiveSection}
        >
          Home
        </Link>
        <a
          href="#Services"
          style={activeSection === "services" ? activeLinkStyle : linkStyle}
          onMouseEnter={() => setActiveSection("services")}
          onMouseLeave={resetActiveSection}
          onClick={() => handleScrollToSection("Services")}
        >
          Services
          <span style={{ position: "relative", top: "2px" }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVR4nO2WQQ6CMBREK8f0PsaVLnThCu9IZP8MKtFgqAJt/yeZl7Ahv5k3JQVCEEIIIYQQD4AdcANOQBWcAFTAGWiBfWyw4U3toQRP+c6lp4kNHz8GzUvwLd9xiC3YAJfBgqtFCea6eCjBUgfLEqTKtihB6sySJciVVaIEuTNyBlDqKecIovQ5Sxlo9qYjQbD5t4YFAubyS0TcyM8Rcic/Rcyt/D+C7uV//LvXI/d8yfeM7LbvnZ9Qwr98pMR65AdnYvu61iUvhBBCCCFCEe5/E+9tgJwKNwAAAABJRU5ErkJggg=="
              alt=""
              style={{ height: "15px", width: "15px", marginLeft: "7px" }}
            />
          </span>
        </a>
        <a
          href="#Membership"
          style={activeSection === "membership" ? activeLinkStyle : linkStyle}
          onMouseEnter={() => setActiveSection("membership")}
          onMouseLeave={resetActiveSection}
        >
          Subscribe
        </a>
        <a
          href="#Contact"
          style={activeSection === "contact" ? activeLinkStyle : linkStyle}
          onMouseEnter={() => setActiveSection("contact")}
          onMouseLeave={resetActiveSection}
        >
          Contact us
        </a>
      </Stack>
      <Stack
        direction="row"
        gap="40px"
        fontSize="20px"
        alignItems="center"
        justifyContent="flex-end"
      >
        {/* <a href="#Login" style={linkStyle}>
          Sign In
        </a> */}
        <Link to="/Register" style={linkStyle}>
          <button
            style={{
              backgroundColor: "#17FF8A",
              color: "black",
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "bolder",
              padding: "12px 20px",
              cursor: "pointer",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "row",
              gap: "4px",
              border: "none",
            }}
          >
            Register
            {/* <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABTElEQVR4nN2UO07DQBBATVBoSMEhqDFcAtERhfC5BQWfmpJfBxIXQFwJhwSuAAQKPsIPjTSWrPWsdxdR5UkjrXbn55nxZNlMAywAu8AdUADvKoXe7YjOX51vAY+EmQCDFMfzwKXhqARGKnJ2uQA6MQEs5wWwUtPJNZDLeUxZXH7EoaGbe76k39bQiZV95k/I+oons/E6LRajxADCtqUsY2dRekq06imRcJuSDfqWO84f8NMsKzClnTIwpnWmVoA3/o/X1BKlch/b5GfgRidsGVhUkfOevr3ENlkWV8UHcAT0GopNux5wrDYVw9CPdhVy7AJcq+0Y6PqUBqr0BaybSrbdBvCttpshZdmKqMFJ24YE5oB94FNtTmOy6chWrE8EcACsAUsqcj7Ut4qzqHVdC9TXeoYYB8vSEqQri0vGTrOVn1FEznI39DZ0ZvgF/aEwsncQYdMAAAAASUVORK5CYII="
              alt=""
              style={{ height: "25px", width: "25px", marginTop: "3px" }}
            ></img> */}
          </button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
