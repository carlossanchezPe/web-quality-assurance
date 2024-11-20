// PerfilAlumno.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PerfilAlumno.css';

const PerfilAlumno = ({ alumnos }) => {
  const { id } = useParams();
  const [alumno, setAlumno] = useState(null);
  const [verDetalles, setVerDetalles] = useState(false);

  useEffect(() => {
    const alumnoEncontrado = alumnos.find((alumno) => alumno.id.toString() === id);
    setAlumno(alumnoEncontrado);
  }, [id, alumnos]);

  if (!alumno) return <p>Cargando...</p>;

  return (
    <div className="perfil-alumno-container">
      <h2>Perfil de {alumno.nombre}</h2>
      <p><strong>Matrícula:</strong> {alumno.matricula}</p>
      <p><strong>Año de Ingreso:</strong> {alumno.ingreso}</p>
      <p><strong>Estatus:</strong> {alumno.estatus}</p>
      <p><strong>Semestre Actual:</strong> {alumno.semestre}</p>
      
      <h4>Materias del Semestre</h4>
      <ul>
        {alumno.materias && alumno.materias.length > 0 ? (
          alumno.materias.map((materia, index) => (
            <li key={index}>
              <strong>{materia.nombre}</strong> - Profesor: {materia.profesor} ({materia.ano})
            </li>
          ))
        ) : (
          <p>Sin materias asignadas para este semestre.</p>
        )}
      </ul>

      {/* Botón para mostrar detalles adicionales */}
      <button onClick={() => setVerDetalles(!verDetalles)} className="btn btn-secondary mt-3">
        {verDetalles ? 'Ocultar Detalles' : 'Ver Más Detalles'}
      </button>

      {verDetalles && (
        <div className="detalles-extra mt-3">
          <h4>Detalles Adicionales</h4>
          <p><strong>Notas:</strong> {alumno.nota || 'Sin notas disponibles'}</p>
          <p><strong>Asistencia:</strong> {alumno.asistencia || 'N/A'}</p>
          {/* Agrega más información detallada según sea necesario */}
        </div>
      )}
    </div>
  );
};

export default PerfilAlumno;
