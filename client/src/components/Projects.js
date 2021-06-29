import React,{useEffect,useState} from 'react'
import './Project.css';
import quotes from '../images/projectQuotes.png'
import ProjectDetails from './ProjectDetails';
import Preloader from './Preloader';

import toast, { Toaster } from 'react-hot-toast';
import {useHistory} from 'react-router-dom' 
const Projects = () => {

    const [datas,setData]=useState([]);
    const history=useHistory();
    


    const callHomepage=async ()=>{
        try{
            const res=await fetch('/allprojectdata',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            })

            const data=await res.json();
            if(!data){
                toast.error("Difficulties in Fetching data")
                return
            }
            setData(data)

        }catch(err){
            toast.error("Login First")
            history.push('/signin')
            
        }
    }

    useEffect(()=>{ 
        callHomepage()
    },[])



    return (
        <div className="project my-1 py-5" id="tops">
         <Toaster position="bottom-right"
  reverseOrder={false}/>
            <div className="containers">
                <div className="proj-image my-2">
                    <img src={quotes} id="pro_img"/>
                </div>
            </div>
            <div className="projects">
                <div className="heading mt-5">
                    <h1 className="text-center proj_head">Projects</h1>
                </div>
                <div className="project_details mt-4">

                    {datas?.length==0?<Preloader/>:datas?.map((value,index)=>{
                        return(
                        <ProjectDetails
                            key={index}
                            id={index+1}
                            title={value.title}
                            subtitle={value.subtitle}
                            message1={value.details1}
                            message2={value.details2}
                            image1={value.images[0]}
                            image2={value.images[1]}
                            image3={value.images[2]}
                            image4={value.images[3]}
                            link={value.link}
                        />
                        )
                    })}

                </div>
            </div>
            <div>
                  <a className="btn btn-danger top-bottom " href="#tops">Top</a>
              </div>
        </div>
    )
}

export default Projects
