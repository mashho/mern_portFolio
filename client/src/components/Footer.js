import React from 'react';
import './Footer.css';
import instaLogo from '../images/insta.jpg';
import facebook from '../images/facebook.png';
import linkedIn from '../images/linkedin.png';
import github from '../images/github.png';
const Footer = () => {
    return (
        
      <footer class="pt-4  pt-md-5 border-top foot">
      <div class="row mx-5">
        
        <div class="col-sm-12 col-md-4 col-xl-4">
          <h5>Skills</h5>
          <ul class="list-unstyled text-small">
            <li><p class="text-muted">MongoDb</p></li>
            <li><p class="text-muted">Express</p></li>
            <li><p class="text-muted">Node</p></li>
            <li><p class="text-muted">React</p></li>
            <li><p class="text-muted">Django</p></li>
            <li><p class="text-muted">Data Science(Python)</p></li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-4 col-xl-4">
          <h5>Language Known</h5>
          <ul class="list-unstyled text-small">
            <li><p class="text-muted">HTML</p></li>
            <li><p class="text-muted">CSS</p></li>
            <li><p class="text-muted">Java Script</p></li>
            <li><p class="text-muted">Python </p></li>
            <li><p class="text-muted">Java</p></li>
          </ul>
        </div>
        <div class="col-sm-12 col-md-4 col-xl-4">
          <h5>Contact me On </h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted my-2" href="https://www.instagram.com/__mashuuu_danish__/" target="_danny"><img className="footimg" src={instaLogo}/>  Instagram</a></li>
            <li><a class="text-muted my-2" href="https://www.facebook.com/mashhoodahmad.danish/" target="_danny"><img className="footimg" src={facebook}/>  Facebook</a></li>
            <li><a class="text-muted my-2" href="https://www.linkedin.com/in/mashhood-ahmad-danish-06916b1b2/" target="_danny"><img className="footimg" src={linkedIn}/>  LinkedIn</a></li>
            <li><a class="text-muted my-2" href="https://github.com/mashho" target="_danny"><img className="footimg" src={github}/>  Github</a></li>
          </ul>
        </div>
      </div>
    </footer>
    )
}

export default Footer
