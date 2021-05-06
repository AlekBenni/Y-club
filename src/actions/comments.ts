import { getCommentsAC, sendCommentAC } from './../redux/CommentReducer';
import axios from 'axios'
import {Dispatch} from 'redux'
const BaseUrl = "https://alek-yachtimg-back.herokuapp.com/comment"

export const getCommentsTC = () => (dispatch:Dispatch) => {
    axios.get(`${BaseUrl}`)
    .then((response) => {
        dispatch(getCommentsAC(response.data))
    })
    .catch((err) => {
        console.log(err.message)
    })
}

export const sendCommentTC = (parent:string, author:string, comment:string) => (dispatch:Dispatch) => {
    axios.post(`${BaseUrl}`, {
        parent, author, comment
    })
    .then((response) => {
        dispatch(sendCommentAC(response.data))
    })
    .catch((err) => {
        console.log(err.message)
    })
}