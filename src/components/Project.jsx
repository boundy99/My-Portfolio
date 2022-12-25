import React from 'react'

export default function Project(props) {
    return ( <
        div >
        <
        h4 > { props.name } < /h4> <
        textarea > Description: { props.description } < /textarea> <
        p > Tools used: < /p>

        <
        /div>
    )
}