import './App.css'
import Navegacao from './Components/Navbar/Navbar.jsx'
import LandinPage from './Pages/LandinPage/LandinPage.jsx'
import Tarefas from './Components/Tarefas/OrganizadorTarefas.jsx'
import { BrowserRouter as Router,  } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  

  return (
    <>
      <Router>
      <Navegacao/>
      <Container className='contianer'  fluid>
      <Tarefas/>
        
        
      </Container>
      </Router>
      
      
      
      
    </>
  )
}

export default App
