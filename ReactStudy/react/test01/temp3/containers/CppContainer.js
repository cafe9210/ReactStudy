import { useDispatch, useSelector } from 'react-redux';
import Cpp from '../components/Cpp'
import {dog,cat} from '../modules/cpp' //함수를 끌고 올때에는 {}

//hook
const CppContainer=()=>{
    const num=useSelector(state=>state.cppReducer.num); //hook을 쓰고 있다.
    const dispatch=useDispatch();
    return(
      <Cpp num={num}
        onDog={()=>dispatch(dog())}
        onCat={()=>dispatch(cat())}
      />
    )
  };

export default CppContainer;