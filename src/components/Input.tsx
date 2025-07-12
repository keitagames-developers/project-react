import React from "react";
import { useState } from 'react';

export interface InputProps {
  p:string;
  
  
}

const Input: React.FC<InputProps> = ({p}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputStyle = {
    transition: 'border 0.3s ease',
        borderRadius:"5px",
        background: "#000000",
        color: "#ffffff",
        padding: "10px 20px",
        border: "1px solid rgb(136, 136, 136)",
        outline: 'none',
        borderBottom: isFocused ? "1px solid #00ffdd" : "1px solid rgb(136, 136, 136)",
        
        cursor: "pointer",
  };
  return (
    <input
      style={inputStyle}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={p}
    >

      
    </input>
  );
};

export default Input;
