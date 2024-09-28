import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

import { ThemeProvider } from './app/providers/ThemeProvider';

import './app/assets/styles/style.css';

const root = document.getElementById('root') as HTMLDivElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
