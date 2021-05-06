import { ReviewsReducer } from './ReviewsReducer';
import { CommentReducer } from './CommentReducer';
import { ArticleReducer } from './ArticleReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { MainPageReducer } from './MainPageReducer'
import { PagesReducer } from './PagesReducer'
import { ServiceReducer } from './ServiceReducer'

export const rootReducer = combineReducers({
    mainPaige: MainPageReducer,
    pages: PagesReducer,
    service: ServiceReducer,
    article: ArticleReducer,
    comments: CommentReducer,
    reviews: ReviewsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof rootReducer>