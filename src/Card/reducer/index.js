import {combineReducers} from 'redux';
import cashflowReducer from './cashflow';
import terminalReducer from './terminal'
import groupReducer from './group'

export default combineReducers({
    terminal: terminalReducer,
    cashflow: cashflowReducer,
    group: groupReducer
});