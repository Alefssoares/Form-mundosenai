import React from 'react'
import ReactDOM from 'react-dom/client'
import Step from './Components/Step.jsx'
import App from './App.jsx'
import { ChakraProvider, theme} from '@chakra-ui/react'
import { global } from './StyleGlobal/Global.js' 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme = {global}>
  
      <App />

    </ChakraProvider>
    
  </React.StrictMode>,
)
