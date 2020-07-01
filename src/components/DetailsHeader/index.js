import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const DetailsHeader = ({ user, party }) => {
  const [presence, setPresence] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(isAdmin)

  const onClickPresence = () => {
    setPresence(!presence);
  }

  const isUserAdmin = () => {
    if(user.id === party.host) {
      setIsAdmin(true);
    }
  }

  useEffect(() => {
    isUserAdmin();
  }, null);


  return (
    <div className="details-header">
      <div className="details-header-container">
        <div className="details-header-left">
          
          <h2 className="details-header-left-title">
            {party.title}
          </h2>
          <div className="details-header-left-info">
            <span>Anfitrião: <strong>{party.host.name}</strong></span>
            <span>Local: <strong>{party.location}</strong></span>
          </div>
        </div>
        <div className="details-header-right">

          {!isAdmin && (presence 
            ? (
              <div className="details-header-button button" onClick={onClickPresence}>
                Confirmar Presença
              </div>
            ) : (
              <div className="details-header-button button active" onClick={onClickPresence}>
                Presença Confimada
              </div>
            ))}

            {isAdmin && (
              <div className="details-header-button button" onClick={onClickPresence}>
                Salvar Edição
              </div>
            )}    

        </div>
      </div>
    </div>
  )
}

export default DetailsHeader;