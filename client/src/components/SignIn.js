import React,{useState} from 'react'
import './SignIn.css';
import userImage from '../images/user.svg'
import {Link,useHistory} from 'react-router-dom';
import {useStateValue} from '../StateProvider';
import toast, { Toaster } from 'react-hot-toast';
const SignIn = () => {

    const history=useHistory();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [disable,setDisable]=useState("")

    const [{},dispatch]=useStateValue();


    
    const submitFunc=async (e)=>{

        e.preventDefault();
        
        if(!email || !password){
            toast.error("Fill all the credentials")
            return;
        }else if(email.length<5){
            toast.error("Invalid Credentials")
            return
        }else if(password.length<6){
            toast.error("Pasword length should be greater than 5")
        }else{

        
            setDisable(true);
            const res=await fetch('/login',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    
                    "email":email,
                    "password":password
                    
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    toast.error(data.error)
                    
                    setDisable(false);
                    return
                }else{
                    toast.success(data.message)
                    
                    localStorage.setItem('login', "true");
                    
                        dispatch({
                          type:'SET_USER',
                          user:data.userdetails
                        })
                    
                    history.push("/")
                }
            }).catch(err=>{
                toast.error(err)
                setDisable(false);
            })
            
        }
    };

            
        


    return (
        <div className="signPage sign my-2">
        <Toaster position="bottom-right"
  reverseOrder={false}/>
            <div className="block">
                <div className="headers">
                    <img src={userImage} className="loginlogo"/>
                    <h1 className="text-center head">Login</h1>
                </div>
                <div className="Signform">
                    <form >
                        <div className="row">
                            <div className="col abc">
                                <h3 className="label">Email</h3>
                            </div>
                            <div className="col">
                                <input className="email_input" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col abc">
                                <h3 className="label">Password</h3>
                            </div>
                            <div className="col">
                                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="pass_input" placeholder="Enter your password" required/>
                            </div>
                        </div>
                        <input type="submit" value={disable==true?"Wait For a While.. ":"Login"} disabled={disable} onClick={submitFunc} className="btn btn-primary my-2"/>
                        <div className="reg">
                            <Link to="/register" > Not yet registered / Register</Link>
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default SignIn
