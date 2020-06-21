import React from 'react';
import './styles.scss';

const HomeCard = (props) => {
  const { cardImage, cardTitle, cardText } = props;
  return (
    <div class="card">
      <img src={cardImage} alt={cardTitle} />
      <div class="card-text">
        <span>{cardTitle}</span>
        <p>{cardText}</p>
      </div>
    </div>
  )
}

export default HomeCard;