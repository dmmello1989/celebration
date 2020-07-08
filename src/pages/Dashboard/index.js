import React, { Fragment, useState, useEffect } from 'react';
import LoggedMenu from '../../components/LoggedMenu';
import PartyCard from '../../components/PartyCard';
import TabMenu from '../../components/TabMenu';
import partyMock from '../../utils/mocks/party-mock';
import loggedUser from '../../utils/mocks/loggedUser-mock';
import './styles.scss';

const Dashboard = () => {
  const [host, setHost] = useState([]);
  const [guest, setGuest] = useState([]);
  const [activeTab, setActiveTab] = useState("anfitriao");

  const partyHost = partyMock.filter(party => {
    return party.host.id === loggedUser.id;
  })
  
  const partyGuest = partyMock.filter(party => {
    const guestArr = party.guests.filter(id => {
      return id.id  === loggedUser.id;
    });
    return guestArr; 
  })

  useEffect(() => {
    setHost(partyHost)
  }, partyHost);
  
  useEffect(() => {
    setGuest(partyGuest)
  }, partyGuest);

  return (
    <Fragment>

    <LoggedMenu />

    <div className="container">
      <TabMenu 
        leftTab="anfitriao"
        rightTab="convidado"
        leftTitle="Anfitrião"
        rightTitle="Convidado"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>

    <div className="container">
      <div style={{ display: activeTab !== 'anfitriao' ? 'none' : '' }}>
        <div className="section">
          <div className="section-header">
            <h2 className="section-header-title">Anfitrião</h2>
            <p className="section-header-description">Aqui ficam as festas criadas por você.</p>
          </div>
          <div className="section-content">
            <div className="section-content-columns">
              {host.map((item, key) => 
                <div className="section-content-column" key={key}>
                  <PartyCard 
                    id={item.id}
                    date={item.date}
                    text={item.text}
                    title={item.title}
                    host={item.host.name}  
                    location={item.location}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: activeTab !== 'convidado' ? 'none' : '' }}>
        <div className="section">
          <div className="section-header">
            <h2 className="section-header-title">Convidado</h2>
            <p className="section-header-description">Aqui ficam as festas nas quais você está convidado.</p>
          </div>
          <div className="section-content">
            <div className="section-content-columns">
              {guest.map((item, key) => 
                <div className="section-content-column" key={key}>
                  <PartyCard 
                    id={item.id}
                    date={item.date}
                    text={item.text}
                    title={item.title}
                    host={item.host.name}  
                    location={item.location}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default Dashboard;