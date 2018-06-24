import {ERROR_TRAILERS, LOADING_TRAILERS, SUCCESS_TRAILERS} from "../actions/types"

const INITIAL_STATE = {loading: false, data: [], error: ""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOADING_TRAILERS:
            return {...INITIAL_STATE, loading: true};
        case SUCCESS_TRAILERS:
            return {...INITIAL_STATE, loading: false, data: action.data};
        case ERROR_TRAILERS:
            return {...INITIAL_STATE, loading: false, error: action.error};
        default:
            return state;


    }

}