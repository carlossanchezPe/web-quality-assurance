// Archivo: UserValidation.js

// Valida si el correo tiene un formato válido.
export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Valida si el nombre no está vacío y no excede 50 caracteres.
  export const validateName = (name) => {
    return name.length > 0 && name.length <= 50;
  };
  