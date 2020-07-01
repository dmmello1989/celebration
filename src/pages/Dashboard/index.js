import React, { Fragment, useState } from 'react';
import LoggedMenu from '../../components/LoggedMenu';
import TabMenu from '../../components/TabMenu';
import partyMock from '../../utils/mocks/party-mock';
import './styles.scss';


const Dashboard = () => {
  const [anfitriao, setAnfitriao] = useState(partyMock);
  const [convidado, setConvidado] = useState(partyMock);

  return (
    <Fragment>

    <LoggedMenu />

    <div className="container">
      <TabMenu anfitriao={anfitriao} convidado={convidado} />
    </div>
    
  </Fragment>
  )
}

export default Dashboard;