import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'


import App from './App.tsx'
import './lnChange/lnChange.ts'
// import './routes/route.tsx'

import './styles/index.css'





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/asoads">
      <App />
    </BrowserRouter>
  </StrictMode>
)
