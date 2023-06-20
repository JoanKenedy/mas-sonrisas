import React from "react";
import "../styles/team.css";
import Team1 from "../assets/equipo-1.jpg";
import Team2 from "../assets/equipo-2.jpg";
import Team3 from "../assets/equipo-3.jpg";
import Team4 from "../assets/equipo-4.jpg";
import Team5 from "../assets/equipo-5.jpg";
import Team6 from "../assets/equipo-6.jpg";
import Team7 from "../assets/equipo-7.jpg";
import Team8 from "../assets/equipo-8.jpg";
import Team9 from "../assets/equipo-9.jpg";

function Team() {
  const team = [
    {
      id: 1,
      imgTeam: Team1,
    },
    {
      id: 2,
      imgTeam: Team2,
    },
    {
      id: 3,
      imgTeam: Team3,
    },
    {
      id: 4,
      imgTeam: Team4,
    },
    {
      id: 5,
      imgTeam: Team5,
    },
    {
      id: 6,
      imgTeam: Team6,
    },
    {
      id: 7,
      imgTeam: Team7,
    },
    {
      id: 8,
      imgTeam: Team8,
    },
    {
      id: 9,
      imgTeam: Team9,
    },
  ];
  return (
    <div className="team">
      <h2>El mejor equipo</h2>
      <div className="container-team">
        {team.map((item, index) => {
          return (
            <div className="item-team" key={index}>
              <img src={item.imgTeam} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Team;
