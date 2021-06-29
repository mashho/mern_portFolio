import React,{useEffect,useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import About from './components/About';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Projects from './components/Projects';
import Logout from './components/Logout';
import Registration from './components/Registration';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Contact from './components/Contact';



function App() {

  return (

     
      <BrowserRouter>
        
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Navbar/>
              <Home/>
              <Footer/>
            </Route>
            <Route exact path="/contact">
              <Navbar/>
              <Contact/>
              <Footer/>
            </Route>
            
            <Route exact path="/signin">
              
              <Navbar/> 
              <SignIn/>
              <Footer/>
            </Route>
            <Route exact path="/about">
            <Navbar/> 
              <About/>
              <Footer/>
            </Route>
            <Route exact path="/projects">
              <Navbar/> 
              <Projects/>
              <Footer/>
            </Route>
            <Route exact path="/logout">
            <Navbar/> 
            <Logout/>
            <Footer/>
            </Route>
            <Route exact path="/register">
            <Navbar/> 
            <Registration/>
            <Footer/>
            </Route>

            <Route>
            <Navbar/>
              <Error404/>
              <Footer/>
            </Route>

          </Switch>

          </div> 
        
      </BrowserRouter>
    
    
  );
}

export default App;
