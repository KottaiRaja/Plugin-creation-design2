import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './info.css'
import Button from '@mui/material/Button';
import axios from 'axios';
import BasicExample from '../Navbar/Navbar';

export default function Info() {

  var userid = localStorage.getItem('userid')
  console.log(userid)

    const [name,setName] = React.useState([]);
    const [email,setEmail] = React.useState([]);
    const [number,setNumber] = React.useState([]);
    const [address,setAddress] = React.useState([]);

    const submit=(e)=>{
          e.preventDefault();
          let datastring = {userid:userid,name:name,email:email,number:number,address:address};
          let config = {header:{'enctype':'multipart/form-data'}};

          axios.post('http://localhost:3004/profiledetail',datastring,config)
          .then((res)=>{
            if(res.data.status === 'Inserted'){
              alert("inserted")
              window.location.href='/education'
            }else{
              alert("error")
              window.location.reload()
            }
          })
          .catch((err)=>{
            alert(err)

          })

    }



  return (
    <>
     <BasicExample/>
   
    <div className='content_bg'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 info_con col-10 text-center'>
              <h3 className='text-center pt-3 text-secondary'>General Info</h3> 

                <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m:2, width: '80%',mt:0}
                }}
                noValidate
                autoComplete="off"
              >
                <div className='text-center pt-4'>
                  
                  <TextField label="Name" id="name" className='NAME' color='secondary' onChange={(e)=>setName(e.target.value)}  size="small" required />
                </div>
                <div className='text-center'>
                  <TextField label="Email" id="email" className='email' color='secondary' onChange={(e)=>setEmail(e.target.value)} size="small" required />
                </div>
                <div className='text-center'>
                  <TextField label="Number" id="number" className='number' color='secondary' onChange={(e)=>setNumber(e.target.value)} size="small" required />
                </div>
                <div className='text-center'>
                  <TextField label="Address" id="address" className='address' color='secondary' onChange={(e)=>setAddress(e.target.value)} size="small" required />
                </div>
              </Box>
                  <Button variant="outlined" color='secondary' className='mb-4' onClick={submit}>Submit</Button>
      </div>
      </div>
      </div>
   
    </div>
    </>
    
  );
}