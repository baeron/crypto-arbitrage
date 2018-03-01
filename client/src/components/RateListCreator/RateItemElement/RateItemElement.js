import React from 'react';
import classes from './RateItemElement.css';

const rateItemElement = (props) => {
    //const temp = props.rateItemInfo;
    //console.log(props.rateItemInfo);
    const  rateItemElement = Object.keys(props.rateItemInfo)
    .map( rateKey => {
        return <p key={rateKey}>{props.rateItemInfo[rateKey]}</p>
    }); 
    return (
        <div style={{height: '300px', width: '300px'}} className={classes.RateItemElement}>
            {/*<p>Rate item Element work</p>*/}
            {rateItemElement}
        </div>
    )
};

export default rateItemElement;