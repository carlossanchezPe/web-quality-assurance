// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa la autenticación
import { getFirestore } from "firebase/firestore"; // Importa Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDgjb_mv8R9sMMrPxWLqJ7KGFUlG7VTd7E",
  authDomain: "gestutorias.firebaseapp.com",
  projectId: "gestutorias",
  storageBucket: "gestutorias.appspot.com",
  messagingSenderId: "637379925755",
  appId: "1:637379925755:web:3900c9ade1086a164ac25e",
  measurementId: "G-WQ2N90D01X"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa y exporta servicios de Firebase
export const auth = getAuth(app); // Autenticación
export const db = getFirestore(app); // Firestore (base de datos)

export default app;
