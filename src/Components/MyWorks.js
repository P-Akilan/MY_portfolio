import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";

const data = [
  {
    title: "API Gene APP ",
    type: "Frontend and Backend",
    desc: "A dynamic API generation tool that leverages SQL stored procedures to create customizable endpoints. Allows developers to instantly expose database logic as RESTful APIs without manual coding. Includes role-based access control, endpoint testing, and schema introspection.",
    Tech: "React, Asp.net Web API, SQL Server",
    status: "In Progress"
  },
  // {
  //   title: "Portfolio Website",
  //   type: "UI/UX",
  //   desc: "A personal portfolio site showcasing projects, skills, and contact information. Features smooth animated transitions, interactive UI elements, and fully responsive layout for all devices. Built with a clean, modern design aesthetic and optimized performance.",
  //   Tech: "React, CSS",
  //   status: "Completed"
  // },
  {
    title: "Web Inventory System",
    type: "Fullstack",
    desc: "A browser-based inventory management system for tracking product stock levels, supplier records, and order history. Features real-time stock alerts, role-based dashboards, and dynamic report generation. Seamless integration with existing databases and support for RESTful APIs.",
    Tech: "React, SQL Server, Asp.net Web API",
    status: "In Progress"
  },
  {
    title: "Windows Inventory System",
    type: "Fullstack",
    desc: "A desktop inventory management application built for Windows environments using PowerBuilder. Supports barcode scanning, real-time stock management, and historical inventory tracking. Designed for high-speed transaction processing and compatibility with legacy systems.",
    Tech: "PowerBuilder, SQL Server",
    status: "In Progress"
  },
    {
    title: "Bike Service Application",
    type: "Fullstack",
    desc: "A desktop inventory management application built for Windows environments using PowerBuilder. Supports barcode scanning, real-time stock management, and historical inventory tracking. Designed for high-speed transaction processing and compatibility with legacy systems.",
    Tech: "React JS, SQL server, .NET Core Web API with Micro Service, JWT Auth",
    status: "In Progress"
  },
  
];

const MyWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 320;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="myworks-section">
      <div className="works-scroll-wrapper">
        <div
          className="works-scroll"
          style={{
            transform: `translateX(calc(50% - ${(currentIndex + 0.5) * cardWidth}px))`,
          }}
        >
          {data.map((item, idx) => (
            <article
              key={idx}
              className={`work_card ${idx === currentIndex ? "focused" : ""}`}
            >
              <div className="card-img">
                <div className="card-imgs pv delete"></div>
              </div>
              <div className="project-info">
                <div className="flex ">
                  <Row>
                  <div className="project-title">{item.title}</div>
                  <div className="tag">{item.type}</div>
                  </Row>
                </div>
                <div>
                  <div className="lighter">{item.desc}</div>
                </div>
                <div className="project-meta">
                  <p><strong>Status:</strong> {item.status}</p>
                  <p><strong>Tech:</strong> {item.Tech}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="scroll-buttons">
        <button onClick={handlePrev}>◀</button>
        <button onClick={handleNext}>▶</button>
      </div>
    </div>
  );
};

export default MyWorks;
