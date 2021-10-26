import { connect, useDispatch, useSelector } from 'react-redux';
import Cpp from '../components/Cpp'
import {inc,dec} from '../modules/cpp' //함수를 끌고 올때에는 {}

//hook
const CppContainer=()=>{
    const num=useSelector(state=>state.cppReducer.num); //hook을 쓰고 있다.
    const dispatch=useDispatch();
    return(
      <Cpp num={num}
        onInc={()=>dispatch(inc())}
        onDec={()=>dispatch(dec())}
      />
    )
  };

export default CppContainer;