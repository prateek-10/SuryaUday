import React from "react";
import "../style/Ticker.css";
import sponsor1 from "../assets/sponsors/sponsor1.png";
import sponsor2 from "../assets/sponsors/sponsor2.jpg";
import sponsor3 from "../assets/sponsors/sponsor3.png";
import sponsor4 from "../assets/sponsors/sponsor4.png";
import sponsor5 from "../assets/sponsors/sponsor5.png";
import sponsor6 from "../assets/sponsors/sponsor6.png";
import sponsor7 from "../assets/sponsors/sponsor7.png";
import sponsor8 from "../assets/sponsors/Sponsor8.png";
import sponsor9 from "../assets/sponsors/sponsor9.png";
import sponsor10 from "../assets/sponsors/sponsor10.png";
import sponsor11 from "../assets/sponsors/sponsor11.png";
import sponsor12 from "../assets/sponsors/sponsor12.png";
import sponsor13 from "../assets/sponsors/sponsor13.png";
import sponsor14 from "../assets/sponsors/sponsor14.png";
import sponsor15 from "../assets/sponsors/sponsor15.png";

function Ticker() {
  const sponsors = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor6,
    sponsor7,
    sponsor8,
    sponsor9,
    sponsor10,
    sponsor11,
    sponsor12,
    sponsor13,
    sponsor14,
    sponsor15,
  ];

  // Duplicate the logos to ensure seamless looping
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <React.Fragment>
      <h1
        style={{
          fontWeight: "450",
          fontSize: "70px",
          color: "black",
          textShadow: "-3px 3px 3px rgba(0, 0, 0, 0.5)",
          animation: "glow 1s infinite alternate",
          fontFamily: "Protest Guerrilla",
        }}
      >
        OUR PARTNERS
      </h1>
      <div className="stock-ticker">
        <ul>
          {duplicatedSponsors.map((sponsor, index) => (
            <li key={index}>
              <img
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                style={{ height: "70px", width: "140px" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Ticker;
