import React, { useState } from "react";
import "../styles/Card.css";

const Card = ({ imageSrc, title, content }) => {
  const [isHovered, setIsHovered] = useState(false);
  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
  };

  return (
    <div
      className="container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`image-box ${isHovered ? "hovered" : ""}`}>
        <img src={imageSrc} alt={title} />
        <div className="title-overlay">{title}</div>
      </div>
      <div className={`text-box ${isHovered ? "hovered" : ""}`}>
        <div className="scroll-content">
          <h2>{title}</h2>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Card;
