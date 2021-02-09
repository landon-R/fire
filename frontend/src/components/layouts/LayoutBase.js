import React from 'react'
import Header from './Header'

export default function LayoutBase(props) {
    return (
        <div>
            <Header/>
            <div className="container mx-auto" >
            {props.children}
            </div>
        </div>
    )
}
