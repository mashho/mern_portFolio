import React from 'react';
import './ProjectDetails.css';
const ProjectDetails = ({id,title,subtitle,message1,message2,image1,image2,image3,image4,link}) => {

    




    const Rest=()=>{
        if(image3.image!=null && image4.image!=null){
        return (
                <div className="row row1">
                    
                    <div className="col-sm-12 col-md-12 col-xl-12 cols mb-3 mt-3">
                        <img src={image3.image} className="img1"/>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-xl-12 mt-3 mb-3 cols">
                        <div className="text-center ">
                            <h2 className="text-primary text-white projPara">{message2}</h2>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-xl-12 mt-3 mb-5 cols">
                        <img src={image4.image} className="img1"/>
                    </div>
                    <a href={link} target="_danny" className="btn btn-success mt-5">Project Work</a>
                </div>
        )}else if(image3.image!=null && image4.image==null){
            return(
                <div className="row row1">
                    <div className="col-sm-12 col-md-12 col-xl-12 mt-3 cols">
                        <img src={image3.image} className="img1"/>
                        
                    </div>
                    <a href={link} target="_danny" className="btn btn-success mt-5">Project Work</a>
                </div>
            )
        }else{
            return(
                <div><a href={link} target="_danny" className="btn btn-success mt-1">Project Work</a></div>
            )
        }
    }



    return (
        <div className="projectDetails mt-5">
            <div className="cont">
                
                <div className="row row1 mb-5">
                    <h1 className="text-center projHead">{id}.) {title}</h1>
                    <p className="text-center projSubtitle">{subtitle}</p>
                    <div className="col-sm-12 col-md-12 col-xl-12 mb-3 cols">
                        <img src={image1.image} className="img1"/>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-xl-12 cols mt-3 mb-3">
                        <div className="text-center ">
                            <h2 className="text-white projPara">{message1}</h2>
                        </div>
                    </div>
                    
                    <div className="col-sm-12 col-md-12 col-xl-12 cols mt-3 mb-3">
                        <img src={image2.image} className="img1"/>
                    </div>
                </div>
                <Rest/>

            </div>
        </div>
    )
}

export default ProjectDetails
