// src/pages/Signup.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('carlos@example.com'); // Predeterminado para "Carlos"
  const [password, setPassword] = useState('Carlos1');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(''); // Reinicia el error antes de intentar el registro
    setSuccess(''); // Reinicia el mensaje de éxito

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess('Usuario creado con éxito');
    } catch (error) {
      setError('Error al crear usuario: ' + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '1rem' }}>
      <h2>Registro</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSignup}>
        <label>Correo Electrónico:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ingresa tu correo"
          required
          style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }}
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ingresa tu contraseña"
          required
          style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }}
        />
        <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}>
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default Signup;
