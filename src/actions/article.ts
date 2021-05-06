import { getArticleAC } from './../redux/ArticleReducer';
import axios from 'axios'
import {Dispatch} from 'redux'
const BaseUrl = "https://alek-yachtimg-back.herokuapp.com/article"

export const getArticleTC = () => (dispatch:Dispatch) => {
    axios.get(`${BaseUrl}`)
    .then((response) => {
        dispatch(getArticleAC(response.data))
    })
    .catch((err) => {
        console.log(err.message)
    })
}