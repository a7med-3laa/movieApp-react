import {ERROR_REVIEW, LOADING_REVIEW, SUCCESS_REVIEW} from "../actions/types"

const INITIAL_STATE = {loading: false, data: [], error: ""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LOADING_REVIEW:
            return {...INITIAL_STATE, loading: true};
        case SUCCESS_REVIEW:
            return {...INITIAL_STATE, loading: false, data: action.data};
        case ERROR_REVIEW:
            return {...INITIAL_STATE, loading: false, error: action.error};
        default:
            return state;


    }

}