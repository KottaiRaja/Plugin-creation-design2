import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './signup.css';
import { Link } from "react-router-dom";
import axios from 'axios'
import logo from './logo.png'



export function Signup(){

    const handlesubmit = async(e)=>{
        e.preventDefault();
        var datastring = new FormData(e.target);
        var config = {headers:{'enctype': 'multipart/form-data'}} 
        
        axios.post('http://localhost:3004/signup',datastring,config)
        .then(function(res){
            if(res.data.kots==='signup-error'){
                alert('SIGNUP ERROR..!');
                window.location.reload();
            }
            else if(res.data.kots==='signin-error'){
                alert('SIGNIN ERROR..!');
                window.location.reload();
            }
            else if(res.data.kots==='signup-success'){
                alert('CREATED SUCCESSFULLY');
                window.location.href="/";
            }
        })
        .catch(function(err){
            console.log(err);
        })
}
  

    return(
        <div>
            <div className="BG">
            <div className="container login_nav p-3 col-lg-12">
                    
                    <div className="d-flex">
                        <div className="col-lg-10"><img src={logo} alt="logo" className="img1"/></div>
                            <div className="col-lg-2 col-md-5 col-sm-8 text-right">
                            <Link to="/"><button type="button" className="btn btn-light login_btn2" >Login</button></Link>
                        </div>
                    </div>
             
            </div>
                <div className="container con_div col-lg-5 col-md-5 col-sm-9 col-11 p-4">
                    <form onSubmit={handlesubmit}>
                        <select name="signup_type" id="signup_type" className="signup_type d-none">
                            <option>USER</option>
                        </select>
                        <label className="namei">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter the Name" className="form-control"/><br/>
                        <label className="emaili">Email</label>
                        <input type="Email" name="email" id="email" placeholder="Enter the Email" className="form-control" /><br/>
                        <label className="phonei">Phone</label>
                        <input type="phone" name="phone" id="phone" placeholder="Enter the Number" className="form-control" /><br/>
                        <label className="passwordi">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter the password" className="form-control" />
                        <div className="text-center">
                            <button type="submit" className="btn1 btn btn-light">Signup</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}