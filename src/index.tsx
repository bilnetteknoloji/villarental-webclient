import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";


import './index.css';
import App from './App';

//
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "rc-slider/assets/index.css";

//STYLE
import "./styles/index.scss";
import "./index.css";
import "./fonts/line-awesome-1.3.0/css/line-awesome.css"
import rootReducer from "./store";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);