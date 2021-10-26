import { createAction,handleActions } from "redux-actions";

const INC = 'INC';
const DEC = 'DEC';

export const inc = createAction(INC)
export const dec = createAction(DEC)
const initState = {
    num:100
}

//reducers
//export const reducer = handleActions({
export default handleActions({
    // [INC]: (state, action) => ({ num:state.num + action.payload}),
    // [INC]: (state, {payload}) => ({ num:state.num + payload}),
    [INC]: (state, {payload:data}) => {
        return { num:state.num + data.a}
    },
    [DEC]: (state, action) => ({ num:state.num - 1}),
    }, 
    initState
);