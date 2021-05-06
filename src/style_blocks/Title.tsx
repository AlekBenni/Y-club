import React from 'react'
import Divider from './Divider'

type PropsType = {
    title: string
    content: string
}

function Title(props:PropsType) {
    return (
        <div className="title-component__wrapper">
            <h1>{props.title}</h1>
            <Divider/>
            <p>{props.content}</p>
        </div>
    )
}

export default Title
