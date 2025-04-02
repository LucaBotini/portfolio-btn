/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/App.css"

function Contato() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const webhookURL = "https://discord.com/api/webhooks/1356784128279838882/Kos1c9L9IsSYnBv5c2imMx-WGu1bg5eqoctp0q7P5l4aUukdLIcNY0a62VKAZVFbZEB9";
    const messageContent = {
      content: `Novo contato:\n**Nome:** ${formData.name}\n**Email:** ${formData.email}\n**Mensagem:** ${formData.message}`
    };

    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(messageContent)
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch (error) {
      alert("Erro ao enviar mensagem.");
    }
  };

  return (
    <Container className="mt-5">
      {/* Formulário de Contato */}
      <Row className="mt-5">
        <Col md={6} className="mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h3 className="text-white text-center">Entre em Contato</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label className="text-white">Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Seu nome"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-transparent colorText neon-borderForm rounded-0"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Seu email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-transparent colorText neon-borderForm rounded-0"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label className="text-white">Mensagem</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Sua mensagem. Caso preferir, deixe seu número de contato aqui."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-transparent colorText neon-borderForm rounded-0"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3 mb-3">
                Enviar
              </Button>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;
