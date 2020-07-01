import React, { useState } from 'react';
import ListItem from '../ListItem';
import AddListItem from '../AddListItem';
import userMock from '../../utils/mocks/user-mock';
import partyMock from '../../utils/mocks/party-mock';
import './styles.scss';

const DetailsList = (props) => {
  const [guestList, setGuestList] = useState(userMock);
  const [guestName, setGuestName] = useState("");
  const [guestCPF, setGuestCPF] = useState("");
  console.log("guestList: ", guestList)

  return (
    <div className="container">
      <div className="list-header">
        <span>Nome do Convidado</span>
        <span>Contribuição</span>
        <span>Confirmação</span>
      </div>

      {guestList.map((item, key) => {
        console.log("item no map: ", item);
        return (
          <ListItem name={item.name} key={key} />
        )
      })}

      <AddListItem 
        guestCPF={guestCPF}
        guestList={guestList} 
        guestName={guestName}
        setGuestCPF={setGuestCPF}
        setGuestName={setGuestName}
        setGuestList={setGuestList} 
      />
      
    </div>
  )
}

export default DetailsList;