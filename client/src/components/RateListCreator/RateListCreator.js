import React from 'react';
import RateItemElement from './RateItemElement/RateItemElement';
import classes from './RateListCreator.css';

const rateListCreator = (props) => {
    const  rateInfo = Object.keys(props.ratesElements)
    .map( rateKey => {
        return <RateItemElement key={rateKey} rateItemInfo={props.ratesElements[rateKey]}/>
    }); 
    return (
        <div>
            {/*<div>component work</div>*/}
            {rateInfo}
        </div>
    )
};

export default rateListCreator;