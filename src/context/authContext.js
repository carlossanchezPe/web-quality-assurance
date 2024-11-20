import React, { createContext, useContext, useState } from 'react';
import { auth, db } from '../firebaseConfig'; // Asegúrate de importar `db` de tu configuración de Firebase
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore'; // Importa funciones de Firestore para obtener documentos

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null); // Estado para el rol del usuario

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser(user);

      // Obtener el rol del usuario desde Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setRole(userDoc.data().role);
        console.log("Rol del usuario:", userDoc.data().role); // Muestra el rol en la consola para verificar
      } else {
        console.error("No se encontró el rol del usuario en Firestore.");
      }

      return true;
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole(null); // Restablecer el rol al cerrar sesión
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
