import React,{useEffect,useState} from 'react'
import './Contact.css'
import { Link ,useHistory} from 'react-router-dom'

import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("")
    const [btnDisable,setBtnDisable]=useState(false)


    const history=useHistory();
    const [userData,setUserData]=useState({});
    const userContact=async()=>{
        try{
            const res=await fetch('/getdata',{
                method:"GET",
                headers:{
                    "Content-Type":"application/json"
                },
            });
            const data = await res.json();
            console.log(data)
            setUserData(data);
            setName(data.firstname)
            setEmail(data.email)
            if(!res.status===200){
                const error=new Error(res.error);
                throw error;
            }
        }catch(err){
            toast.error("login First")
            history.push('/signin')
        }
    }

    useEffect(()=>{
        userContact();
    },[])

    const sendMessage=async(e)=>{
        e.preventDefault();
        setBtnDisable(true)
        var msg=message.trim();
        if(!msg){
            toast.error("Message Should not be Empty")
            setMessage("")
            setBtnDisable(false)
            return
        }
        const res=await fetch('/contac',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                name:name,
                email:email,
                message:message

            })
        });
        const data=await res.json();
        if(data.error){
            toast.error(data.message)
            setBtnDisable(false)
        }else{
            toast.success(data.message);
            setMessage("");
            setBtnDisable(false)
        }
    }

    return (
        <div className="contact mt-5 pt-5">
        <Toaster position="bottom-center"
  reverseOrder={false}/>
            <div className="container_contact">
                <div className="heading_contact mb-5">
                    <h1 className="text-center contact_title">Contact</h1>
                </div>
                <div className="form_contact">
                    
                    <form >
                        <div className="row contact_row">
                            <div className="col abc">
                                <h3 className="label cont_label">Name</h3>
                            </div>
                            <div className="col">
                                <input className="email_input" disabled  value={userData.firstname} name="name" autocomplete="false" type="text" placeholder="Your Name" required/>
                            </div>
                        </div>
                        <div className="row contact_row">
                            <div className="col abc">
                                <h3 className="label cont_label">Email</h3>
                            </div>
                            <div className="col">
                                <input type="email" className="pass_input" disabled  value={userData.email} name="email" autocomplete="false" placeholder="Your Email" required/>
                            </div>
                        </div>
                        <div className="row contact_row">
                            <div className="col abc">
                                <h3 className="label cont_label">Message</h3>
                            </div>
                            <div className="col">
                                <textarea rows="4" cols="20" value={message} className="textarea" name="" onChange={(e)=>setMessage(e.target.value)} autocomplete="false" placeholder="Your Message"/>
                            </div>
                        </div>
                        <input type="submit" disabled={btnDisable} onClick={sendMessage} className="btn btn-primary my-2"/>
                        
                        
                    </form>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
