// Archivo: UserValidation.test.js

// Importamos las funciones desde el archivo UserValidation.js
import { validateEmail, validateName } from './UserValidation.js';


/**
 * Prueba 1: Validar que se acepte un correo válido.
 * Entrada: Un correo electrónico con formato correcto.
 * Resultado esperado: La función debe devolver true.
 */
test('Acepta un correo válido', () => {
  expect(validateEmail('user@example.com')).toBe(true);
});

/**
 * Prueba 2: Validar que se rechace un correo inválido.
 * Entrada: Un correo electrónico sin el formato correcto (sin dominio, etc.).
 * Resultado esperado: La función debe devolver false.
 */
test('Rechaza un correo inválido', () => {
  expect(validateEmail('user@')).toBe(false);
});

/**
 * Prueba 3: Validar que se acepte un nombre válido.
 * Entrada: Un nombre corto y válido.
 * Resultado esperado: La función debe devolver true.
 */
test('Acepta un nombre válido', () => {
  expect(validateName('Carlos')).toBe(true);
});

/**
 * Prueba 4: Validar que se rechace un nombre vacío.
 * Entrada: Una cadena vacía.
 * Resultado esperado: La función debe devolver false.
 */
test('Rechaza un nombre vacío', () => {
  expect(validateName('')).toBe(false);
});

/**
 * Prueba 5: Validar que se rechace un nombre demasiado largo.
 * Entrada: Un nombre que excede el límite de caracteres permitido.
 * Resultado esperado: La función debe devolver false.
 */
test('Rechaza un nombre que excede el límite de caracteres', () => {
  expect(validateName('Carlos'.repeat(20))).toBe(false);
});
