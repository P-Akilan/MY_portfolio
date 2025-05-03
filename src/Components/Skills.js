import React, { useState } from "react";
import { Button, Card } from "antd";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Your provided skills data
  const skillsData = [
    { skillText: "HTML", Known: "80%", TECH: "FRONTEND" },
    { skillText: "CSS", Known: "70%", TECH: "FRONTEND" },
    { skillText: "JavaScript", Known: "60%", TECH: "FRONTEND" },
    { skillText: "JQuery", Known: "50%", TECH: "FRONTEND" },
    { skillText: "Bootstrap", Known: "80%", TECH: "FRONTEND" },
    { skillText: "React JS", Known: "65%", TECH: "FRONTEND" },
    { skillText: "ASP.NET Web API", Known: "75%", TECH: "BACKEND" },
    { skillText: "C#", Known: "60%", TECH: "BACKEND" },
    { skillText: "MSSQL", Known: "75%", TECH: "DB" },
    { skillText: "SSMS", Known: "70%", TECH: "IDE TOOLS" },
    { skillText: "VS 2010", Known: "60%", TECH: "IDE TOOLS" },
    { skillText: "POWER BUILDER", Known: "70%", TECH: "IDE TOOLS & DEVELOPMENT" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skillsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skillsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>

      {/* Wrapper for rotating circle */}
      <div className="circle-wrapper">
        <div
          className="circle"
          style={{
            transform: `rotateY(${(-360 / skillsData.length) * currentIndex}deg)`, // Rotate the circle dynamically based on the number of items
          }}
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className={`skill-card ${index === currentIndex ? "focused" : ""}`}
              style={{
                transform: `rotateY(${(360 / skillsData.length) * index}deg) translateZ(250px)`, // Further reduced translateZ for more gap
              }}
            >
              <Card
                title={skill.skillText}
                bordered={true}
                style={{
                  width: 130, // Further reduced width for each card
                  height: 180, // Further reduced height for each card
                  textAlign: "center",
                  backgroundColor: index === currentIndex ? "#f56a00" : "#fff",
                  boxShadow: index === currentIndex ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "none",
                }}
              >
                <p>{skill.Known}</p>
                <p>{skill.TECH}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="buttons">
        <Button onClick={handlePrev} type="primary">
          Previous
        </Button>
        <Button onClick={handleNext} type="primary">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Skills;
