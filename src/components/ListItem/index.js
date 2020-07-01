import React from 'react';
import './styles.scss';

const ListItem = ({ name }) => {
  return (
    <div className="container">
      <div className="list-item">
        <span className="list-item-name">{name}</span>
        <select 
          className="list-item-select"
          name="contribuition" 
          id="contribuition" 
          defaultValue="Selecione um item..."
          required
        >
          <option value="" disabled selected>Selecione um item</option>
          <option value="Banana">Banana</option>
          <option value="Refrigerante">Refrigerante</option>
          <option value="Salgadinho">Salgadinho</option>
          <option value="Bolo">Bolo</option>
        </select>
        <span>Confirmado</span>
      </div>
    </div>
  )
}

export default ListItem;