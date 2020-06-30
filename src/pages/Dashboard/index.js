import React, { Fragment, useState } from 'react';
import LoggedMenu from '../../components/LoggedMenu';
import TabMenu from '../../components/TabMenu';
import anfitriaoMock from '../../utils/mocks/anfitriao-mock';
import convidadoMock from '../../utils/mocks/convidado-mock';
import './styles.scss';


const Dashboard = () => {
  const [anfitriao, setAnfitriao] = useState(anfitriaoMock);
  const [convidado, setConvidado] = useState(convidadoMock);

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