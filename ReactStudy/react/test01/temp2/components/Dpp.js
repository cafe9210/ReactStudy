import React, { Component } from 'react';

class Dpp extends Component {
    render() {
        return (
            <div>
                <h1>Dpp</h1>
                <h1>{this.props.num}</h1>
                <button onClick={this.props.onInc}>λ§μ</button>
                <button onClick={this.props.onDec}>λΊμ</button>
            </div>
        );
    }
}

export default Dpp;     