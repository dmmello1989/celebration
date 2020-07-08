import React from 'react';
import './styles.scss';

const FoodListItem = ({ 
  guest, 
  party, 
  loggedUser,
  confirmation,
  onClickConfirmation 
}) => {
  const userIsHost = loggedUser.id === party.host.id;
  const userIsGuest = loggedUser.id === guest.id;
  // console.log("party: ", party)
  // console.log("guest: ", guest)
  // console.log("userIsHost: ", userIsHost)
  // console.log("userIsGuest: ", userIsGuest)

  // console.log("confirmation no FoodListItem: ", confirmation)

  return (
    <div className="container">
      <div className="list-item">
        <span className="list-item-name">{party.contribuition}</span>

        {userIsGuest 
        ? (
          <label className="checkbox" onClick={onClickConfirmation}>
            <input type="checkbox" name="presence" id="presence"/>
            <span className="checkmark"></span>
          </label>
          ) : guest.confirmation === true ? (
          <span>Confirmado</span>
          ) : (
            <span>Não confirmado</span>
          )}


      </div>
    </div>
  )
}

export default FoodListItem;