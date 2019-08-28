import * as ACTIONS_TYPES from './actions_types';


export const SUCCESS = {
    type: ACTIONS_TYPES.SUCCESS
}

export const FAILURE = {
    type: ACTIONS_TYPES.FAILURE
}

export const success = () =>{
    return {
        type: ACTIONS_TYPES.SUCCESS
    }
}

export const failure = () =>{
    return {
        type: ACTIONS_TYPES.FAILURE
    }
}


export const user_input = (text) =>{
    return {
        type: ACTIONS_TYPES.USER_INPUT,
        payload: text
    }
}


export const login_success = () =>{
    return {
        type: ACTIONS_TYPES.LOGIN_SUCCESS
    }
}


export const login_failure = () =>{
    return {
        type: ACTIONS_TYPES.LOGIN_FAILURE
    }
}

export const add_profile = (profile) =>{
    return {
        type: ACTIONS_TYPES.ADD_PROFILE,
        payload:profile
    }
}


export const remove_profile = () =>{
    return {
        type: ACTIONS_TYPES.REMOVE_PROFILE
    }
}