import React from 'react'
import Header from '../../header/Header'
import AboutUs from './AboutUs'
import Author from './Author'
import Country from './Country'
import Gallery from './Gallery'
import News from './News'

function Main() {
    return (
        <div>
            <Header/>
            <Country/>
            <Gallery/>
            <Author/>
            <News/>
            <AboutUs/>
        </div>
    )
}

export default Main
