import React from 'react'
import loader from '../images/service/loader.gif'

type PropsType = {
}

function IsLoading(props:PropsType) {
    return (
        <div>
            <div className="loading-big__wrapper">
                <div className="loader"></div>
            </div>            

        </div>
    )
}

export default IsLoading
