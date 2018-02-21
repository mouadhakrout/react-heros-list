import initialState from './initialState';
import {FETCH_HEROS, RECEIVE_HEROS} from '../actions/actionTypes';

export default function stuff(state = initialState.heros, action) {
    let newState;
    switch (action.type) {
        case FETCH_HEROS:
            console.log('FETCH_STUFF Action')
            return action;
        case RECEIVE_HEROS:
            newState = action.heros;
            console.log('RECEIVE_STUFF Action')
            return newState;
        default:
            return state;
    }
}