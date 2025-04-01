import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Projetos() {
  return (
    <Container className="text-center mt-5">
      <h1 className="text-white mb-4">Meus Projetos</h1>

      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="login1.png"
            alt="Projeto 1"
   
          />
          <Carousel.Caption>
            <h3>Sistema Estética Automotiva.</h3>
            <p>Utilizado para gerenciar todos os clientes por placa, nome, facilidade de contato e demais informações do dia a dia.<br/>Tecnologias: Javascript, Nodejs, Express, Bootstrap.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="botsDiscord.png"
            alt="Projeto 2"
          />
          <Carousel.Caption>
            <h3>Automação BOTS Discord.</h3>
            <p>Criado para pequenos empreendedores conseguirem organizar sua loja e servidor no Discord, com sistema de Tickets, Whitelist automática, banimentos e demais funções.<br/>Tecnologias: Javascript, Typescript, Nodejs, Express.</p>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="portfolioprojeto.png"
            alt="Botini Portfólio."
          />
          <Carousel.Caption>
            <h3>Botini Portfólio.</h3>
            <p>Criado para divulgar meus projetos e fortalecer minha presença no mercado de desenvolvimento, transmitindo uma imagem mais profissional e confiável<br/>Tecnologias: React Vite, Bootstrap.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Projetos;
