import {ERROR_TRAILERS, LOADING_TRAILERS, SUCCESS_TRAILERS} from "./types"
import axios from 'axios'

export const fetData = (ID) => {
    return (dispatch) => {
        dispatch({type: LOADING_TRAILERS});
        axios.get('http://api.themoviedb.org/3/movie/' + ID + '/videos?api_key=a06a65f8e9b7f4e31d4cdee71b82fc83')
            .then(resp => {
                console.log("Net:" + JSON.stringify(resp.data.results));
                dispatch({type: SUCCESS_TRAILERS, data: resp.data.results})
            }).catch(error => {
            console.log("error: d " + error);

            dispatch({type: ERROR_TRAILERS, data: "Error" + error.message})

        })


    }
};