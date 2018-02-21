import {combineReducers} from 'redux';
import heros from './stuffReducer';

const rootReducer = combineReducers({
    heros
});

export default rootReducer;