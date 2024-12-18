//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import Counter from "./component/Counter.jsx";
//render your react application
let inicio = 0;
const root =ReactDOM.createRoot(document.getElementById('app'))
setInterval(() => {
    
    const cuarto = Math.floor(inicio / 1000);
    const tercero = Math.floor(inicio / 100);
    const segundo = Math.floor(inicio / 10);
    const primero = Math.floor(inicio / 1);
    inicio++;
    root.render(
        <Counter uno = {primero} dos = {segundo} tres ={tercero} cuatro = {cuarto}></Counter>
    )
        
}, 1000);



