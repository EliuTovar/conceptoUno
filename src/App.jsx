import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faHouse, faCartShopping, faTicket, faCalendarDays, faLock, faArrowDown, faUser, faKey, faCircleInfo, faSearch, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isTicketsOpen, setIsTicketsOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const toggleTickets = () => setIsTicketsOpen(!isTicketsOpen);
  const toggleAdmin = () => setIsAdminOpen(!isAdminOpen);

  return (
    <div className="vh-100 position-relative">
      <div className="text-dark position-absolute bg-main" style={{ top: '0', bottom: '0', left: '0', right: '0', padding: '20px' }}>
        <div className="row align-items-center mb-4 top-bar">
          <div className="col-6 col-md-2">
            <h1 className="display-6 mb-0">Logotipo</h1>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-start align-items-center">
            <div className="search-bar" style={{ position: 'relative', width: '100%' }}>
              <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'black', fontSize: '1.7rem' }} />
              <input
                className="form-control"
                type="search"
                placeholder="buscar..."
                aria-label="Buscar"
                style={{
                  paddingLeft: '70px',
                  borderRadius: '30px',
                  width: '100%',
                  maxWidth: '500px',
                  border: '2px solid #ced4da',
                  fontSize: '1.5rem',
                  height: '3.5rem',
                  boxShadow: '0 7px 6px rgba(0, 0, 0, 0.2)'
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md d-flex justify-content-end align-items-center mt-2 mt-md-0">
            <button className="btn me-2" style={{ backgroundColor: 'white', color: 'black', borderRadius: '40px', fontSize: '1.1rem', padding: '1rem 2rem', boxShadow: '0 7px 6px rgba(0, 0, 0, 0.2)' }}>
              <FontAwesomeIcon icon={faUser} className="me-2" style={{ color: 'black', fontSize: '1.5rem' }} />
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
              <a className="nav_link" href="#" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}><FontAwesomeIcon icon={faHouse} /> Dashboard</a>
              <a className="nav_link" href="#" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}><FontAwesomeIcon icon={faCartShopping} /> Ventas</a>

              <div className="nav_item">
                <a className="nav_link" href="#" onClick={toggleTickets} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                  <FontAwesomeIcon icon={faTicket} /> Tickets <FontAwesomeIcon icon={faArrowDown} />
                </a>
                {isTicketsOpen && (
                  <div className="nav flex-column ms-3">
                    <a className="nav_link" href="#" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>Ticket Submenu</a>
                  </div>
                )}
              </div>

              <a className="nav_link" href="#" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}><FontAwesomeIcon icon={faCalendarDays} /> Eventos</a>

              <div className="nav_item">
                <a className="nav_link" href="#" onClick={toggleAdmin} style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}>
                  <FontAwesomeIcon icon={faLock} /> Admin <FontAwesomeIcon icon={faArrowDown} />
                </a>
                {isAdminOpen && (
                  <div className="nav flex-column ms-3">
                    <a className="nav_link" href="#" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}><FontAwesomeIcon icon={faUser} /> Usuarios</a>
                    <a className="nav_link" href="#" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}><FontAwesomeIcon icon={faKey} /> Permisos</a>
                    <a className="nav_link" href="#" style={{ fontSize: '1.5rem', padding: '1rem 2rem' }}><FontAwesomeIcon icon={faCircleInfo} /> etc</a>
                  </div>
                )}
              </div>
            </nav>
          </div>

          <div className="col-12 col-md-10">
            <div className="d-flex align-items-stretch" style={{ height: '100%' }}>
              <div className="flex-grow-1 p-3 bg-white white-box d-flex flex-column">
                <div className="row mb-3 text-white">
                  <div className="col-12 col-md-4">
                    <div className="p-3 blue-gradient-box">
                      <h1>EVENTOS</h1>
                      <h1>100</h1>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="p-3 blue-gradient-box">
                      <h1>BOLETOS</h1>
                      <h1>500,000</h1>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="p-3 blue-gradient-box">
                      <h1>VENTAS</h1>
                      <h1>$3,800,000</h1>
                    </div>
                  </div>
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

































