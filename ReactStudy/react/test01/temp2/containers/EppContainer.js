import { useDispatch, useSelector } from 'react-redux';
import Epp from '../components/Epp';
import {inc,dec} from '../modules/bpp'; //함수를 끌고 올때에는 {}

//hook
const EppContainer=()=>{
    const num=useSelector(state=>state.bppReducer.num); //hook을 쓰고 있다.
    const dispatch=useDispatch();
    return(
      <Epp num={num}
        onInc={()=>dispatch(inc())}
        onDec={()=>dispatch(dec())}
      />
    )
};
export default EppContainer;