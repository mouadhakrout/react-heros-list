import initialState from './initialState';
import {FETCH_HEROS, RECEIVE_HEROS , FETCH_HERO , RECEIVE_HERO} from '../actions/actionTypes';

export default function HerosRequest(state = initialState.heros, action) {
    let newState;
    switch (action.type) {
        case FETCH_HEROS:
            console.log('FETCH_HEROS Action')
            return action;
        case RECEIVE_HEROS:
            newState = action.heros;
            console.log('RECEIVE_HEROS Action')
            return newState;
        default:
            return state;
    }
}
const hero = function HeroRequest(state = initialState.hero, action) {
    let newState;
    switch (action.type) {
        case FETCH_HERO:
            console.log('FETCH_HERO BY ID Action')
            return action;
        case RECEIVE_HERO:
            newState = action.hero;
            console.log('RECEIVE_HEROS BY ID Action')
            return newState;
        default:
            return state;
    }
}
export {hero};