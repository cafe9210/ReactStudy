import { useDispatch, useSelector } from 'react-redux';

import Fpp from '../components/Fpp';
import {inc,dec} from '../modules/bpp'; //함수를 끌고 올때에는 {}
import {dog,cat} from '../modules/cpp';

//hook
const FppContainer=()=>{
    const num=useSelector(state=>state.bppReducer.num); //hook을 쓰고 있다.
    const num2=useSelector(state=>state.cppReducer.num);

    const dispatch=useDispatch();
    return(
      <Fpp num={num}
        onInc={()=>dispatch(inc())}
        onDec={()=>dispatch(dec())}

        num2={num2}
        onDog={()=>dispatch(dog())}
        onCat={()=>dispatch(cat())}
      />
    )
  };

export default FppContainer;