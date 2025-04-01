import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Habilidades() {
    const skills = [
        { name: "JavaScript", img: "js.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Typescript", img: "ts.svg", link: "https://www.typescriptlang.org/" },
        { name: "Node.js", img: "nodejs.svg", link: "https://nodejs.org/" },
        { name: "Express", img: "express.svg", link: "https://expressjs.com/" },
        { name: "Java", img: "java.svg", link: "https://dev.java/" },
        { name: "SpringBoot", img: "springboot.svg", link: "https://spring.io/projects/spring-boot" },
        { name: "Lua", img: "lua.svg", link: "https://www.lua.org/" },
        { name: "MongoDB", img: "mongodb.svg", link: "https://www.mongodb.com/docs/" },
        { name: "MYSQL", img: "mysql.svg", link: "https://dev.mysql.com/doc/" },
        { name: "HTML5", img: "html5.svg", link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        { name: "CSS3", img: "css3.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "React", img: "react.svg", link: "https://react.dev/" },
        { name: "Vite", img: "vite.svg", link: "https://vitejs.dev/" },
        { name: "Bootstrap", img: "bootstrap.svg", link: "https://getbootstrap.com/" },
        { name: "Postman", img: "postman.svg", link: "https://learning.postman.com/" },
        { name: "GIT", img: "git.svg", link: "https://git-scm.com/doc" },
        { name: "Linux", img: "linux.svg", link: "https://www.kernel.org/doc/html/latest/" },
        { name: "Windows", img: "windows.svg", link: "https://learn.microsoft.com/en-us/windows/" },
        { name: "Photoshop", img: "photoshop.svg", link: "https://helpx.adobe.com/photoshop/user-guide.html" },        
    ];

    return (
        <Container className="text-center mt-5">
            <Row className="justify-content-center align-items-center">
                {/* Ícone ao lado do título */}
                <Col xs="auto">
                    <img src="flash.svg" alt="Flash" className="img-fluid" style={{ maxWidth: "80px" }} />
                </Col>

                {/* Título */}
                <Col xs="auto">
                    <h1 className="text-white fw-bold">Habilidades</h1>
                </Col>

                {/* Ícone ao lado do título */}
                <Col xs="auto">
                    <img src="flash.svg" alt="Flash" className="img-fluid" style={{ maxWidth: "80px" }} />
                </Col>
            </Row>

            {/* Ícones das habilidades */}
            <Row className="mt-4 justify-content-center">
                {skills.map((skill, index) => (
                    <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
                        <a href={skill.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="img-fluid"
                                style={{ maxWidth: "80px" }}
                            />
                            <p className="text-white mt-2">{skill.name}</p>
                        </a>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Habilidades;
