import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
import { ThemeProvider } from 'styled-components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
    
  </React.StrictMode>
)
