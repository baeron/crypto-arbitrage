import React from 'react';
import classes from './RateElement.css';

const rateElement = (props) => {
    const rateData = Object.keys(props.rateData)
        .map( rateKey => {
            return <p key={rateKey}>{props.rateData[rateKey]}</p>
        }); 
    return (
        <div className={classes.RateElement} onClick={props.onClick}>
            <p>Rate Element</p>
            {rateData}
        </div>
    )
};

export default rateElement;