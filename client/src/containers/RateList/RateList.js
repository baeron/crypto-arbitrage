import React, { Component } from 'react';
import axios from '../../axios-rates';

import Aux from '../../hoc/AuxCmponent';
import RateListCreator from '../../components/RateListCreator/RateListCreator';
import Spinner from '../../components/UI/Spinner/Spinner';
//import Modal from '../../components/UI/Modal/Modal';
//import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class RateList extends Component {
    state = {
        ratesList: null,
        loading: false,
        showModal: false
    };
    componentDidMount(){
        axios.get('/rate')
            .then(response => {
                this.setState({ratesList: response.data, loading: true});
                console.log(response);
            })
            .catch(error => {
                this.setState({loading: false});
                console.log(error);
            });
    }

    render() {
        let ratesListComponent = <Spinner />
        if (this.state.ratesList || this.state.loading) {
            ratesListComponent = (
                <div>
                    {/*<p>Main container work</p>*/}
                    <RateListCreator ratesElements={this.state.ratesList}/>
                </div>
            )
        }
        /*
        let info = (
            <Aux>
                <p>RateList page</p>
                <RateListCreator ratesList={this.state.ratesList}/>
            </Aux>
        );
        if(!this.state.loading) {
            info = <Spinner />
        }*/
        return(
            <Aux>
                {ratesListComponent}
            </Aux>
        )
    }
};
export default RateList;
//export default withErrorHandler(RateList, axios);
/*
{<Modal show={this.state.loading} modalClosed={this.closeModalModalHandler}>}
                    {info}
                {</Modal>}
*/