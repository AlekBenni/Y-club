import React from 'react'
import {Route} from 'react-router-dom'
import Greece from './pages/Greece'
import Italy from './pages/Italy'
import Spain from './pages/Spain'
import Turkey from './pages/Turkey'
import {useSelector} from 'react-redux'
import { RootStateType } from '../redux/store'
import Yacht from './pages/componentsPage/Yacht'
import IsLoading from '../style_blocks/IsLoading'
import Articles from './pages/articlePages/Articles'
import Article from './pages/articlePages/Article'
import Review from './pages/reviews/Review'
import Video from './pages/reviews/Video'
import About from './About'

function RouteComponent() {

    const yachts = useSelector((state:RootStateType) => state.pages.yachts)
    const isLoading = useSelector((state:RootStateType) => state.service.isLoading)
    const articles = useSelector((state:RootStateType) => state.article.article)
    const comments = useSelector((state:RootStateType) => state.comments.comments)
    const reviews = useSelector((state:RootStateType) => state.reviews.reviews)

    if(isLoading){
        return <IsLoading />      
    }

    return (
        <div>
            <Route path="/greece" render={() => <Greece yachts={yachts} /> } />
            <Route path="/italy" render={() => <Italy yachts={yachts} />} />
            <Route path="/spain" render={() => <Spain yachts={yachts} />} />
            <Route path="/turkey" render={() => <Turkey yachts={yachts} />} />
            <Route path="/yacht/:id" render={() => <Yacht yachts={yachts} comments={comments} /> } />
            <Route path="/articles" render={() => <Articles articles={articles} comments={comments} />} />
            <Route path="/article/:id" render={() => <Article articles={articles} comments={comments} />} />
            <Route path="/review" render={() => <Review/>} />
            <Route path="/video/:id" render={() => <Video reviews={reviews} comments={comments} />} />
            <Route path="/about/" render={() => <About/>} />
        </div>
    )
}

export default RouteComponent
