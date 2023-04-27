import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import {extendTheme, useColorModeValue} from '@chakra-ui/react'
import {mode} from "@chakra-ui/theme-tools";
import App from './App.jsx'
import './index.css'

const colors = {
    dark: {
        900: '#212529',
        800: '#011627',
        700: '#252422',
        600: '#202020'
    },
    light: {
        900: '#eff7f6',
        500: '#c5d5ea',
        100: '#ebf2fa'


    },
    brand: {
        red: '#f21b3f',
        redpink: '#ff006e',
        700: '#2a69ac'
    }
}
const theme = extendTheme({
    colors,
    styles: {
        global: (props) => (
            {
                body: {
                    bg: mode('#F0F8FF', '#131316')(props)
                }
            }
        )
    }
})
ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)
