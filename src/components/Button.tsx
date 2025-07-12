import React from "react";
import { useState } from 'react';

export interface ButtonProps {
  label: string;
  
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick}) => {
  const [isHovered, setIsHovered] = useState(false);
  const buttonStyle = {
    transition: 'border 0.3s ease',
        borderRadius:"10px",
        background: "#000000",
        color: "#ffffff",
        padding: "10px 20px",
        outline: 'none',
        
        border: isHovered ? "1px solid #00ffdd" : "1px solid rgb(136, 136, 136)",
        
        cursor: "pointer",
  };
  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >

      {label}
    </button>
  );
};

export default Button;
