import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import ReactDom from 'react-dom'
import React from 'react'
import './main.css'
// import './index.css'
// import App from './App.jsx'
import { TotalComp } from './TotalComp'
// const tick = () => {
  createRoot(document.getElementById('root')).render(<TotalComp/>)
// }
// setInterval(() => {tick()},1000)
