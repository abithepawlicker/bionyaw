import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './router/Router.jsx'
import './styles/layout.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
