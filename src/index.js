import React from 'react';
import { LoginProvider } from './components/store/LoginContext';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <LoginProvider>
    <App /> 
    </LoginProvider>);

 