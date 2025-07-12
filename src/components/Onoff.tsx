
import React, { useState, CSSProperties } from 'react';
export interface OnoffProps {
  
  
  
}

const Onoff: React.FC<OnoffProps> = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prev => !prev);
  };
   const switchStyle: CSSProperties = {
    width: '30px',
    height: '15px',
    borderRadius: '20px',
    backgroundColor: isOn ? '#00ffdd' : 'rgb(0, 0, 0)',
    border:"1px solid rgb(136, 136, 136)",
    position: 'relative',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const leverStyle: CSSProperties = {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    backgroundColor: 'rgb(255, 255, 255)',
    
    position: 'absolute',
    top: '0px',
    left: isOn ? '0px' : '15px',
    transition: 'left 0.3s',
  };
  return (
    
    <div style={switchStyle} onClick={toggleSwitch}>
      <div style={leverStyle}></div>
    </div>
  
  );
};

export default Onoff;
