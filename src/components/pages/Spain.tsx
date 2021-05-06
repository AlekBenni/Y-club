import React from 'react'
import HeaderPage from '../header/HeaderPage'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../redux/store'
import { YachtType } from '../../redux/PagesReducer'
import BodyPage from './componentsPage/BodyPage'

type PropsType = {
    yachts:Array<YachtType>
}

function Spain(props:PropsType) {
    const directions = useSelector((state:RootStateType) => state.pages.directions)

    const spainYachts = props.yachts.filter((item:YachtType) => item.country === "spain")
    const cities = new Set(spainYachts.map(item => item.cities))

    return (
        <div>
            <HeaderPage
            countryBg="spain"
            countryName="Spain"
            countryLogo="spainLogo"
            filterDirections = "spain"
            directions={directions}
            />
            <BodyPage
                yachts = {spainYachts}
                cities = {Array.from(cities)}
            />
        </div>
    )
}

export default Spain
