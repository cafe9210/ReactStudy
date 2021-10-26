import React, { Component } from 'react';
import FppContainer from '../containers/FppContainer';
// import Epp from './Epp';

class Bpp extends Component {
    render() {
      return (
        <div>
          <h1>Bpp</h1>  
          <h1>{this.props.num}</h1>
          <button onClick={this.props.onInc}>+버튼</button>
          <button onClick={this.props.onDec}>-버튼</button>
          
          <FppContainer/>
            {/* <Epp 
            num={this.props.num}
            onInc={this.props.onInc}
            onDec={this.props.onDec}
            />  */}
            {/* 컴포넌트끼리는 인수를 주고받을 수 있다. */}
            {/* 부모 자식 관계일때 컨테이너를 하나더 안만들고 사용가능하다. */}
        </div>
      );
    }
  }
  
export default Bpp;