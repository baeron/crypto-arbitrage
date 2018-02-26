import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import RatesBuilder from './containers/RatesBuilder/RatesBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <RatesBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
