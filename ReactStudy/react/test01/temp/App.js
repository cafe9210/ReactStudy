import React, { Component } from 'react';
import BppContainer from './containers/BppContainer';
// import CppContainer from './containers/CppContainer';
// import DppContainer from './containers/DppContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <BppContainer/>
        {/* <CppContainer/> */}
        {/* <DppContainer/> */}
      </div>
    );
  }
}

export default App;