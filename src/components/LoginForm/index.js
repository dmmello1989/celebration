import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const LoginForm = () => {
  return (
    <div class="login-form">
      <span class="login-form-title">Faça seu login</span>
      <input type="email" name="email" id="email" placeholder="E-mail" />
      <input type="text" placeholder="CPF" />
      <button class="button">Login</button>
      <span class="login-form-register">Não tem uma conta? <Link to="#">Cadastre-se aqui</Link>.</span>
    </div>
  )
}

export default LoginForm;