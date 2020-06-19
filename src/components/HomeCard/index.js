import React from 'react';
import './styles.scss';

const HomeCard = (props) => {
  const { cardImage, cardTitle, cardText } = props;
  return (
    <div class="main-bottom-item">
      <img src={cardImage} alt="Planeje seu Evento" />
      <div class="main-bottom-item-text">
        <span>{cardTitle}</span>
        <p>{cardText}</p>
      </div>
    </div>
  )
}

export default HomeCard;