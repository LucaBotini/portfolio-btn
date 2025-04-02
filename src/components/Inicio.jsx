/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Inicio() {
  return (
    <Container className="mt-5" id="inicio">
      <Row className="align-items-center">
        {/* Coluna do Texto */}
        <Col lg={6} className="text-center text-lg-start">
          {/* Nome com animação */}
          <motion.h1
            className="fw-bold display-4 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Luca Botini
          </motion.h1>

          {/* Cargo com fade-in */}
          <motion.h2
            className="text-secondary text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Desenvolvedor Back-End
          </motion.h2>

          {/* Links com animação de subida */}
          <motion.div
            id="links"
            className="d-flex justify-content-center justify-content-lg-start gap-4 mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <a href="https://github.com/LucaBotini" target="_blank" rel="noopener noreferrer">
              <motion.img
                src="github.svg"
                alt="Perfil GitHub"
                className="img-fluid"
                height="45"
                width="45"
                whileHover={{ scale: 1.1 }}
              />
            </a>
            <a href="https://linkedin.com/in/lucabotini" target="_blank" rel="noopener noreferrer">
              <motion.img
                src="linkedin.svg"
                alt="Perfil LinkedIn"
                className="img-fluid"
                whileHover={{ scale: 1.1 }}
              />
            </a>
          </motion.div>
        </Col>

        {/* Coluna da Imagem */}
        <Col lg={6} className="text-center">
          <motion.img
            src="garotodev.png"
            alt="Dev"
            className="img-fluid rounded shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Inicio;
