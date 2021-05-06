import { Date } from "mongoose"

type InitStateType = {
    article: Array<ArticleType>
}

const initState:InitStateType = {
    article: []
}

export type ArticleType = {
    _id: string
    title: string,
    author: string,
    content: string,
    preview: string,
    image: string,
    date: string
}

export const ArticleReducer = (state:InitStateType = initState, action:ActionType) => {
    switch(action.type) {
        case "GET_ARTICLE": {
            return {...state, article: action.article}
        }
        default: return state
    }
}

export const getArticleAC = (article:ArticleType) => ({type: "GET_ARTICLE", article})

type ActionType = any
