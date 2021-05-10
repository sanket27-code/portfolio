import React from 'react';

const SkillCard = (props) => {
    return(
        <>
            
                <div className="card_container">
                    <div className="skill_card">
                        <div className="front">
                            <img src={props.service} alt="service"/>
                        </div>
                        <div className="back">
                            <h3>{props.title}</h3>
                            <p>{props.des}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default SkillCard;