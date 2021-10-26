import { connect, useDispatch, useSelector } from 'react-redux';

import Bpp from '../components/Bpp'
import {inc,dec} from '../modules/bpp' //함수를 끌고 올때에는 {}

//hook
const BppContainer=()=>{
    const num=useSelector(state=>state.bppReducer.num); //hook을 쓰고 있다.
    const dispatch=useDispatch();
    return(
      <Bpp num={num}
        onInc={()=>dispatch(inc())}
        onDec={()=>dispatch(dec())}
      />
    )
  };

export default BppContainer;