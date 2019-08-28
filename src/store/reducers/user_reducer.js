import * as ACTION_TYPES  from '../actions/actions_types';


const initialState = {
    user_input: ''
}

const UserReducer = (state = initialState , action) => {
    switch(action.type){
        case ACTION_TYPES.USER_INPUT:
                return {
                    ...state,
                    user_input: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;
