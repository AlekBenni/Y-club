
const initState:InitStateType = {
    reviews: []
}

type InitStateType = {
    reviews: Array<ReviewsType>
}

export type ReviewsType = {
    _id: string,
    title: string,
    description: string,
    video:  Array<string>,    
    preview: string
}

export const ReviewsReducer = (state: InitStateType = initState, action:ActionType) => {
    switch(action.type){
        case "GET_REVIEWS": {
            return {...state, reviews: action.reviews}
        }
        default: return state
    }
}

export const getReviewsAC = (reviews:ReviewsType) => ({type: "GET_REVIEWS", reviews})

type ActionType = any