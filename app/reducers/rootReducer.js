import {combineReducers} from 'redux';
import heros , {hero} from './stuffReducer';
const rootReducer = combineReducers({
    heros,
    hero
});

export default rootReducer;