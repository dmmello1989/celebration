import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const DetailsHeader = (props) => {
  return (
    <div className="details-header">
      <div className="details-header-container">
        <div className="details-header-left">
          <h2 className="details-header-left-title">
            Festa Legal
          </h2>
          <div className="details-header-left-info">
            <span>Anfitrião: <strong>Blues Velvet</strong></span>
            <span>Local: <strong>Rua do Centro, 322</strong></span>
          </div>
        </div>
        <div className="details-header-right">
          <div className="details-header-button button">
            Confirmar Presença
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsHeader;