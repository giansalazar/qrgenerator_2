import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NavbarQRG } from './NavbarQRG.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarQRG></NavbarQRG>
    <App />
  </StrictMode>,
)
