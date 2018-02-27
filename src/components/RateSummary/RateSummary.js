import React from 'react';
import Aux from '../../hoc/AuxCmponent';

const rateSummary = (props) => {
    const rateInfo = Object.keys(props.rateData)
    .map( rateKey => {
        return <p key={rateKey}>{props.rateData[rateKey]}</p>
    }); 
    return (
        <Aux onClick={props.onClick}>
            {rateInfo}
            <input type="number" placsholder="Enter from"/>
            <input type="number" placsholder="Enter to"/>
        </Aux>
    );
}; 

export default rateSummary;