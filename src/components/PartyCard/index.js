import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const PartyCard = () => {
  const [randomColor, setRandomColor] = useState('');

  useEffect(() => {
    const letters = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.round(Math.random() * 6)];
    }
    setRandomColor(color);
  }, []);

  return (
    <div className="party-card">
      <div className="party-card-color" style={{ backgroundColor: randomColor }} />
      <div className="party-card-text">
        <div className="party-card-text-header">
          <span className="party-card-text-header-title">Festa Punk</span>
          <span>de Robson Ramones</span>
        </div>
        <span>Local: <strong>PLATAFORMA ROCK BAR</strong></span>
        <span>Dia: <strong>04/20 - 19h</strong></span>
        <p className="party-card-text-description">Lorem ipsum dolor sit amet consectetur arehenderit, excepturi, hic iusto ipsa nesciunt laudantium dolor.</p>
        <Link to="/details">
          <button className="button full-width">Ver Detalhes</button>
        </Link>
      </div>
    </div>
  )
}

export default PartyCard;