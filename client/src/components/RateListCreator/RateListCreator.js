import React from 'react';
import RateItemElement from './RateItemElement/RateItemElement';
//import Modal from '../UI/Modal/Modal';
//import RateSummary from '../RateSummary/RateSummary';

const rateListCreator = (props) => {
    const  rateInfo = Object.keys(props.ratesElements)
    .map( rateKey => {
        return (
            <RateItemElement key={rateKey} onClick={props.clicked} rateItemInfo={props.ratesElements[rateKey]}/>
        )
    }); 
    return (
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around"}}>
            {rateInfo}
        </div>
    )
};

export default rateListCreator;

/*
        <div>
            <Modal show={props.showModal} modalClosed={this.closeModalModalHandler}>
                <RateSummary rateData={props.ratesElements[0]}/>
            </Modal>
            <RateItemElement key={rateKey} onClick={props.clicked} rateItemInfo={props.ratesElements[rateKey]}/>
        </div>
*/