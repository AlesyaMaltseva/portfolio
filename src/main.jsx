import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.scss'
import App from './App.jsx'
import Top from './Top.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top />
    <App />
  </StrictMode>,
)
