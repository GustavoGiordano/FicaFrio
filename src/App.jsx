import './App.css'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';// Ativa a estilização do bootstrap(PF N APAGUE);
import SobreNos from './Pages/SobreNos/SobreNos.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import Agenda from './Pages/Agenda/Agenda.jsx'


function App() {
  

  return (
    <>
      <Router>
      <Layout>
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route  path='/sobre_nos' Component={SobreNos}/>
          <Route  path='/agenda' Component={Agenda}/>

        </Routes>
      </Layout>
      </Router>
      
      
      
      
    </>
  )
}

export default App
