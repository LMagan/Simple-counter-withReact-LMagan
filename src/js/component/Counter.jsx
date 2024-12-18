import React from "react";

const Counter = ({uno,dos,tres,cuatro}) => {

    return (
        <div className="marco">
            <div className="clock">
                <i className="far fa-clock"></i>
            </div>
            
            <div className="four">{cuatro % 10}</div>
            <div className="three">{tres % 10}</div>
            <div className="two">{dos % 10}</div>
            <div className="one">{uno % 10}</div>
        </div>
    );
}



export default Counter