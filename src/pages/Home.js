import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const secciones = [
    {
      titulo: 'Lista de Alumnos',
      descripcion: 'Consulta y exporta la lista completa de alumnos.',
      ruta: '/alumnos',
      color: 'primary'
    },
    {
      titulo: 'Ver Registros',
      descripcion: 'Gestiona registros y notas de los alumnos.',
      ruta: '/registros',
      color: 'success'
    }
  ];

  return (
    <div className="home-wrapper">
      <Container className="home-container text-center">
        <h1 className="mb-4">Bienvenido a GesTutorias</h1>
        <p className="lead mb-5">
          Sistema de gestión de tutorías y registros de estudiantes del Instituto Tecnológico.
          Administra la información de manera eficiente.
        </p>
        <Row xs={1} md={2} className="g-4 justify-content-center">
          {secciones.map((seccion, index) => (
            <Col key={index} className="d-flex justify-content-center">
              <Card bg={seccion.color} text="white" className="shadow-lg home-card">
                <Card.Body>
                  <Card.Title>{seccion.titulo}</Card.Title>
                  <Card.Text>{seccion.descripcion}</Card.Text>
                  <Button
                    variant="light"
                    onClick={() => navigate(seccion.ruta)}
                    className="w-100"
                  >
                    Ir a {seccion.titulo}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
