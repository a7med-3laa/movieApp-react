import {ERROR_MOVIE, LOADING_MOVIE, SUCCESS_MOVIE} from "../actions/types"

const INITIAL_STATE = {loading: false, data: [], error: ""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOADING_MOVIE:
            return {...INITIAL_STATE, loading: true};
        case SUCCESS_MOVIE:
            return {...INITIAL_STATE, loading: false, data: action.data};
        case ERROR_MOVIE:
            return {...INITIAL_STATE, loading: false, error: action.error};
        default:
            return state;


    }

}