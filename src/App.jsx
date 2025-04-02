import React from 'react'
import './App.css'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Sobremim from './components/SobreMim'
import Projetos from './components/Projetos'
import Habilidades from './components/Habilidades'
import Certificados from './components/Certificados'
import Contato from './components/Contato'
function App() {

  return (
    <>
      <Header />
      <Inicio />
      <Sobremim />
      <Projetos />
      <Habilidades />
      <Certificados />
      <Contato />
    </>
  )
}

export default App
