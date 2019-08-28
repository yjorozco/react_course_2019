import * as ACTION_TYPES  from '../actions/actions_types';


const initialState = {
    stateprop1: false,
}

const Reducer1 = (state = initialState , action) => {
    switch(action.type){
        case ACTION_TYPES.SUCCESS:
            console.log("sucess");
            return {
                ...state,
                stateprop1: true
            }
        case ACTION_TYPES.FAILURE:
            console.log("failure");
            return {
                ...state,
                stateprop1:false
            }
        default:
            return state;
    }
}

export default   Reducer1;