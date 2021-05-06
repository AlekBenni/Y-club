import React from 'react'
import HeaderPage from '../header/HeaderPage'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../redux/store'
import { YachtType } from '../../redux/PagesReducer'
import BodyPage from './componentsPage/BodyPage'

type PropsType = {
    yachts: Array<YachtType>
}

function Greece(props:PropsType) {

    const directions = useSelector((state:RootStateType) => state.pages.directions)

    const greeceYachts = props.yachts.filter((item:YachtType) => item.country === "greece")
    const yachtCities = new Set(greeceYachts.map(item => item.cities))

    return (
        <div>
            <HeaderPage
            countryBg="greece"
            countryName="Greece"
            countryLogo="greeceLogo"
            filterDirections = "greece"
            directions={directions}
            />   
            <BodyPage
            yachts={greeceYachts} 
            cities={Array.from(yachtCities)}
            />     
        </div>
    )
}

export default Greece
