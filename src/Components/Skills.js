import React from "react";

const Skills = () => {
  const skillsData = [
    { skillText: "HTML", Known: "80%", TECH: "FRONTEND" },
    { skillText: "CSS", Known: "70%", TECH: "FRONTEND" },
    { skillText: "JavaScript", Known: "60%", TECH: "FRONTEND" },
    { skillText: "JQuery", Known: "50%", TECH: "FRONTEND" },
    { skillText: "Bootstrap", Known: "80%", TECH: "FRONTEND" },
    { skillText: "React JS", Known: "65%", TECH: "FRONTEND" },
    { skillText: "ASP.NET Web API", Known: "75%", TECH: "BACKEND" },
    { skillText: "C#", Known: "60%", TECH: "BACKEND" },
    { skillText: "MSSQL", Known: "75%", TECH: "DATABASE" },
    { skillText: "SSMS", Known: "70%", TECH: "IDE TOOLS" },
    { skillText: "VS 2010", Known: "60%", TECH: "IDE TOOLS" },
    { skillText: "POWER BUILDER", Known: "70%", TECH: "IDE TOOLS & DEVELOPMENT" },
  ];

  return (
    <div className="mt-3">
      <div className="d-flex align-content-around flex-wrap">
        {skillsData.map((skill, index) => (
         <div class="skill_container" >
         <div class="skill_card">
           <div class="face back">
             <div class="skill_content">
               <span class="stars"></span>
               <b class="desc">{skill.Known}</b>
               <p class="desc">
                 {skill.TECH}
               </p>
             </div>
           </div>
           <div class="face front">
             <b>{skill.skillText}</b>
           </div>
         </div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
