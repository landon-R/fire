import React from 'react'
import spin from '../assets/spin2.gif'  

export default function Loading() {
    return (
        <div className='w-full h-screen  flex items-center justify-center' >
            <img className='w-1/6'  src={spin} alt="red"/>
        </div>
    )
}
