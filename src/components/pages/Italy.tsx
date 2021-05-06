import React from 'react'
import HeaderPage from '../header/HeaderPage'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../redux/store'
import { YachtType } from '../../redux/PagesReducer'
import BodyPage from './componentsPage/BodyPage'

type PropsType = {
    yachts: Array<YachtType>
}

function Italy(props:PropsType) {
    const directions = useSelector((state:RootStateType) => state.pages.directions)

    const italyYachts = props.yachts.filter((item:YachtType) => item.country === "italy")
    const yachtCities = new Set(italyYachts.map(item => item.cities))

    return (
        <div>
            <HeaderPage
            countryBg="italy"
            countryName="Italy"
            countryLogo="italyLogo"
            filterDirections = "italy"
            directions={directions}
            />
            <BodyPage
                yachts = {italyYachts}
                cities = {Array.from(yachtCities)}
            />
        </div>
    )
}

export default Italy
