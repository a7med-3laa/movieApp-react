import {ERROR_MOVIE, LOADING_MOVIE, SUCCESS_MOVIE} from "./types"
import axios from 'axios'

export const fetData = () => {
    return (dispatch) => {
        dispatch({type: LOADING_MOVIE});
        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a06a65f8e9b7f4e31d4cdee71b82fc83')
            .then(resp => {
                console.log("Net:" + JSON.stringify(resp.data.results));
                dispatch({type: SUCCESS_MOVIE, data: resp.data.results})
            }).catch(error => {
            console.log("error: d " + error);

            dispatch({type: ERROR_MOVIE, data: "Error" + error.message})

        })


    }
};