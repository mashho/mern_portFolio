import React from 'react'
import loader from '../images/preloader.gif'
import './Preloader.css'
const Preloader = () => {
    return (
        <div className="loader">
            <img src={loader} className="imgloader" alt="loader"/>
        </div>
    )
}

export default Preloader
