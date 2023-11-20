import React from 'react';
import './LandinPage.css'
import { Button, Col, Row, Container } from 'react-bootstrap';
import background from '../../assets/background.png'
import { Link } from 'react-router-dom';


const LandinPage = () => {
  return (
    <>
      {/*       <Container >
        <Row className='banner'>

          <Col className='img_banner' sm={8}>
            <img src={background}  alt="" />
          </Col>


          <Col className='frase_banner' sm={5} >
            <p style={{marginBottom: '25px'}}>
              Bem vindo ao Fica Fri.io!
            </p>
            <h1 style={{marginBottom: '25px'}}>
              Resfriando sua rotina desde 2023.
            </h1>
            <p style={{marginBottom: '25px'}}>
              A agenda que equilibra seu tempo com sua saúde mental.
            </p>
            <Button className='botao_landin ' as={Link} to='login'>Entrar</Button>
          </Col>
        </Row>
      </Container>
      <Container fluid style={{ width: '93%', borderRadius: '25px',marginTop: '100px'}} className='cartaz1'>
        <Row >
          <Col className='col-md-6' style={{padding: '0px 0px 25px 25px'}}>
            <h1 className='text-center' style={{ marginTop: '50px', marginBottom: '15px' }}>
              O que é o Fica Fri.io?
            </h1>
            <p className=' texto_cartaz text-center'>
              Cuide da sua saúde mental de forma prática e eficaz com a nossa agenda. Priorize o seu bem-estar, encontre equilíbrio e viva uma vida mais saudável e balanceada. Com o Fica Fri.io, você tem sua rotina na palma da sua mão.
            </p>
            <Button className='botao_landin2'>
            Nos conheça!
            </Button>
            <div className='col-md-6'>
              <img className='img-fluid' alt="" />
            </div>
          </Col>
        </Row>
      </Container> */}

      <div className='landin_page'>
        <section className='banner'>
          <div className='frase_banner'>

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
          </div>
        </section>
      </div>
<Container fluid style={{ width: '75%', borderRadius: '25px'}} className='cartaz1'>
        <Row >
          <Col className='col-md-6' style={{padding: '0px 0px 25px 25px'}}>
            <h1 className='text-center' style={{ marginTop: '50px', marginBottom: '15px' }}>
              O que é o Fica Fri.io?
            </h1>
            <p className=' texto_cartaz text-center'>
              Cuide da sua saúde mental de forma prática e eficaz com a nossa agenda. Priorize o seu bem-estar, encontre equilíbrio e viva uma vida mais saudável e balanceada. Com o Fica Fri.io, você tem sua rotina na palma da sua mão.
            </p>
            <Button className='botao_landin2'>
            Nos conheça!
            </Button>
            <div className='col-md-6'>
              <img className='img-fluid' alt="" />
            </div>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default LandinPage