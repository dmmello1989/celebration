import React, { Fragment, useState } from 'react';
import LoggedMenu from '../../components/LoggedMenu';
import DetailsHeader from '../../components/DetailsHeader';
import TabMenu from '../../components/TabMenu';
import anfitriaoMock from '../../utils/mocks/anfitriao-mock';
import convidadoMock from '../../utils/mocks/convidado-mock';
import './styles.scss';

const Details = (props) => {
  const [anfitriao, setAnfitriao] = useState(anfitriaoMock);
  const [convidado, setConvidado] = useState(convidadoMock);

  return (
    <Fragment>

    <LoggedMenu />

    <DetailsHeader />
    
  </Fragment>
  )
}

export default Details;