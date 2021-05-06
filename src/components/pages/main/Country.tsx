import React from 'react'
import {useSelector} from 'react-redux'
import { RootStateType } from '../../../redux/store'
import {CountryType} from '../../../redux/MainPageReducer'
import {NavLink} from 'react-router-dom'
import Title from '../../../style_blocks/Title'

function Country() {

    const country = useSelector((state:RootStateType) => state.mainPaige.country)

    console.log(country)

    let resultCountry = country.map((item:CountryType, index:number) => {
        return(
            <NavLink className="country__wrapper" to={item.to}>
            <div className="country__element-container">
                <div className={`country__element ${item.style}`}></div>
                <h4 className="country__element-title">{item.name}</h4>
                <p>{item.content}</p>
            </div>
            </NavLink>
        )
    })

    return (
        <div>
            <Title title="select your country" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            <div className="country wrap">
                {resultCountry}
            </div>
        </div>
    )
}

export default Country
