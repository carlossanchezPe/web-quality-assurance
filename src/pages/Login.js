// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext'; // Asegúrate de que esta sea la única importación de useAuth
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiamos errores previos
    const success = await login(user.email, user.password);
    if (success) {
      console.log("Redirigiendo..."); // Verifica si este mensaje aparece en la consola
      navigate('/');
    } else {
      setError('Error de autenticación. Verifica tus credenciales.');
    }
  };
  

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Ingresa tu correo"
          required
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Ingresa tu contraseña"
          required
        />
        <button type="submit" className="btn-submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
