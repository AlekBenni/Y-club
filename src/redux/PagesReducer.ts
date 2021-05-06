
const InitState:InitStateType = {
    directions : [
        {logo:"greeceLogo", to: "greece", title: "Greece"},   
        {logo:"italyLogo", to: "italy", title: "Italy"}, 
        {logo:"spainLogo", to: "spain", title: "Spain"}, 
        {logo:"turkeyLogo", to: "turkey", title: "Turkey"}
],
    yachts: []
}

type InitStateType = {
    directions: Array<DirectionType>
    yachts: Array<YachtType>
}

export type YachtType = {
    _id: string
    name: string
    country: string
    cities: string
    image: string
    imageArray: Array<string>
    comments: Array<string>
    characteristics: string
    design: string
    comfort: string
    region: string
}

export type DirectionType = {
        logo: string
        to: string
        title: string
}

export const PagesReducer = (state:InitStateType = InitState, action:ActionType) => {
    switch(action.type){
        case "GET_YACHT": {
            return {...state, yachts: action.yacht}
        }
        case "SET_COMMENTS": {
            return {
                ...state,               
                 yachts: state.yachts.map(item => item._id === action.yacht._id ? {...item, ...action.yacht} : item )
            }
        }
        default: return state
    }
}

export const getYachtAC = (yacht:Array<YachtType>) => ({type: "GET_YACHT", yacht})

export const setNewYachtAC = (yacht:YachtType) => ({type: "SET_COMMENTS", yacht})

type ActionType = any