import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
//import "./assets/css/index.css";
import App from "./components/App";

library.add(fab, fas);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
