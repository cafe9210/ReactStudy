import { connect, useDispatch, useSelector } from 'react-redux';

import Bpp from '../components/Bpp'
import {inc,dec} from '../modules/bpp' //함수를 끌고 올때에는 {}

//hook
const BppContainer=()=>{
    const num=useSelector(state=>state.bppReducer.num); //hook을 쓰고 있다.
    const dispatch=useDispatch();
    return(
      <Bpp num={num}
        onInc={(n)=>dispatch(inc(n))}

        onDec={()=>dispatch(dec())}
      />
    )
  };

export default BppContainer;
// 수정전
// <button onClick={this.props.onInc(100)}>-버튼</button>
// 수정후
// <button onClick={ ()=>{this.props.onInc(100)} }>증가</button> 

// 수정전
// onInc={()=>dispatch(inc())}
// 수정후
// onInc={(n)=>dispatch(inc(n))}