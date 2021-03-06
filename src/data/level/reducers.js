
import {level_loading_start, level_loading_failed, level_loading_success, select_level} from './actionTypes';

const initState = {
    isLoadingLevel: false,
    activeLevel: 1,
    selectedLevel: 1
}

const LevelReducer = (state = initState, actions) => {
    switch(actions.type){
        case level_loading_start:
            return {...state, ...actions.payload}
        case level_loading_success:
            return {...state, ...actions.payload}
        case select_level:
            return {...state, ...actions.payload}
        default:
            return state;
    }
}

export default LevelReducer;