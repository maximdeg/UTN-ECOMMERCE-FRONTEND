import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalContextProvider } from './context/GlobalContext.jsx';
import App from './App.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthContextProvider>
            <GlobalContextProvider>
                <App />
            </GlobalContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
);
