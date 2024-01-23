import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ColorModeScript,ChakraProvider } from '@chakra-ui/react';
import ColorModeSwitcher from './ColorModeSwitcher';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
    
    <ColorModeScript/>
    <ChakraProvider>

    <ColorModeSwitcher/>
    {/* colourModeSwitcher is use the change the theme of the page to dark or light */}

    <App />
    </ChakraProvider>

    </StrictMode>
    
);

