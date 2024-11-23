// Valida si el correo tiene un formato válido.
export const validateEmail = (email) => {
    // Se añadió una validación para evitar correos con espacios al inicio o al final.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.trim().length > 0 && emailRegex.test(email);
};

// Valida si el nombre no está vacío y no excede 50 caracteres.
export const validateName = (name) => {
    // Se añadió un chequeo para eliminar espacios innecesarios y evitar nombres vacíos.
    const trimmedName = name.trim();
    return trimmedName.length > 0 && trimmedName.length <= 50;
};
