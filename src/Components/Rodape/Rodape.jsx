import React from 'react'
import './Rodape.css'
import Logo from '../../assets/Logo.png'
import { Row, Col, Footer} from 'react-bootstrap'
import { Link } from 'react-router-dom'




const Rodape = () => {
  
  return (
    <>
      <Footer>
        <Row>
          <Col md={4}>
            <ul>
              <li><img src={Logo} alt="LogoTipo"/></li>
              <h1>Redes Sociais:</h1>
            </ul>
              <div className='social-links'>
                
              </div>
          </Col>

          <Col md={4}>
            <h1>Links Uteis</h1>
              <ul>
                <li>Soluções</li>
                <li>Recursos</li>
                <li>Planos</li>
                <li>Sobre Nós</li>
                <li>Fale Conosco</li>
              </ul>
          </Col>

          <Col md={4}>
            <h1>Boletim de Notícias</h1>
            <p>Acompanhe o projeto e receba dicas de organização</p>
            
          </Col>
        </Row>

        <div className='direitos-reservados'>
          <h1>2023 Fica Fri.io - Todos direitos reservados</h1>
        </div>

      </Footer>
    </>
  )
}

export default Rodape