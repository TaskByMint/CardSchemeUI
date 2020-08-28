import {FETCH_TERMINALS, TOTAL_TERMINALS,SHOW_TERMINAL, SINGLE_TERMINAL, SHOW_BULK} from '../action/types'
const initialState = {
    terminals: [],
    singleTerminal: [],
    totalTerminals: [],
    single: [],
    bulk: {}
}
export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TERMINALS:
            return{
                ...state,
                terminals: action.payload.result,
                totalTerminals:action.payload.totalElements
            }
        case SHOW_TERMINAL:
            return{
                ...state,
                singleTerminal: action.payload
            }
        case SHOW_BULK:
            return{
                bulk: action.payload
            }
        case SINGLE_TERMINAL:
            return{
                ...state,
                single: action.payload
            }

        default:
            return state;

    }
}