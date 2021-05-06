const initState:InitStateType = {
    isLoading: true,
    modalYacht: ""
}

export type InitStateType = {
    isLoading: boolean
    modalYacht: string
}

export const ServiceReducer = (state: InitStateType = initState, action: ActionType) => {
    switch(action.type){
        case "CHANGE_LOADING": {
            return {...state, isLoading: action.value}
        }
        case "CHANGE_MODAL":{
            return {...state, modalYacht: action.value}
        }
        default: return state
    }
}

export const isLoadingAC = (value:boolean) => ({type: "CHANGE_LOADING", value})

export const changeModalYachtAC = (value:string) => ({type: "CHANGE_MODAL", value})



export type ActionType = any