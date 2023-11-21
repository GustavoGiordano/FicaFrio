import React from 'react';
import './LandinPage.css'
import { Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import peguin from '../../assets/peguin.png'
import ImgTempoeDinheiro from '../../assets/ImgTempoeDinheiro.png'
import ImgPostItAzul from '../../assets/ImgPostItAzul.png'
import ImgBurnOut from '../../assets/ImgBurnOut.png'



const LandinPage = () => {
  return (
    <>
      <div className='landin_page'>
        <section className='banner'>
          <div className='frase_banner'>
            <Row className='banner_ajuste'>
              <Col sm={4}>
                <img className='peguin' src={peguin} alt="" />

              </Col>
              <Col sm={4}>
                <p style={{ marginBottom: '25px' }}>
                  Bem vindo ao Fica Fri.io!
                </p>
                <h1 style={{ marginBottom: '25px' }}>
                  Resfriando sua rotina desde 2023.
                </h1>
                <p style={{ marginBottom: '25px' }}>
                  A agenda que equilibra seu tempo com sua saúde mental.
                </p>
                <Button className='botao_landin ' as={Link} to='login'>Entrar</Button>
              </Col>
            </Row>

          </div>
        </section>
        <section style={{ marginTop: '2.5%' }}>
          <Container  >
            <Row className='cartaz1' >
              <Col className='texto_cartaz'  >
                <h1 className='text-center' >
                  O que é o Fica Fri.io?
                </h1>
                <p className='text-center'>
                  Cuide da sua saúde mental de forma prática e eficaz com a nossa agenda. Priorize o seu bem-estar, encontre equilíbrio e viva uma vida mais saudável e balanceada. Com o Fica Fri.io, você tem sua rotina na palma da sua mão.
                </p>
                <Button className='botao_landin2'  >
                  Nos conheça!
                </Button>

              </Col>
              <Col className='img_cartaz1' >
                <div className='img_landin'>
                  <p className='text-center' >
                    Insira a sua imagem aqui!
                  </p>
                  <img alt="" />

                </div>

              </Col>
            </Row>
          </Container>
        </section>
        <section style={{ marginTop: '2.5%' }}>
          <Container>
            <Row className='cartaz_sobre_nos'>
              <Col className='economize' xs={1}>
                <img src={ImgTempoeDinheiro} className='img_ted' alt="" />

                <div className='text-center texto_economize'>
                  <h1 className='text-center' >
                    Economize seu tempo e dinheiro!
                  </h1>
                  <p className='text-center'>
                    Nossa agenda é a solução mais econômica e viável para você. Fornecemos uma ferramenta com o intuito de ser acessível e eficiente.
                    Descubra nossos planos e veja como somos a solução mais inteligente para seu negócio!
                  </p>
                  <Button className='botao_saibamais_1'  >
                    Saiba Mais!
                  </Button>
                </div>

              </Col>
              <Col className='porque_nos' xs={1}>
                <img src={ImgPostItAzul} className='img_ted' alt="" />

                <div className='text-center texto_porque_nos'>
                  <h1 className='text-center' >
                  Mas por que o Fica Fri.io?
                  </h1>
                  <p className='text-center'>
                  Fica Fri.io é uma escolha óbvia para quem busca qualidade, foco e intuitividade no cuidado em gestão de tempo. 
                  Nossos objetivos são claros: proporcionar uma boa experiência, ajudá-lo a manter o foco, melhorar sua produtividade e auxiliar na organização do seu bem-estar. 
                  Escolha Fica Fri.io transforme seu autocuidado.
                  </p>
                  <Button className='botao_saibamais_2'  >
                    Saiba Mais!
                  </Button>
                </div>
              </Col>
              <Col className='estresse' xs={1}>
                <img src={ImgBurnOut} className='img_ted' alt="" />

                <div className='text-center texto_porque_nos'>
                  <h1 className='text-center' >
                  O que é o Bournout?
                  </h1>
                  <p className='text-center'>
                  Muitas pessoas sofrem com a Síndrome de  Burnout, um distúrbio com sintomas de estresse emocional e físico ocasionado por situações de trabalho desgastantes. 
                  Com o Fica Fri.io, você a previne com estratégias que diminuem o estresse e a pressão no trabalho, resultando em organização eficiente para suas tarefas.
                  </p>
                  <Button className='botao_saibamais_3'  >
                    Saiba Mais!
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>


    </>
  )
}

export default LandinPage