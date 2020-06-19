import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import TopMenu from '../../components/TopMenu';
import LoginForm from '../../components/LoginForm';
import HomeCard from '../../components/HomeCard';

import './styles.scss';
import plan from "../../assets/plan.svg";
import guest from "../../assets/guest.svg";
import dinner from "../../assets/dinner.svg";

const Home = () => {
  return (
    <Fragment>
    
    <TopMenu />

    <main>
      <div class="container">

        <div class="main-center">
          <div class="main-center-left">
            <h1>Organize os convidados e as comidas da sua festa.</h1>
            <h2>Confirme sua presença e registre sua contribuição.</h2>
          </div>
          
          <div class="main-center-divider"></div>
          
          <div class="main-center-right">
            <LoginForm />
          </div>
        </div>
        
        <div class="main-bottom">
          <HomeCard
            cardImage={plan}
            cardTitle="Planeje seu Evento"
            cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <HomeCard
            cardImage={guest}
            cardTitle="Controle de convidados"
            cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <HomeCard
            cardImage={dinner}
            cardTitle="Comida da festa"
            cardText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </div>

        <footer>

        </footer>

      </div>
    </main>
  </Fragment>
  )
}

export default Home;