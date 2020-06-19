import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import './styles.scss';

const TopMenu = () => {
  return (
    <menu class="menu">
      <div class="menu container">
        <Link class="menu-item" to="/">
          <div class="menu-logo">
            <img class="menu-logo-image" src={logo} alt="Celebration Logo" />
            <span class="menu-logo-label">Celebration</span>
          </div>
        </Link>
        <nav class="menu-nav">
          <Link class="menu-link" to="/">Home</Link>
          <Link class="menu-link" to="/">Criar Evento</Link>
          <Link class="menu-link" to="/">Ver Evento</Link>
          <Link class="menu-link" to="/">Lista de Convidados</Link>
        </nav>
        <div class="menu-user">
          <Link class="menu-link" to="/">Cadastrar</Link>
          <Link to="/" class="button">Entrar</Link>
        </div>
      </div>
    </menu>
  )
}

export default TopMenu;