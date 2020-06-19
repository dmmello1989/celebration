import React from 'react';
import { Link } from 'react-router-dom';
import logoInverse from "../../assets/logo-inverse.svg";
import './styles.scss';

const InverseMenu = () => {
  return (
    <menu class="inverse-menu">
      <div class="inverse-menu container">
        <Link class="inverse-menu-item" to="/">
          <div class="inverse-menu-logo">
            <img class="inverse-menu-logo-image" src={logoInverse} alt="Celebration Logo" />
            <span class="inverse-menu-logo-label">Celebration</span>
          </div>
        </Link>
        <nav class="inverse-menu-nav">
          <Link class="inverse-menu-link" to="/">Criar Evento</Link>
          <Link class="inverse-menu-link" to="/history">Histórico</Link>
          <Link class="inverse-menu-link" to="/settings">Configurações</Link>
        </nav>
        <div class="inverse-menu-user">
          <Link class="inverse-menu-link" to="/">Olá, Fulano</Link>
        </div>
      </div>
    </menu>
  )
}

export default InverseMenu;