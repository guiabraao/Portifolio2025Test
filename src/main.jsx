import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/index.jsx'
import AboutMe from './Pages/AboutMe/index.jsx'
import Projetos from './Pages/Projetos/index.jsx'
import Contato from './Pages/Contato/index.jsx'
import AppRouter from './Routes/route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
