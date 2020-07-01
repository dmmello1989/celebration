import React, { Fragment, useState, useEffect } from 'react';
import PartyCard from '../PartyCard';
import './styles.scss';

const TabMenu = (props) => {
  const [activeTab, setActiveTab] = useState("anfitriao");
  const [anfitriao, setAnfitriao] = useState([]);
  const [convidado, setConvidado] = useState([]);

  const mapAnfitrao = () => {
    setAnfitriao(props.anfitriao.map((item, key) => 
      <div className="section-content-column" key={key}>
        <PartyCard 
          date={item.date}
          host={item.host.name}  
          text={item.text}
          title={item.title}
          location={item.location}
        />
      </div>
    ));
  }

  const mapConvidado = () => {
    setConvidado(props.convidado.map((item, key) => 
      <div className="section-content-column" key={key}>
        <PartyCard 
          date={item.date}
          host={item.host.name}  
          text={item.text}
          title={item.title}
          location={item.location}
        />
      </div>
    ));
  }

  useEffect(() => {
    mapAnfitrao();
    mapConvidado();
  }, [props]);

  return (
    <Fragment>            
      <div className="tab-menu">
        <ul className="tab-menu-list">
          <li 
            onClick={() => setActiveTab('anfitriao')}
            className={activeTab === 'anfitriao' ? 'tab-menu-list-item is-active' : 'tab-menu-list-item'}
          >
            <span>Anfitrião</span>
          </li>
          <li 
            onClick={() => setActiveTab('convidado')}
            className={activeTab === 'convidado' ? 'tab-menu-list-item is-active' : 'tab-menu-list-item'}
          >
            <span>Convidado</span>
          </li>
        </ul>
      </div>

      <div style={{ display: activeTab !== 'anfitriao' ? 'none' : '' }}>
        <div className="section">
          <div className="section-header">
            <h2 className="section-header-title">Anfitrião</h2>
            <p className="section-header-description">Aqui ficam as festas criadas por você.</p>
          </div>
          <div className="section-content">
            <div className="section-content-columns">
              {anfitriao}
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
              {convidado}
            </div>
          </div>
        </div>
      </div>


    </Fragment>
  )
}

export default TabMenu;