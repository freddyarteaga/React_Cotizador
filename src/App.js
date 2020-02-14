import React, { Component } from 'react';
import styled from '@emotion/styled'
import Header from './components/Header'
import Formulario from './components/Formulario'

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`


function App () {
  return(
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros' 
      />
      <ContenedorFormulario>
        <Formulario />
      </ContenedorFormulario>
    </Contenedor>
    
  )
}

export default App;
