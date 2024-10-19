import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { New_react } from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
  <BrowserRouter>
    <New_react/>
  </BrowserRouter>,
  // </StrictMode>
)
