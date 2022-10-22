import React from "react";
import '../css/Botton.css';

function Botton(props) {
    return (
        <botton 
        className="btn"
        onClick={() => props.manejarClick(props.children)}>
            {props.children}
        </botton>
    );
};

export default Botton;