import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHouse, faCartShopping, faTicket, faCalendarDays, faLock, faArrowDown, faUser, faKey, faCircleInfo, faSearch, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';
import CardComponent from './CardComponent';

function App() {

  const styles = {
    bgmain: {
      top: '0', bottom: '0', left: '0', right: '0', padding: '20px'    
    },
    iconsearch: {
      position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'black', fontSize: '1.7rem'
    },
    search: {
      paddingLeft: '70px',
      borderRadius: '30px',
      width: '100%',
      maxWidth: '500px',
      border: '2px solid #ced4da',
      fontSize: '1.5rem',
      height: '3.5rem',
      boxShadow: '0 7px 6px rgba(0, 0, 0, 0.2)'
    },
    btnuser: {
      backgroundColor: 'white', color: 'black', borderRadius: '40px', fontSize: '1.1rem', padding: '1rem 2rem', boxShadow: '0 7px 6px rgba(0, 0, 0, 0.2)'
    },
    iconuser: {
      color: 'black', fontSize: '1.5rem'
    }
  };

  const [isTicketsOpen, setIsTicketsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const toggleTickets = () => setIsTicketsOpen(!isTicketsOpen);
  const toggleAdmin = () => setIsAdminOpen(!isAdminOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="vh-100 position-relative">
      <div className="text-dark position-absolute bg-main" style={styles.bgmain}>
        <div className="row align-items-center mb-4 top-bar">
          <div className="col-6 col-md-2">
            <h1 className="display-6 mb-0">Logotipo</h1>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-start align-items-center">
            <div className="search-bar" style={{ position: 'relative', width: '100%' }}>
              <FontAwesomeIcon icon={faSearch} style={styles.iconsearch} />
              <input
                className="form-control"
                type="search"
                placeholder="buscar..."
                aria-label="Buscar"
                style={styles.search}
              />
            </div>
          </div>
          <div className="col-12 col-md d-flex justify-content-end align-items-center mt-2 mt-md-0">
            <button className="btn me-2" style={styles.btnuser}>
              <FontAwesomeIcon icon={faUser} className="me-2" style={styles.iconuser} />
              Leonardo Jaloma
            </button>
          </div>
          <div className="col-auto mt-2 mt-md-0">
            <button className="btn d-flex justify-content-center align-items-center me-2" style={{ backgroundColor: 'white', color: 'black', borderRadius: '40px', padding: '1.8rem', height: '50px', width: '50px', boxShadow: '0 7px 6px rgba(0, 0, 0, 0.2)' }}>
              <FontAwesomeIcon icon={faGear} style={{ fontSize: '2.9rem' }} />
            </button>
          </div>
          <div className="col-auto mt-2 mt-md-0">
            <button className="btn d-flex justify-content-center align-items-center me-2" style={{ backgroundColor: 'white', color: 'black', borderRadius: '40px', padding: '1.8rem', height: '50px', width: '50px', boxShadow: '0 7px 6px rgba(0, 0, 0, 0.2)' }}>
              <FontAwesomeIcon icon={faRightFromBracket} style={{ fontSize: '2.8rem' }} />
            </button>
          </div>
        </div>

        <div className="row min-height-row">
          <div className="col-12 col-md-2 mb-3">
            <nav className="nav flex-column">
              <a className="nav_link" href="#" onClick={() => handleOptionClick('Dashboard')} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                <FontAwesomeIcon icon={faHouse} /> Dashboard
              </a>
              <a className="nav_link" href="#" onClick={() => handleOptionClick('Ventas')} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                <FontAwesomeIcon icon={faCartShopping} /> Ventas
              </a>

              <div className="nav_item">
                <a className="nav_link" href="#" onClick={toggleTickets} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                  <FontAwesomeIcon icon={faTicket} /> Tickets
                  <FontAwesomeIcon icon={faArrowDown} className={`arrow-icon ${isTicketsOpen ? 'arrow-down' : 'arrow-right'}`} />
                </a>
              </div>

              <a className="nav_link" href="#" onClick={() => handleOptionClick('Eventos')} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                <FontAwesomeIcon icon={faCalendarDays} /> Eventos
              </a>

              <div className="nav_item">
                <a className="nav_link" href="#" onClick={toggleAdmin} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                  <FontAwesomeIcon icon={faLock} /> Admin
                  <FontAwesomeIcon icon={faArrowDown} className={`arrow-icon ${isAdminOpen ? 'arrow-down' : 'arrow-right'}`} />
                </a>
                <CSSTransition
                  in={isAdminOpen}
                  timeout={300}
                  classNames="collapse"
                  unmountOnExit
                >
                  <div className="nav flex-column ms-3">
                    <a className="nav_link" href="#" onClick={() => handleOptionClick('Usuarios')} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                      <FontAwesomeIcon icon={faUser} /> Usuarios
                    </a>
                    <a className="nav_link" href="#" onClick={() => handleOptionClick('Permisos')} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                      <FontAwesomeIcon icon={faKey} /> Permisos
                    </a>
                    <a className="nav_link" href="#" onClick={() => handleOptionClick('Etc')} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                      <FontAwesomeIcon icon={faCircleInfo} /> etc
                    </a>
                  </div>
                </CSSTransition>
              </div>
            </nav>
          </div>

          <div className="col-12 col-md-10">
            <div className="d-flex align-items-stretch" style={{ height: '100%' }}>
              <div className="flex-grow-1 p-3 bg-white white-box d-flex flex-column">
                <div className="row mb-3 text-white">
                  <CardComponent title={selectedOption} value="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
