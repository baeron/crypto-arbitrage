import React, { Component } from 'react';
import Aux from '../../hoc/AuxCmponent';
import RateElement from '../../components/RateElement/RateElement';

class RatesBuilder extends Component {
    state = {
        ratesList: [
            {
                id: 1,
                fromStockName: 'first',
                fromTockenName: 'tokenNameFrom',
                fromTokenRate: 111,
                toStockName: 'second',
                toTockenName: 'tokenNameTo',
                toTokenRate: 222,
            },
            {
                id: 1,
                fromStockName: 'thirth',
                fromTockenName: 'tokenNameFrom',
                fromTokenRate: 333,
                toStockName: 'forth',
                toTockenName: 'tokenNameTo',
                toTokenRate: 444,
            }
        ]
    }
    render() {  
        return (
            <Aux>
                <RateElement rateData={this.state.ratesList[0]}/>
                <RateElement rateData={this.state.ratesList[1]}/>
            </Aux>
        );
    }
};

export default RatesBuilder;