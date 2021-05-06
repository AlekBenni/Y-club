import React from 'react'
import { YachtType } from '../../../redux/PagesReducer'
import Divider from '../../../style_blocks/Divider'
import {useState} from 'react'
import {NavLink} from "react-router-dom"
import Pagination from '../../Pagination'

type PropsType = {
    yachts: Array<YachtType>
    cities: Array<string>
}

function BodyPage(props:PropsType) {
    const img="https://itboat.com/uploads/908e/2b071b20faf5.jpg"

    const [sortYacht, setSortYacht] = useState("")

    const resultYachts = props.yachts.filter(item => {if(sortYacht === ""){return props.yachts}else{return item.cities === sortYacht}}).map((item:YachtType, index:number) => {
        return(
            <div key={index} className="bodyPage-element">
                <h1>{item.name}</h1>
                <p>This yacht is available in the city of <span>{item.cities}</span> </p>
                <div className="bodyPage-element__block">
                    <div className="bodyPage-element__block-img-wrapper">
                        <div style={{backgroundImage: `url(${item.image})`}}
                        className="bodyPage-element__block-img">                        
                        </div>
                    </div>
                    <div className="bodyPage-element__block-content">
                        <h4>Description</h4>
                        <p>{item.characteristics}</p>                       
                    <NavLink to={`/yacht/${item._id}`}>Learn more</NavLink>
                    </div>                   
                </div>
                <div className="bodyPage-element__bottom">
                    <Divider/>
                </div>              
            </div>
        )
    })

    let setSelect = (item:string) => {
        setSortYacht(item)
        setCurrentPage(1)
    }

    const resultCities = props.cities.map((item:string, index:number) => {
        return(
            <div className="bodyPage-nav__element">
                <button onClick={() => setSelect(item)}>{item}</button>
            </div>
        )
    })

    let postPerPage = 5
    let [currentPage, setCurrentPage] = useState(1)
    let lastIndex = currentPage * postPerPage
    let firstIndex = lastIndex - postPerPage
    let totalYachts = resultYachts.slice(firstIndex, lastIndex)

    const paginate = (pageNumber:number) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div>
            <div className="bodyPage-nav">
                {resultCities}
            </div>
            <div className="bodyPage wrap">
                {totalYachts}    
                <Pagination postPerPage={postPerPage} total={resultYachts.length} paginate={paginate} />      
            </div>
        </div>
    )
}

export default BodyPage
