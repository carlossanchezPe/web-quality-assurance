import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import './Header.css';

const Header = () => {
  const { user, role, logout } = useAuth();

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <nav className="container">
        <NavLink to="/" className="navbar-brand d-flex align-items-center">
          <i className="fas fa-graduation-cap fa-lg me-2" style={{ color: '#ffc107' }}></i>
          <span>GesTutorias</span>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </NavLink>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Hola, {user.email}</span>
                </li>

                {role !== 'profesor' && (
                  <>
                    <li className="nav-item">
                      <NavLink to="/registros" className="nav-link">
                        <i className="fas fa-book"></i> Registros
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/alumnos" className="nav-link">
                        <i className="fas fa-users"></i> Alumnos
                      </NavLink>
                    </li>
                  </>
                )}

                {role === 'profesor' && (
                  <li className="nav-item">
                    <NavLink to="/alumnos" className="nav-link">
                      <i className="fas fa-users"></i> Alumnos
                    </NavLink>
                  </li>
                )}

                <li className="nav-item">
                  <button onClick={logout} className="btn btn-outline-warning nav-link">
                    <i className="fas fa-sign-out-alt"></i> Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    <i className="fas fa-sign-in-alt"></i> Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/registro" className="nav-link">
                    <i className="fas fa-user-plus"></i> Registro
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
