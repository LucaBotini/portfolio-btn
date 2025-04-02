import React from "react";
import { Container, Row, Col, Carousel, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/App.css";

const certificados = [
    {
        titulo: "Javascript",
        descricao: "Concluí o curso básico/intermediário de JavaScript pelo Curso em Vídeo, aprendendo lógica, manipulação do DOM e programação assíncrona.",
        horas: 40,
        link: "https://drive.google.com/file/d/1MdDr-06In52DvOngZbkV04mQ6J2EM8up/view"
    },
    {
        titulo: "Java",
        descricao: "Concluí o curso de Java com a DevDojo, aprendendo desde os fundamentos da linguagem até conceitos avançados como POO, coleções e Streams.",
        horas: 80,
        link: "https://www.youtube.com/playlist?list=PL62G310vn6nFIsOCC0H-C2infYgwm8SWW"
    },
    {
        titulo: "Linux",
        descricao: "Concluí o curso de Linux pelo Curso em Vídeo, aprendendo comandos, estrutura do sistema e administração básica.",
        horas: 40,
        link: "https://drive.google.com/file/d/1LrIURQjGKhTL3p-unVujWTWgwTbHMs07/view"
    },
    {
        titulo: "HTML5 & CSS3",
        descricao: "Concluí o curso de HTML5 & CSS3 pelo Curso em Vídeo, aprendendo a estruturar e estilizar páginas web com boas práticas e design responsivo.",
        horas: 40,
        link: "https://drive.google.com/file/d/1g6xEHgbbuLGIIoU58wPYViH_1Mca_Gdy/view"
    },
];

function Certificados() {
    return (
        <Container id="certificados" className="text-center mt-5">
            <Row className="justify-content-center align-items-center mb-4">
                <Col xs="auto">
                    <img src="flash.svg" alt="Flash" className="img-fluid" style={{ maxWidth: "80px" }} />
                </Col>
                <Col xs="auto">
                    <h1 className="text-white fw-bold">Certificados</h1>
                </Col>
                <Col xs="auto">
                    <img src="flash.svg" alt="Flash" className="img-fluid" style={{ maxWidth: "80px" }} />
                </Col>
            </Row>
            <Carousel indicators={false} interval={3000} className="w-75 mx-auto">
                {certificados.map((cert, index) => (
                    <Carousel.Item key={index}>
                        <Card className="bg-transparent text-white neon-border text-center">
                            <Card.Body>
                                <Card.Title>{cert.titulo}</Card.Title>
                                <Card.Text>{cert.descricao}</Card.Text>
                                <Card.Text><strong>Carga Horária:</strong> {cert.horas} horas</Card.Text>
                                <Button variant="primary" href={cert.link} target="_blank">Ver Certificado</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Certificados;