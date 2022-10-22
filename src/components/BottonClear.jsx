import React from "react";
import '../css/Botton.css';

const BottonClear = (props) => (
    <button 
    className="btn btn-clear"
    onClick={props.manejarClear}>
        Borrar
    </button>
);

export default BottonClear;