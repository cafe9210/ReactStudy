import { createAction,handleActions } from "redux-actions";

const DOG = 'DOG';
const CAT = 'CAT';

export const dog = createAction(DOG)
export const cat = createAction(CAT)
const initState = {
    num:100
}

//reducers
//export const reducers = handleActions({
export default handleActions({
    [DOG]: (state, action) => ({ num:state.num + 1}),
    [CAT]: (state, action) => ({ num:state.num - 1}),
    }, 
    initState
);