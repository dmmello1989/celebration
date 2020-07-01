import React from 'react';
import ListItem from '../ListItem';
import userMock from '../../utils/mocks/user-mock';
import partyMock from '../../utils/mocks/party-mock';
import './styles.scss';

const DetailsList = (props) => {


  return (
    <div className="container">
      <div className="list-header">
        <span>Nome do Convidado</span>
        <span>Contribuição</span>
        <span>Confirmação</span>
      </div>

      {props.user.map((item, key) => {
        return <ListItem user={userMock} party={partyMock} />
      })}
      
    </div>
  )
}

export default DetailsList;