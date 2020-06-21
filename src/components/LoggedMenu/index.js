import React from 'react';
import { Link } from 'react-router-dom';
import logoInverse from "../../assets/logo-inverse.svg";
import './styles.scss';

const InverseMenu = () => {
  return (
    <div className="inverse-menu">
      <div className="inverse-menu-container">
        <div className="inverse-menu-logo">
          <Link to="/">
            <img className="inverse-menu-logo-image" src={logoInverse} alt="Celebration Logo" />
          </Link>
        </div>
        <nav className="inverse-menu-nav">
          <Link className="inverse-menu-link" to="/">Criar Evento</Link>
          <Link className="inverse-menu-link" to="/history">Histórico</Link>
          <Link className="inverse-menu-link" to="/settings">Configurações</Link>
        </nav>
        <div className="inverse-menu-user">
          <Link className="inverse-menu-link" to="/">
            Olá, 
            <strong>Fulano</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InverseMenu;