//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import {Card} from "./component/card.jsx";
//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Card title="test" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sapiente tempore facere quam consectetur repudiandae accusamus velit nulla nam, maxime quidem quia odio blanditiis, consequatur dolor molestiae pariatur beatae sequi."/>);

