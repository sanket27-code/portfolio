import React from 'react';
import logo from '../images/home-bg.jpg';

const Cards = (props) => {
    return(
        <>
            <div className="card">
                <img src={props.pic} alt="skill-1"/>
                <div className="card_content">
                    <h5>{props.title}</h5>
                    <p>{props.des}</p>
                </div>
            </div>
        </>
    )
}

export default Cards;