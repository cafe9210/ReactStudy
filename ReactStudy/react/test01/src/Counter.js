import { useReducer } from "react";

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}

const Counter = ()=>{
    const [state, dispatch] = useReducer(reducer, {value:10});

    return(
        <div>
            <p>현재 값 <b>{state.value}</b></p>
            <button onClick={()=>{dispatch({type:'INCREMENT'})}}>덧셈</button>
            <button onClick={()=>{dispatch({type:'DECREMENT'})}}>뺄셈</button>
        </div>
    )
}

export default Counter;