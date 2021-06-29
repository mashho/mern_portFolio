import React from 'react'
import './About.css'
import profilePic from '../images/profile_pic.jpeg'
import reactImage from '../logo.svg';
import pythonIcon from '../images/projects/skills/pythonicon.svg';
import javaIcon from '../images/projects/skills/javaicon.svg';
import htmlIcon from '../images/projects/skills/htmlicon.svg';
import cssIcon from '../images/projects/skills/cssicon.svg';
import mongodbicon from '../images/projects/skills/mongodbicon.svg';
import nodejsIcon from '../images/projects/skills/nodejsIcon.svg';
import djangoicon from '../images/projects/skills/djangoicon.svg';
import SkillImage from './SkillImage';
const About = () => {
    const rememberMe = localStorage.getItem('login') === 'true';
    var val="0px";
    if(rememberMe){
        val="0px";
    }else{
        val="6px"
    }
    return (
        <div className="about mt-5" id="top">
            <div className="contnr ">
                <div className="header_about">
                    <h1 className="text-center about_heading titleshoot">About Me </h1>
            
                </div>
        
                <div className="resume mb-4">
                    <div className="row rowe">

                        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 mb-5 image_div">
                            <img src={profilePic} className="profile_image mt-1 mb-3"/>
                        </div>
                        <div className="row ">
                        <div className="rows">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label lab ">Name</h3>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label answer">Mashhood Ahmad Danish</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rows">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label lab">Degree</h3>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label answer">B.E in ECE (2018-present)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rows">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label lab">College</h3>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label answer">Haldia Institute of Technology</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rows">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label lab">Contact No.</h3>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label answer">7295086518</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rows ">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label lab">Email</h3>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label answer emails" style={{textTransform:"lowercase"}}>mashhooddanish@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rows">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label lab">DOB</h3>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label answer ">14-11-1999</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="rows">
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label">Address</h3>
                            </div>
                            <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
                                <h3 className="about_label answer">Munger,Bihar P.O.- 811201</h3>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="he">
                <h2 className="text-center checkLog" >{rememberMe?"":"Login To view the page"}</h2>
            </div>
            <div style={{filter:`blur(${val})`}} className="education mt-2 mb-2">
                <div className="education_head">
                    <h1 className="about_heading text-center titleshoot my-5" >Educations</h1>
                    <div className="education_block">
                        <div className="row">
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 cr">
                                <div class="card cart_edu text-white bg-success mb-3" style={{"width":"18rem"}}>
                                    <div class="card-header about_heading">2013 - 2015</div>
                                    <div class="card-body">
                                        <h5 class="card-title about_heading">DAV PUBLIC SCHOOL</h5>
                                        <p class="card-text about_heading">Munger,Bihar <br />CBSE <br />Secured a CGPA of 7.2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 cr">
                                <div class="card cart_edu text-white bg-danger mb-3" style={{"width":"18rem"}}>
                                    <div class="card-header about_heading">2015 - 2017</div>
                                    <div class="card-body">
                                        <h5 class="card-title about_heading">Saraswati Vidya Mandir</h5>
                                        <p class="card-text about_heading">Munger,Bihar <br />CBSE <br />Secured a perentage of 85.20</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 cr">
                                <div class="card cart_edu text-white bg-primary mb-3" style={{"width":"18rem"}}>
                                    <div class="card-header about_heading">2018-Present</div>
                                    <div class="card-body">
                                        <h5 class="card-title about_heading">Haldia Institute of Tech.</h5>
                                        <p class="card-text about_heading">Haldia, West Bengal <br />MAKAUT <br />Secured a CGPA of 9.2</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div style={{filter:`blur(${val})`}} className="skills py-4 ">
                <div className="skills_head">
                    <div className="header_about">
                        <h1 className="about_heading titleshoot text-center skl"  >Skills</h1>
                    </div>
                    
                    <div className="education_block">
                        <div className="row mt-5">


                            <SkillImage title="React" image={reactImage}/>
                            <SkillImage title="Python" image={pythonIcon}/>
                            <SkillImage title="Java" image={javaIcon}/>
                            <SkillImage title="HTML5" image={htmlIcon}/>
                            <SkillImage title="CSS" image={cssIcon}/>
                            <SkillImage title="MongoDb" image={mongodbicon}/>
                            <SkillImage title="Node Js" image={nodejsIcon}/>
                            

                        </div>
                        <div className="row">
                        <SkillImage title="Django" image={djangoicon}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                  <a className="btn btn-danger top-bottom " href="#top">Top</a>
              </div>
        </div>
    )
}

export default About
