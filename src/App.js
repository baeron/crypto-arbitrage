import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import RatesBuilder from './containers/RatesBuilder/RatesBuilder';  //Home
import HowItsWork from './containers/HowItsWork/HowItsWork';        //Howe it`s work
import AboutUs from './containers/AboutUs/AboutUs';                 //about
import RateList from './containers/RateList/RateList';              //Rates

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/about_us' component={AboutUs} />
            <Route path="/how_its_work" component={HowItsWork} />
            <Route path="/rates" component={RateList} />
            <Route path='/' exact component={RatesBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
