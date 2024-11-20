// Registros.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './Registros.css';

const Registros = ({ registros = [], agregarRegistro, actualizarRegistro }) => {
  const materiasPorSemestre = {
    1: [
      { nombre: "CALCULO DIFERENCIAL", creditos: 5 },
      { nombre: "FUNDAMENTOS DE PROGRAMACION", creditos: 5 },
      { nombre: "ALGEBRA LINEAL", creditos: 5 },
      { nombre: "MATEMATICAS DISCRETAS", creditos: 5 },
      { nombre: "TALLER DE ADMINISTRACION", creditos: 4 },
    ],
    2: [
      { nombre: "CALCULO INTEGRAL", creditos: 5 },
      { nombre: "PROGRAMACION ORIENTADA A OBJETOS", creditos: 5 },
      { nombre: "QUIMICA", creditos: 5 },
      { nombre: "FISICA GENERAL", creditos: 5 },
      { nombre: "CULTURA EMPRESARIAL", creditos: 4 },
    ],
    // Agrega más semestres y materias según sea necesario
  };

  const [nuevoRegistro, setNuevoRegistro] = useState({
    matricula: '',
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    ingreso: '',
    estatus: 'PENDIENTE',
    nota: '',
    semestre: 1,
    materias: [],
  });

  const [filtro, setFiltro] = useState('');
  const [estatusFiltro, setEstatusFiltro] = useState('');
  const [editando, setEditando] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoRegistro({ ...nuevoRegistro, [name]: value });
  };

  const handleSemestreChange = (e) => {
    const semestre = parseInt(e.target.value, 10);
    setNuevoRegistro({
      ...nuevoRegistro,
      semestre: semestre,
      materias: materiasPorSemestre[semestre] || [],
    });
  };

  const agregarNuevoRegistro = () => {
    const registroConMaterias = { ...nuevoRegistro, materias: materiasPorSemestre[nuevoRegistro.semestre] || [] };
    agregarRegistro(registroConMaterias);
    setNuevoRegistro({
      matricula: '',
      nombre: '',
      apellidoP: '',
      apellidoM: '',
      ingreso: '',
      estatus: 'PENDIENTE',
      nota: '',
      semestre: 1,
      materias: [],
    });
    Swal.fire('Registro agregado', 'El registro se ha agregado exitosamente.', 'success');
  };

  const editarRegistro = (registro) => {
    setNuevoRegistro(registro);
    setEditando(registro.id);
  };

  const guardarEdicion = () => {
    actualizarRegistro(editando, nuevoRegistro);
    setNuevoRegistro({
      matricula: '',
      nombre: '',
      apellidoP: '',
      apellidoM: '',
      ingreso: '',
      estatus: 'PENDIENTE',
      nota: '',
      semestre: 1,
      materias: [],
    });
    setEditando(null);
    Swal.fire('Registro actualizado', 'Los cambios se han guardado exitosamente.', 'success');
  };

  const eliminarRegistro = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const registrosActualizados = registros.filter((registro) => registro.id !== id);
        actualizarRegistro(id, registrosActualizados);
        Swal.fire('Eliminado', 'El registro ha sido eliminado.', 'success');
      }
    });
  };

  const registrosFiltrados = (registros || []).filter((registro) => {
    const cumpleFiltro =
      !filtro ||
      registro.matricula.toLowerCase().includes(filtro.toLowerCase()) ||
      registro.nombre.toLowerCase().includes(filtro.toLowerCase());
    const cumpleEstatus = !estatusFiltro || registro.estatus === estatusFiltro;
    return cumpleFiltro && cumpleEstatus;
  });

  return (
    <div className="registros-container">
      <h2>Registros de Alumnos</h2>

      <div className="filter-container mb-4">
        <input
          type="text"
          placeholder="Buscar por matrícula o nombre"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="form-control mb-2"
        />
        <select
          value={estatusFiltro}
          onChange={(e) => setEstatusFiltro(e.target.value)}
          className="form-select mb-4"
        >
          <option value="">Todos los Estatus</option>
          <option value="ACTIVO">ACTIVO</option>
          <option value="PENDIENTE">PENDIENTE</option>
          <option value="COMPLETADO">COMPLETADO</option>
        </select>
      </div>

      <div className="form-section">
        <h4>Datos Personales</h4>
        <div className="form-row">
          <input type="text" name="matricula" placeholder="Matrícula" value={nuevoRegistro.matricula} onChange={handleInputChange} className="form-control mb-2" />
          <input type="text" name="nombre" placeholder="Nombre" value={nuevoRegistro.nombre} onChange={handleInputChange} className="form-control mb-2" />
          <input type="text" name="apellidoP" placeholder="Apellido Paterno" value={nuevoRegistro.apellidoP} onChange={handleInputChange} className="form-control mb-2" />
          <input type="text" name="apellidoM" placeholder="Apellido Materno" value={nuevoRegistro.apellidoM} onChange={handleInputChange} className="form-control mb-2" />
          <input type="number" name="ingreso" placeholder="Año de Ingreso" value={nuevoRegistro.ingreso} onChange={handleInputChange} className="form-control mb-2" />
          <select name="estatus" value={nuevoRegistro.estatus} onChange={handleInputChange} className="form-select mb-2">
            <option value="ACTIVO">ACTIVO</option>
            <option value="PENDIENTE">PENDIENTE</option>
            <option value="COMPLETADO">COMPLETADO</option>
          </select>
          <input type="text" name="nota" placeholder="Nota" value={nuevoRegistro.nota} onChange={handleInputChange} className="form-control mb-2" />
          <input type="number" name="semestre" placeholder="Semestre" value={nuevoRegistro.semestre} onChange={handleSemestreChange} className="form-control mb-2" />
        </div>

        <div className="button-group">
          {editando ? (
            <button onClick={guardarEdicion} className="btn btn-primary">Guardar Cambios</button>
          ) : (
            <button onClick={agregarNuevoRegistro} className="btn btn-success">Agregar Registro</button>
          )}
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Matrícula</th>
              <th>Nombre</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Año de Ingreso</th>
              <th>Semestre</th>
              <th>Materias</th>
              <th>Estatus</th>
              <th>Nota</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registrosFiltrados.map((registro) => (
              <tr key={registro.id}>
                <td>{registro.matricula}</td>
                <td>{registro.nombre}</td>
                <td>{registro.apellidoP}</td>
                <td>{registro.apellidoM}</td>
                <td>{registro.ingreso}</td>
                <td>{registro.semestre}</td>
                <td>
                  <ul>
                    {registro.materias.map((materia, index) => (
                      <li key={index}>
                        {materia.nombre} - Créditos: {materia.creditos}
                      </li>
                    ))}
                  </ul>
                </td>
                <td>{registro.estatus}</td>
                <td>{registro.nota}</td>
                <td>
                  <button onClick={() => editarRegistro(registro)} className="btn btn-warning btn-sm me-2">Editar</button>
                  <button onClick={() => eliminarRegistro(registro.id)} className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registros;
