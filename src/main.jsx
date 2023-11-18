import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';// Ativa a estilização do bootstrap(PF N APAGUE);
/* criação dos sistemas de rotas */
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

/* import das paginas aq */
import NotFound  from './Pages/NotFound/NotFound.jsx';
import LandinPage from './Pages/LandinPage/LandinPage.jsx'
import Agenda from './Pages/Agenda/Agenda.jsx'
import SobreNos from './Pages/SobreNos/SobreNos.jsx'
import Login  from './Pages/Login/Login.jsx';
import Cadastro  from './Pages/Cadastro/Cadastro.jsx';
import Planos from './Pages/Planos/Planos.jsx';
import Calendario from './Pages/Calendario/Calendario.jsx';



/* todas as rotas estaram aq, entao tomem cuidado fecho, se quiserem puxar uma rota, e so pegar o nome que esta em PATH no parentes */
const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <NotFound/>,
    children:[
      {
        path:"/",
        element: <LandinPage/>
      },
      {
        path: 'sobre-nos',
        element: <SobreNos/>
      },
      {
        path: 'agenda',
        element: <Agenda/>
      },
      {
        path: 'calendario',
        element: <Calendario/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'cadastro',
        element: <Cadastro/>
      },
      {
        path: 'planos',
        element: <Planos/>
      },
      {

      }
      
    ]
  },
  
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
