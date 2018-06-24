import {ERROR_REVIEW, LOADING_REVIEW, SUCCESS_REVIEW} from "./types"
import axios from 'axios'

export const fetData = (ID) => {
    return (dispatch) => {
        dispatch({type: LOADING_REVIEW});
        axios.get('http://api.themoviedb.org/3/movie/' + ID + '/reviews?api_key=a06a65f8e9b7f4e31d4cdee71b82fc83')
            .then(resp => {
                console.log("Net:" + JSON.stringify(resp.data.results));
                dispatch({type: SUCCESS_REVIEW, data: resp.data.results})
            }).catch(error => {
            console.log("error: d " + error);

            dispatch({type: ERROR_REVIEW, data: "Error" + error.message})

        })


    }
};