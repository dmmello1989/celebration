import React, { Fragment, useState } from 'react';
import LoggedMenu from '../../components/LoggedMenu';
import DetailsHeader from '../../components/DetailsHeader';
import userMock from '../../utils/mocks/user-mock';
import partyMock from '../../utils/mocks/party-mock';
import DetailsList from '../../components/DetailsList';
import './styles.scss';

const Details = (props) => {

  return (
    <Fragment>

      <LoggedMenu />

      <DetailsHeader user={userMock} party={partyMock} />

      <DetailsList user={userMock} party={partyMock} />
    
    </Fragment>
  )
}

export default Details;