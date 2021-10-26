import { connect, useDispatch, useSelector } from 'react-redux';

import Bpp from '../components/Bpp'
//import Bpp from './components/Bpp'
//app폴더에서 찾은게 아니고 자기 위치에서를 찾으므로 찾을 수가 없다.
//상위 폴더에서 찾으라고 ..해줘야 한다
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