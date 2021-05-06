import React from 'react'
import Divider from '../../style_blocks/Divider'
import Menu from '../menu/Menu'
import { DirectionType } from '../../redux/PagesReducer'
import {NavLink} from 'react-router-dom'

type PropsType = {
    countryBg: string
    countryName: string
    countryLogo: string
    directions: Array<DirectionType>
    filterDirections: string
}

function HeaderPage(props:PropsType) {

    let resultDirections = props.directions.filter((item:DirectionType, index:number) => item.to !== props.filterDirections).map((item:DirectionType, index:number) => {
        return(
            <NavLink key={index} to={`/${item.to}`}>
            <div className="header-page__directions-wrapper">
                <div className={`header-page__directions ${item.logo}`}></div>
                <p>{item.title}</p>
            </div>
           </NavLink> 
        )
    })

    return (
        <div className={`header-page__bg ${props.countryBg}`}>
            <div className="wrap">
                <div className="top-header">
                    <Menu/>
                </div>
                <div className="header-page__top">
                    <div>
                    <div className="header-page__logo" >                       
                        <div className={`logo ${props.countryLogo}`}></div>
                    </div>
                    </div>
                    <div className="header-page__content">
                        <h2>Wellcome to {props.countryName}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                   
                </div>
                <div className="header-page__nav">
                    <Divider/> 
                    <h2>Over direction:</h2>
                    <div className="directions-wrapper">
                        {resultDirections}
                    </div>                    
                </div>               
            </div>
        </div>
    )
}

export default HeaderPage
