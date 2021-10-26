import { createAction,handleActions } from "redux-actions";

const INC = 'CPP/INC';
const DEC = 'CPP/DEC';

export const inc = createAction(INC)
export const dec = createAction(DEC)
const initState = {
    num:100
}

//reducers
//export const reducers = handleActions({
export default handleActions({
    [INC]: (state, action) => ({ num:state.num + 1}),
    [DEC]: (state, action) => ({ num:state.num - 1}),
    }, 
    initState
);