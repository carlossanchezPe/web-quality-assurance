import React, { useState } from 'react';
import './Registro.css';

const Registro = () => {
  const [user, setUser] = useState({ nombre: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para registrar al usuario
    console.log('Registrando usuario:', user);
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={user.nombre}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Ingresa tu correo"
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Crea una contraseña"
        />
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder="Confirma tu contraseña"
        />
        <button type="submit" className="btn-submit">Registrarme</button>
      </form>
    </div>
  );
};

export default Registro;
