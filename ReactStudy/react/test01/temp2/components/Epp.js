import React, { Component } from 'react';

// class Epp extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Epp</h1>
//                 <h1>{this.props.num}</h1>
//                 <button onClick={this.props.onInc}>E증가</button>
//                 <button onClick={this.props.onDec}>E감소</button>
//             </div>
//         );
//     }
// }
const Epp=({num,onInc,onDec})=>{
            return (
            <div>
                <h1>Epp</h1>
                <h1>{num}</h1>
                <button onClick={onInc}>E증가</button>
                <button onClick={onDec}>E감소</button>
            </div>
        );
}
export default Epp;