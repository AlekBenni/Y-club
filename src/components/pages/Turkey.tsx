import React from 'react'
import HeaderPage from '../header/HeaderPage'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../redux/store'
import { YachtType } from '../../redux/PagesReducer'
import BodyPage from './componentsPage/BodyPage'

type PropsType = {
    yachts: Array<YachtType>
}

function Turkey(props:PropsType) {
    const directions = useSelector((state:RootStateType) => state.pages.directions)

    const turkeyYachts = props.yachts.filter((item:YachtType) => item.country === "turkey")
    const yachtCities = new Set(turkeyYachts.map(item => item.cities))

    return (
        <div>
            <HeaderPage
            countryBg="turkey"
            countryName="turkey"
            countryLogo="turkeyLogo"
            filterDirections = "turkey"
            directions={directions}
            />
            <BodyPage
                yachts={turkeyYachts}
                cities={Array.from(yachtCities)}
            />
        </div>
    )
}

export default Turkey
