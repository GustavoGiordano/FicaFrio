import React from 'react'
import Logo from '../../assets/Logo.png'
import loginUsuario from '../../assets/loginUsuario.png'
import loginCadeado from '../../assets/loginCadeado.png'
import { Card, Button } from 'react-bootstrap';
import "./Login.css"


const Login = () => {
  return (
    /*<div className="card">
      <img className='logo' src={Logo} alt="Logo" />
      <div className="card-content">
        <h2>Pronto para ficar frio?</h2>
        <div className="caixa1">Senha</div>
        <div className="caixa1">Senha</div>
        <div className="caixa2">Esqueceu sua senha?</div>
        <Button>Continuar</Button>
        <p className='link_cadastro'>Não possui conta? <a href="">Clique aqui e faça seu cadastro</a></p>
      </div>
    </div >*/

    <div className="fundo">
      <Card className="text-center">
        
        <Card.Link href="/" className='logo'>
          <img
            src={Logo}
            alt="Logo"
            width={100}
          />
        </Card.Link>
        
        <Card.Title><strong>Pronto para ficar frio?</strong></Card.Title>

        <Card body className='senha'>
          <img
            className='loginUsuario'
            src={loginUsuario}
            alt="loginUsuario"
          />
          Senha
        </Card>

        <Card body className='senha'>
          <img
            className='loginCadeado'
            src={loginCadeado}
            alt="loginCadeado"
          />
          Senha
        </Card>

        <Button className='esqueceuSenha'>
          <strong>Esqueceu sua senha?</strong>
        </Button>

        <Button className='continuar'>
          <strong>Continuar</strong>
        </Button>

        <Card.Text className='naoPossuiConta'>
          Não possui conta? -
          <Card.Link href="cadastro">
            Clique aqui e faça seu cadastro
          </Card.Link>
        </Card.Text>

      </Card>
    </div>
  )
}

export default Login
