import React,{useEffect} from 'react'
import Preloader from './Preloader';
import {Link,useHistory} from 'react-router-dom';

import {useStateValue} from '../StateProvider';
const Logout = () => {

    const history=useHistory();
    
    const [{},dispatch]=useStateValue();
    useEffect(()=>{
        fetch('/logout',{
            method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
        }).then((res)=>{
            localStorage.setItem('login', "false");
            dispatch({
                type:'SET_USER',
                user:null
              })
            history.push('/signin',{replace:true})
            if(res.status!=200){
                const error=new Error(res.error);
                throw error
            }
        }).catch((err)=>{
            alert(err)
        })


    })


    return (
        <div>
            <Preloader/>
             
        </div>
    )
}

export default Logout
