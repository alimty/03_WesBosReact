import React from "react"; // here we have to import react each time
import { render } from "react-dom";  // render method taken from library
import StorePicker from "./components/StorePicker";
import App from "./components/App";
import "./css/style.css";



render(<App/>,  document.querySelector('#main'));
