import {ERROR_ACTORS, LOADING_ACTORS, SUCCESS_ACTORS} from "../actions/types"

const INITIAL_STATE = {loading: false, data: [], error: ""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOADING_ACTORS:
            return {...INITIAL_STATE, loading: true};
        case SUCCESS_ACTORS:
            return {...INITIAL_STATE, loading: false, data: action.data};
        case ERROR_ACTORS:
            return {...INITIAL_STATE, loading: false, error: action.error};
        default:
            return state;


    }

}