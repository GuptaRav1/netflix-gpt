import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from '../src/components/Body'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body />
  </StrictMode>,
)
