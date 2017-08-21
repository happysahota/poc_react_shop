import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

var siteWrapper = document.getElementById('site-wrapper');

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, siteWrapper);
registerServiceWorker();
