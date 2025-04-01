import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
                {/* Logo */}
                <Navbar.Brand href="/">
                    <h3>
                        <span className="text-primary">&lt;</span>
                        Botini
                        <span className="text-primary"> / &gt;</span>
                    </h3>
                </Navbar.Brand>

                {/* Botão para dispositivos menores */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Links do menu */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#inicio">Início</Nav.Link>
                        <Nav.Link href="#sobre">Sobre Mim</Nav.Link>
                        <Nav.Link href="#projetos">Projetos</Nav.Link>
                        <Nav.Link href="#habilidades">Habilidades</Nav.Link>
                        <Nav.Link href="#certificados">Certificados</Nav.Link>
                        <Nav.Link href="#contato">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
