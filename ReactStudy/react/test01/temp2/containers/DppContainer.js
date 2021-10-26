import { useDispatch, useSelector } from 'react-redux';
import Dpp from '../components/Dpp';
import {inc,dec} from '../modules/cpp'; //함수를 끌고 올때에는 {}

//hook
// const DppContainer=()=>{
//     const num=useSelector(state=>state.cppReducer.num); //hook을 쓰고 있다.
//     const dispatch=useDispatch();
//     return(
//       <Dpp num={num}
//         onInc={()=>dispatch(inc())}
//         onDec={()=>dispatch(dec())}
//       />
//     )
// };

// state만 사용할때
// const DppContainer=()=>{
//     const num=useSelector(state=>state.cppReducer.num); //hook을 쓰고 있다.
//     return(
//       <Dpp num={num}/>
//     )
// };

// dispatch만 사용할때
const DppContainer=()=>{
    const dispatch=useDispatch();
    return(
      <Dpp 
        onInc={()=>dispatch(inc())}
        onDec={()=>dispatch(dec())}
      />
    )
};

export default DppContainer;