import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Main from './components/pages/main/Main'
import RouteComponent from './components/RouteComponent';
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getYachtsTC } from './actions/yachts';
import { getArticleTC } from './actions/article';
import { getCommentsTC } from './actions/comments';
import { getReviewsTC } from './actions/reviews';

function App() {
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getYachtsTC())
      dispatch(getArticleTC())
      dispatch(getCommentsTC())
      dispatch(getReviewsTC())
    })

    return (
      <div className="">
          <BrowserRouter>
              <div>
                  <Route exact path="/" render = {() => <Main/>} />
                  <RouteComponent/>
              </div>
              <Footer/>
          </BrowserRouter>
      </div>
    );
}

export default App;
