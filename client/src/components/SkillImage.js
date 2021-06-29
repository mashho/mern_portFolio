import React from 'react'
import './About.css'
const SkillImage = ({title,image}) => {
    return (
        
        <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3 my-3">
            <h1 className="text-center about_heading ima_skills">{title}</h1>
           <div className="react_image">
                <img src={image} className="image-react cart_edu"/>
            </div>
        </div>
        
    )
}

export default SkillImage
