import React, { Component } from 'react';
import Aux from '../../hoc/AuxCmponent';
import RateElement from '../../components/RateElement/RateElement';
import Modal from '../../components/UI/Modal/Modal';
import RateSummary from '../../components/RateSummary/RateSummary';

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
        ],
        showModal: false

    }

    openModalModalHandler = () => {
        this.setState({showModal: true});
    }

    closeModalModalHandler = () => {
        this.setState({showModal: false});
    }

    render() {
        return (
            <Aux>
                <Modal show={this.state.showModal} modalClosed={this.closeModalModalHandler}>
                    <RateSummary rateData={this.state.ratesList[0]}/>
                </Modal>
                <RateElement onClick={this.openModalModalHandler} rateData={this.state.ratesList[0]} />
                <RateElement onClick={this.openModalModalHandler} rateData={this.state.ratesList[1]}/>
            </Aux>
        );
    }
};

export default RatesBuilder;