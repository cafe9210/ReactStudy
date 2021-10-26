import React, { Component } from 'react';
import FppContainer from '../containers/FppContainer';

class Cpp extends Component {
    render() {
      return (
        <div>
          <h1>CPP</h1>  
          <h1>{this.props.num}</h1>
          <button onClick={this.props.onDog}>강아지</button>
          <button onClick={this.props.onCat}>고양이</button>
          
          <FppContainer/>
        </div>
      );
    }
  }
  
export default Cpp;