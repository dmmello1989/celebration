import React, { Fragment } from 'react';
import LoggedMenu from '../../components/LoggedMenu';
import './styles.scss';


const Dashboard = () => {
  return (
    <Fragment>

    <LoggedMenu />

    <div class="container">

      <div className="section">
        <div className="section-header">
          <h2 className="section-header-title">Anfitrião</h2>
          <p className="section-header-description">Aqui ficam as festas criadas por você.</p>
        </div>
        <div className="section-content">
          <div>Сфкв</div>
          <div>Сфкв</div>
          <div>Сфкв</div>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <h2 className="section-header-title">Convidado</h2>
          <p className="section-header-description">Aqui ficam as festas nas quais você está convidado.</p>
        </div>
        <div className="section-content">
          <div>Сфкв</div>
          <div>Сфкв</div>
          <div>Сфкв</div>
        </div>
      </div>


    </div>
  </Fragment>
  )
}

export default Dashboard;