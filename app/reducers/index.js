import {combineReducers} from 'redux'
import MovieListReducer from './MovieListReducer'
import ActorListReducer from './ActorsListReducer'
import TrailerListReducer from './TrailersListReducer'
import ReviewsListReducer from './ReviewsListReducer'

export default combineReducers({
    movies: MovieListReducer,
    actors: ActorListReducer,
    trailer: TrailerListReducer,
    reviews: ReviewsListReducer,

})