import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Sobremim() {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center align-items-center">
        {/* Imagem ao lado do título */}
        <Col xs="auto">
          <img src="flash.svg" alt="Flash" className="img-fluid" style={{ maxWidth: "80px" }} />
        </Col>

        {/* Título */}
        <Col xs="auto">
          <h1 className="text-white fw-bold">Sobre mim</h1>
        </Col>

        {/* Imagem ao lado do título */}
        <Col xs="auto">
          <img src="flash.svg" alt="Flash" className="img-fluid" style={{ maxWidth: "80px" }} />
        </Col>
      </Row>

      {/* Linha com foto e texto ao lado */}
      <Row className="mt-4">
        <Col md={4} className="d-flex justify-content-center">
          <img
            src="me.jpeg" 
            alt="Minha Foto" 
            className="img-fluid rounded-circle" 
            style={{ maxWidth: "200px" }} 
          />
        </Col>

        <Col md={8} className="d-flex align-items-center">
          <p className="text-white">
            Olá! Sou um desenvolvedor apaixonado por tecnologia e soluções criativas. 
            Com experiência em várias áreas, adoro aprender e me aprimorar constantemente.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet accusamus odio sint tempore non maiores, aliquam voluptatibus reiciendis, quasi soluta quaerat fugit praesentium sequi ea harum temporibus voluptates possimus accusantium!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Sobremim;
