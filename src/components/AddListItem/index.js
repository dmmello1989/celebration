import React, { useState } from 'react';
import './styles.scss';

const AddListItem = ({ 
  guestCPF,
  guestList,
  guestName,
  setGuestCPF,
  setGuestName,
  setGuestList
}) => {
  const [isAdding, setIsAdding] = useState(true)

  const onClickAdding = () => {
    return setIsAdding(false);
  }

  const changeGuestName = (e) => {
    let value = e.target.value;
    return setGuestName(value);
  }

  const changeGuestCPF = (e) => {
    let value = e.target.value;
    return setGuestCPF(value);
  }

  const createGuest = (e) => {
    e.preventDefault();
    setIsAdding(true)
    const newGuest = { guestName, guestCPF};
    setGuestList([...guestList, newGuest]);
  }

  return (
    <div className="container">
      <div className={`list-item ${isAdding ? 'is-clickable' : ''}`} onClick={onClickAdding}>

          {isAdding 
            ? (
              <div className="list-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/>
                </svg>
              </div>
            ) : (
              <form action="create-guest" method="post">
                <input 
                  className="list-item-textinput" 
                  type="text" 
                  maxLength={70}
                  name="guestName"
                  value={guestName}
                  onChange={changeGuestName}                  
                  placeholder="Digite o nome do convidado" 
                />
                <input 
                  className="list-item-textinput" 
                  type="text" 
                  maxLength={70}
                  name="guestCPF"
                  value={guestCPF}
                  onChange={changeGuestCPF}                  
                  placeholder="Digite o CPF do convidado" 
                />
                <input 
                  className="list-item-buttoninput button" 
                  type="button" 
                  value="Salvar"
                  onClick={createGuest}
                />
              </form>
            )
          }
        
      </div>
    </div>
  )
}

export default AddListItem;