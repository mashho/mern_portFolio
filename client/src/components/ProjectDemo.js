import React from 'react'
import { Link } from 'react-router-dom';
import './ProjectDemo.css';
const ProjectDemo = ({id,image,title,subtitle,message,flip}) => {

    const Flip=()=>{
        if(flip=="0"){
        return(
            <>
            <div className="projdemo  py-5" style={{backgroundColor:"white"}}>

            
                <div className="heading">
                    <div className="title">
                        <h1 className="text-center">{id}) {title}</h1>
                    </div>
                    <div className="subtitle">
                        <h3 className="text-center">{subtitle}</h3>
                    </div>
                    <hr/>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-xl-6  demo_img">
                            <img src={image} alt="project 1" className="img-proj "/>
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <div className="message">
                                <h4 className="text-center px-2">{message}</h4>
                                <Link to="/projects" className="btn btn-danger text-center mx-5">Know More ...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )}else{
            
            return(
                <>
                    <div className="projdemo my-5 py-5" style={{backgroundColor:"black"}}>

            
                        <div className="heading">
                            <div className="title">
                                <h1 className="text-center text-light ">{id}) {title}</h1>
                            </div>
                            <div className="subtitle">
                                <h3 className="text-center text-light ">{subtitle}</h3>
                            </div>
                            <hr/>
                        </div>
                        <div className="content">
                            <div className="row">
                                
                                <div className="col-sm-12 col-md-6 col-xl-6 order-sm-2 order-md-1 order-xl-1">
                                    <div className="message">
                                        <h4 className="text-center px-2 text-light">{message}</h4>
                                        <Link to="/projects" className="btn btn-danger text-center mx-5">Know More ...</Link>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-xl-6 my-3 order-sm-1 order-md-2 order-xl-2 demo_img">
                                    <img src={image} alt="project 1" className="img-proj "/>
                                </div>
                            </div>
                        </div>
                        </div>
                </>
            )
        }
        
    };


    return (
        <>
            
           <Flip/>

        </>
    )
}

export default ProjectDemo
