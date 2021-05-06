import { getYachtAC, setNewYachtAC } from './../redux/PagesReducer';
import axios from 'axios'
import {Dispatch} from 'redux'
import { isLoadingAC } from '../redux/ServiceReducer';
const baseUrl = "https://alek-yachtimg-back.herokuapp.com/yacht"



export const getYachtsTC = () => (dispatch: Dispatch) => {
    dispatch(isLoadingAC(true))
    axios.get(`${baseUrl}`)
    .then((response) => {
        dispatch(getYachtAC(response.data))
    })
    .catch((err) => {
        console.log(err.massage)
    })
    .finally(() => {
        dispatch(isLoadingAC(false))
    })
}

export const setCommentsTC = (id:string, comments:Array<string>) => (dispatch:Dispatch) => {

    axios.patch(`${baseUrl}/${id}`, {
        comments: comments
    })
    .then((response) => {
        dispatch(setNewYachtAC(response.data))
    })
    .catch((err) => {
        console.log(err.message)
    })
    .finally(() => {

    })
}