
const initState:InitStateType = {
    comments: []
}

type InitStateType = {
    comments: Array<CommentType>
}

export type CommentType = {
    _id: string
    parent: string,
    author: string,
    comment: string,
    date: string
}

export const CommentReducer = (state:InitStateType = initState, action:ActionType) => {
    switch(action.type){
        case "GET_COMMENTS": {
            return {...state, comments: action.comments}
        }
        case "SEND_COMMENT":{
            let copyState = {...state}
            copyState.comments = [...copyState.comments]
            copyState.comments.push(action.comment)
            return copyState
        }
        default: return state
    }
}

export const getCommentsAC = (comments:CommentType) => ({type: "GET_COMMENTS", comments})

export const sendCommentAC = (comment:CommentType) => ({type: "SEND_COMMENT", comment})

type ActionType = any

