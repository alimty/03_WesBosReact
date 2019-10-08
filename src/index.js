import React from "react"; // here we have to import react each time
import { render } from "react-dom"; // render method taken from library
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.querySelector("#main"));
