import React from 'react';
import './Card.css';
export interface OnoffProps {
  name:string;
  title:string;
  description:string;
  avatarUrl:string;
  bannerUrl:string;
  
  
}
const Card: React.FC<OnoffProps> = ( {name, title, description, avatarUrl, bannerUrl} ) => {
  return (
    <div className="profile-card">
      <div className="banner">
        <img src={bannerUrl} alt="バナー画像" className="banner-img" />
      </div>
      <div className="avatar-container">
        <img className="avatar" src={avatarUrl} alt={`${name}のアバター`} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
