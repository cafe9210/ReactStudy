import React, { Component } from 'react';

class Dpp extends Component {
    render() {
        return (
            <div>
                <h1>Dpp</h1>
                <h1>{this.props.num}</h1>
                <button onClick={this.props.onInc}>덧셈</button>
                <button onClick={this.props.onDec}>뺄셈</button>
            </div>
        );
    }
}

export default Dpp;     