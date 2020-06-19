import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.svg";
import './styles.scss';

const TopMenu = () => {
  return (
    <div class="menu">
      <div className="menu-container">
        <div class="menu-logo">
          <Link to="/dashboard">
            <img class="menu-logo-image" src={logo} alt="Celebration Logo" />
          </Link>
        </div>
        <nav class="menu-nav">
          <Link class="menu-link" to="/about">Sobre</Link>
          <Link class="menu-link" to="/coming-soon" target="_blank">Em Breve</Link>
        </nav>
        <div class="menu-user">
          <Link class="menu-user-button button" to="/register">Cadastrar</Link>
        </div>
      </div>
    </div>
  )
}

export default TopMenu;