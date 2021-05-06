import React, {useState, useRef, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Header from '../../header/Header'
import { YachtType } from '../../../redux/PagesReducer'
import Divider from '../../../style_blocks/Divider'
import glass from '../../../images/service/glass.png'
import ModalSlider from '../../ModalSlider'
import { ChangeEvent } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { RootStateType } from '../../../redux/store'
import { changeModalYachtAC } from '../../../redux/ServiceReducer'
import CommentPage from './CommentPage'
import { CommentType } from '../../../redux/CommentReducer'
import Comments from '../Comment'
import HeaderPage from '../../header/HeaderPage'

type PropsType = {
    yachts: Array<YachtType>
    comments:Array<CommentType>
}

function Yacht(props:PropsType) {

    const modal = useSelector((state:RootStateType) => state.service.modalYacht)
    const dispatch = useDispatch()

    useEffect(() => {
        document.body.addEventListener('click', clickOnElement)
    })

    let {...yachtId} = useParams()

    const openModalYacht = useRef()

    const clickOnElement = (event:any) => {
        if(event.path.includes(openModalYacht.current)){
            dispatch(changeModalYachtAC("action"))
        }
    }
    //@ts-ignore
    let soughtYacht = props.yachts.filter((Item:YachtType) => Item._id === yachtId.id)
    
    let resultYacht = soughtYacht.map((item:YachtType, index:number) => {
        return(
            <div key={index} className="yacht-wrapper">
                <h1>{item.name}</h1>
                    <Divider/>                    
                    <div 
                    //@ts-ignore
                    ref={openModalYacht} 
                    style={{backgroundImage: `url(${item.image})`}} className="yacht-img">
                        <img className="yacht-glass" src={glass} alt=""/>
                    </div>
                    <p><span>Characteristics</span></p>
                    <p>{item.characteristics}</p>
                    <p><span>Design</span></p>
                    <p>{item.design}</p>
                    <p><span>Comfort</span></p>
                    <p>{item.comfort}</p>
                    <p><span>Region</span></p>
                    <p>{item.region}</p>
            </div>
        )
    })

    let soughtElement = soughtYacht.map((item:YachtType) => item._id)
    const directions = useSelector((state:RootStateType) => state.pages.directions)
    return (
        <div>
            {soughtYacht[0].country === "greece" && 
                <HeaderPage
                countryBg="greece"
                countryName="Greece"
                countryLogo="greeceLogo"
                filterDirections = "greece"
                directions={directions}
                />   
            }
            {soughtYacht[0].country === "italy" &&
                <HeaderPage
                countryBg="italy"
                countryName="Italy"
                countryLogo="italyLogo"
                filterDirections = "italy"
                directions={directions}
                />
            }
            {soughtYacht[0].country === "spain" &&
                <HeaderPage
                countryBg="spain"
                countryName="Spain"
                countryLogo="spainLogo"
                filterDirections = "spain"
                directions={directions}
                />
            } 
            {soughtYacht[0].country === "turkey" &&
                <HeaderPage
                countryBg="turkey"
                countryName="turkey"
                countryLogo="turkeyLogo"
                filterDirections = "turkey"
                directions={directions}
                />
            }
            <div className="wrap">
                {resultYacht}     
                <Divider/>    
                <Comments soughtElement={soughtElement[0]} comments={props.comments} />                  
            </div>
            <div className={`sliderWrapper ${modal}`}> 
                <ModalSlider yachts={soughtYacht} />                
            </div>            
        </div>
    )
}

export default Yacht
