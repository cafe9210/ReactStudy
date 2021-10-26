import React, { Component } from 'react';

class Fpp extends Component {
    render() {
        return (
            <div>
                <h1>Fpp</h1>
                <h1>{this.props.num}</h1>
                <button onClick={this.props.onInc}>+버튼</button>
                <button onClick={this.props.onDec}>-버튼</button>

                <h1>{this.props.num2}</h1>
                <button onClick={this.props.onDog}>+버튼</button>
                <button onClick={this.props.onCat}>-버튼</button>
            </div>
        );
    }
}

export default Fpp;