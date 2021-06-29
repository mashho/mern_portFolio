import React,{useEffect,useState} from 'react';
import './Home.css';
import profilePic from '../images/propic.svg';
import {Link} from 'react-router-dom';
import ProjectDemo from './ProjectDemo';
import Preloader from './Preloader';
const Home = () => {
    const [datas,setData]=useState([]);

    const callHomepage=async ()=>{
        try{
            const res=await fetch('/alldemodata',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })

            const data=await res.json();
            if(!data){
                alert("Difficulties in Fetching data")
            }
            setData(data)

        }catch(err){
            alert(err)
        }
    }

    useEffect(()=>{
        callHomepage()
    },[])



    return (
        
            <div className="home" id="top">
            
                <div className="header">
                
                    <div className="row">
                    
                        <div className="col-sm-12 col-md-6 col-xl-6 cl1">
                            <div className="ima" >
                            <img className="propic" src={profilePic} alt="Profile Pic"/>
                            </div>
                            
                        </div>
                        <div className="col-sm-12 col-md-6 col-xl-6">
                            <div className="cont">
                                <div className="jumbotron">
                                    <div className="heading">
                                        <h1 className="text-center" id="head">Welcome To My Portfolio<hr/></h1>
                                    </div>
                                    <div className="para">
                                        <p className="para1 ">
                                            Hello ,I am <span>Mashhood Ahmad Danish </span>, from
                                            Bihar,India. Currently i am persuing my B.Tech from 
                                            Haldia Institute of Technology. I am a <span>Full 
                                            Stack MERN Developer. </span>This Portfolio is Fully created 
                                            with the help of Mongodb Database , Express and Node for server
                                            and React for UI(Front-end). This website is fully functioning
                                            with authentication and JWT Token.
                                            <br/><Link className="btn btn-success mt-2" to="/about"> Know More About Me...</Link>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="my-3"/>
                <div className="projectDemo my-5">
                    <div className="proj">
                        <h1 className="text-center">Projects Demo</h1>
                                {datas.length==0?<Preloader/>:datas.map(data => {
                                    return (
                                        <ProjectDemo
                                            id={data.sequence}
                                            image={data.image} 
                                            title={data.title}
                                            subtitle={data.subtitle}
                                            message={data.demoDetails}
                                            flip={data.flip}
                                        />
                                    )
                                })}
                    </div>
                </div>
              <div>
                  <a className="btn btn-danger top-bottom " href="#top">Top</a>
              </div>
            </div>
        
    )
}

export default Home
