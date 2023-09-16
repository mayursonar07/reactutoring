import React from "react";
import { ReactDOM, createRoot } from "react-dom/client";
import App from "./App";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
    
);
