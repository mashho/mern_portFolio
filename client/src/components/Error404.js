import React from 'react'
import './Error404.css'
import Errors from '../images/Error.jpg';
const Error404 = () => {
    return (
        <div className="error">
            <h1 className="text-center error_head">It seems you have rendered non existing page</h1>
            <br/>
            <img src={Errors} className="imgs" />
        </div>
    )
}

export default Error404
