import {ERROR_ACTORS, LOADING_ACTORS, SUCCESS_ACTORS} from "./types"
import axios from 'axios'

export const fetData = (ID) => {
    return (dispatch) => {
        dispatch({type: LOADING_ACTORS});
        axios.get('http://api.themoviedb.org/3/movie/' + ID + '/casts?api_key=a06a65f8e9b7f4e31d4cdee71b82fc83')
            .then(resp => {
                console.log("actors:" + JSON.stringify(resp.data.cast));
                dispatch({type: SUCCESS_ACTORS, data: resp.data.cast})
            }).catch(error => {
            console.log("error: d " + error);
            dispatch({type: ERROR_ACTORS, data: "Error" + error.message})

        })


    }
};