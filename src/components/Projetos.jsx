import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../src/App.css"

function Projetos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Quantidade de cards visíveis
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const projetos = [
    {
      img: "login1.png",
      titulo: "Sistema Estética Automotiva",
      descricao: "Gerencia clientes por placa, nome e contato.",
      tecnologias: "Javascript, Node.js, Express, Bootstrap",
      link: "https://botiniwashmotos.squareweb.app" // Adicione o link aqui
    },
    {
      img: "botsDiscord.png",
      titulo: "Automação BOTS Discord",
      descricao: "Ajuda empreendedores a organizar sua loja e servidor.",
      tecnologias: "Javascript, Typescript, Node.js, Express",
      link: "https://discord.gg/wwzFuVp9sY" // Adicione o link aqui
    },
    {
      img: "portfolioprojeto.png",
      titulo: "Botini Portfólio",
      descricao: "Plataforma para apresentar projetos e presença digital.",
      tecnologias: "React Vite, Javascript, Bootstrap",
      link: "" // Adicione o link aqui
    },
    {
      img: "basecreative.png",
      titulo: "Base Creative Network V2",
      descricao: "Base de GTA Roleplay, para donos de servidores criarem sua cidade virtual.",
      tecnologias: "Lua, Javascript, Fivem Creative Network",
      link: "https://www.youtube.com/watch?v=ZI3xz5nCdig&t=101s" // Adicione o link aqui
    }
  ];

  return (
    <div id="projetos" className="container text-center mt-6 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-white">Meus Projetos</h1>

      <Slider {...settings}>
        {projetos.map((projeto, index) => (
          <div key={index} className="p-4">
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="card fundo rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 h-full neon-border text-white ">
                <img
                  src={projeto.img}
                  className="card-img-top w-full h-48 object-cover"
                  alt={projeto.titulo}
                />
                <div className="card-body p-5 h-56">
                  <h5 className="card-title text-xl font-semibold text-gray-800">{projeto.titulo}</h5>
                  <p className="card-text text-gray-600 mt-3">{projeto.descricao}</p>
                  <p className="text-sm text-gray-500 mt-2"><strong>Tecnologias:</strong> {projeto.tecnologias}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Projetos;
