import { getReviewsAC } from './../redux/ReviewsReducer';
import axios from 'axios'
import {Dispatch} from 'redux'
const BaseUrl = "https://alek-yachtimg-back.herokuapp.com/reviews"

export const getReviewsTC = () => (dispatch:Dispatch) => {
    axios.get(`${BaseUrl}`)
    .then((response) => {
        dispatch(getReviewsAC(response.data))
    })
    .catch((err) => {
        console.log(err.massage)
    })
}