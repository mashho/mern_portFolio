import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import './Register.css';
import rgisterImage from '../images/register.svg'
import toast, { Toaster } from 'react-hot-toast';
const Registration = () => {
    const [fname,setfName]=useState("")
    const [lname,setlName]=useState("")
    const [contact,setContact]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [conpassword,setConPassword]=useState("")
    const [disable,setDisable]=useState(false)
    const history=useHistory();
    const submitFunc=async (e)=>{
        e.preventDefault();
        if(!fname || !lname || !contact || !email || !password || !conpassword){
            return toast.error("Fill all the credentials")
        }
        else if(fname.length<3 ){
            return toast.error("Length of First Name should be greater than 3")
        }else if( lname.length<2 ){
            return toast.error("Length of Last Name should be greater than 2")
        }else if(contact.length!=10){
            return toast.error("Mobile Number should be of 10 digit Number")
        }else if(password.length<5){
            return toast.error("Password length should be greater than 5")
        }else if(password!=conpassword){
            return toast.error("Password and Confirm password is not Matching")
        }else{
            setDisable(true);
            const res=await fetch('/regist',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    "firstname":fname,
                    "lastname":lname,
                    "contact":contact,
                    "email":email,
                    "password":password,
                    "confirmpassword":conpassword
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    toast.error(data.error)
                    setDisable(false);
                }else{
                    toast.success(data.message)
                    
                    history.push("/signin")
                }
            }).catch(err=>{
                toast.error(err)
                setDisable(true);
            })
        };

            
        }

       
    


    return (
        <div className="signPage reg my-2">
        <Toaster position="bottom-right"
  reverseOrder={false}/>
            <div className="block" id="register">
                <div className="headers">
                    <img src={rgisterImage} className="loginlogo"/>
                    <h1 className="text-center head">Register</h1>
                </div>
                <div className="Signform">
                    <form >
                        <div className="row reg_row">
                            <div className="col abc">
                                <h3 className="label lable_reg">First Name</h3>
                            </div>
                            <div className="col">
                                <input className="email_input" name="firstname" value={fname} onChange={(e)=>setfName(e.target.value)} type="text" placeholder="First Name" required/>
                            </div>
                        </div>
                        <div className="row reg_row">
                            <div className="col abc">
                                <h3 className="label lable_reg">Last Name</h3>
                            </div>
                            <div className="col">
                                <input type="text" className="pass_input" value={lname} onChange={(e)=>setlName(e.target.value)} name="lastname" placeholder="Last Name" required/>
                            </div>
                        </div>
                        <div className="row reg_row">
                            <div className="col abc">
                                <h3 className="label lable_reg">Contact No</h3>
                            </div>
                            <div className="col">
                                <input type="tel" className="pass_input" value={contact} onChange={(e)=>setContact(e.target.value)} name="contact" placeholder="Contact No." required/>
                            </div>
                        </div>
                        <div className="row reg_row">
                            <div className="col abc">
                                <h3 className="label lable_reg">Email</h3>
                            </div>
                            <div className="col">
                                <input type="email" className="pass_input" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="Enter your Email" required/>
                            </div>
                        </div>
                        <div className="row reg_row">
                            <div className="col abc"> 
                                <h3 className="label lable_reg">Password</h3>
                            </div>
                            <div className="col">
                                <input type="password" className="pass_input" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" placeholder="Enter your Password" required/>
                            </div>
                        </div>
                        <div className="row reg_row">
                            <div className="col abc">
                                <h3 className="label lable_reg">Confirm Password</h3>
                            </div>
                            <div className="col">
                                <input type="password" className="pass_input" value={conpassword} onChange={(e)=>setConPassword(e.target.value)} name="confirmpassword" placeholder="Confirm your Password" required/>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-primary my-2" disabled={disable} onClick={submitFunc} value={disable==true?"Wait For a While.. ":"Register"}/>
                        <div className="reg">
                            <Link to="/signin"> Already registered / Login</Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration
