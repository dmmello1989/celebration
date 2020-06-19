import React from 'react';
import { Link } from 'react-router-dom';
import logoInverse from "../../assets/logo-inverse.svg";
import './styles.scss';

const InverseMenu = () => {
  return (
    <div class="inverse-menu">
      <div className="inverse-menu-container">
        <div class="inverse-menu-logo">
          <Link to="/">
            <img class="inverse-menu-logo-image" src={logoInverse} alt="Celebration Logo" />
          </Link>
        </div>
        <nav class="inverse-menu-nav">
          <Link class="inverse-menu-link" to="/">Criar Evento</Link>
          <Link class="inverse-menu-link" to="/history">Histórico</Link>
          <Link class="inverse-menu-link" to="/settings">Configurações</Link>
        </nav>
        <div class="inverse-menu-user">
          <Link class="inverse-menu-link" to="/">
            Olá, 
            <strong>Fulano</strong>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default InverseMenu;