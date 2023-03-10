import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals'
import {Provider} from "react-redux";

import store from "./store/store";
import App from './App';
import './index.css';
//
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "rc-slider/assets/index.css";

//STYLE
import "./styles/index.scss";
import "./index.css";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css"


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();