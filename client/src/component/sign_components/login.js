import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import './Login.css';
import { Link } from "react-router-dom";
import logo from './logo.png';
import axios from "axios";

export function Login(){
      var hevent=async(x)=>{
        x.preventDefault();

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        var datastring = new FormData(x.target);
        var config = {headers:{'enctype':'multipart/form-data'}};

        if(username === '' || username === null){
            alert('enter username');
        }
        else if(password === '' || password === null){
            alert('enter password');
        }
        else{
       await axios.post('http://localhost:3004/login',datastring,config)
        .then(function(res){
          if(res.data.kots==='wrong-username'){
              alert('INVALID USERNAME..!');
              window.location.reload();
          }
          else if(res.data.kots==='Invalid-login'){
              alert('INVALID LOGIN..!');
              window.location.reload();
          }
          else if(res.data.kots==='Success'){
               let role = res.data.role;
               let id = res.data.id;
              if(role === 'ADMIN'){
               
                  alert('ADMIN LOGINED');
                  localStorage.setItem('userid',id);
                  window.location.href='/Dashboard';
              }
              else if(role==='USER'){
                  alert('USER LOGINED');
                  localStorage.setItem('userid',id);
                  window.location.href='/Dashboard';
              }
            }
        })
    .catch(function(err){
       console.log(err)
      })}
}




    return(
        <div>
        
              
            <div className="login_BG">
                <div className="container login_nav p-3 col-lg-12">
                    
                        <div className="d-flex">
                            <div className="col-lg-10"><img src={logo} alt="logo" className="img1"/></div>
                                <div className="col-lg-2 col-md-5 col-sm-8 text-right">
                                <Link to="/signup"><button type="button" className="btn btn-light login_btn2" >Signup</button></Link>
                            </div>
                        </div>
                 
                </div>
           
                <div className="container login_con_div col-lg-5 col-md-5 col-sm-9 col-11 p-5">
                    
                    <form onSubmit={hevent}>
                        <label className="login_usernamei">Username</label>
                        <input type="text" name="username" id="username" placeholder="Enter the username" className="form-control"/><br/>
                        <label className="login_passwordi">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter the Password" className="form-control" />
                        <div className="text-center">
                            <button type="submit" className="login_btn1 btn btn-light">Login</button>
                        </div>
                    </form>
                    {/* <div className="col-lg-5"></div> */}
                </div>
            </div>
        </div>
    )
}