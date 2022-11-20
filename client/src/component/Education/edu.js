import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import BasicExample from '../Navbar/Navbar';
import './edu.css'
export default function Education() {

  var userid = localStorage.getItem('userid')
  console.log(userid)

    const [ugname,setUgname] = React.useState([]);
    const [ugdeg,setUgdeg] = React.useState([]);
    const [ugper,setUgper] = React.useState([]);
    const [hscname,setHscname] = React.useState([]);
    const [hscper,setHscper] = React.useState([]);
    const [sslcname,setSslcname] = React.useState([]);
    const [sslcper,setSslcper] = React.useState([]);
    const [course,setCourse] = React.useState([]);
    const [ins,setIns] = React.useState([]);
    

    const submit=(e)=>{
          e.preventDefault();
          let datastring = {userid:userid,ugname:ugname,ugdeg:ugdeg,ugper:ugper,hscname:hscname,hscper:hscper,sslcname:sslcname,sslcper:sslcper,course:course,ins:ins};
          let config = {header:{'enctype':'multipart/form-data'}};

          axios.post('http://localhost:3004/educatedetail',datastring,config)
          .then((res)=>{
            if(res.data.status === 'Inserted'){
              alert("inserted")
              window.location.reload()
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
          <div className='col-lg-6 edu_con col-10 text-center col-md-6 col-sm-6'>
              <h3 className='text-center pt-3 text-secondary'>Education Info</h3> 

                <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m:2, width: '100%',mt:0,ml:0}
                }}
                noValidate
                autoComplete="off"
              >
                <div className='text-center pt-4 row justify-content-center'>
                    <div className='col-lg-6 col-md-4 col-4'><TextField label="UG College Name" id="ug-col" className='ug-col' color='secondary' onChange={(e)=>setUgname(e.target.value)}  size="small" required  /></div>
                    <div className='col-lg-3 col-4'><TextField label="Degree Name" id="ug-deg" className='ug-deg' color='secondary' onChange={(e)=>setUgdeg(e.target.value)}  size="small" required  /></div>
                    <div className='col-lg-3 col-4'><TextField label="Percentage" id="ug-per" className='ug-per' color='secondary' onChange={(e)=>setUgper(e.target.value)}  size="small" required  /></div>
                </div>
                <div className='text-center row justify-content-center'>
                    <div className='col-lg-8 col-8'><TextField label="HSC School" id="hsc-name" className='hsc-name' color='secondary' onChange={(e)=>setHscname(e.target.value)} size="small" required  /></div>
                    <div className='col-lg-4 col-4'><TextField label="Percentage" id="hsc-per" className='hsc-per' color='secondary' onChange={(e)=>setHscper(e.target.value)} size="small" required  /></div>
                </div>
                <div className='text-center row justify-content-center'>
                 <div className='col-lg-8 col-8'><TextField label="SSLC School" id="sslc-name" className='sslc-name' color='secondary' onChange={(e)=>setSslcname(e.target.value)} size="small" required /></div>
                 <div className='col-lg-4 col-4'><TextField label="Percentage" id="sslc-per" className='sslc-per' color='secondary' onChange={(e)=>setSslcper(e.target.value)} size="small" required  /></div>
                </div>
                <div className='text-center row justify-content-center'>
                  <h5 className='text-secondary col-lg-12 col-12'>Additional</h5>
                 <div className='col-lg-8 col-8'><TextField label="Course Name" id="course-name" className='course-name' color='secondary' onChange={(e)=>setCourse(e.target.value)} size="small" /></div>
                 <div className='col-lg-4 col-4'><TextField label="Institution" id="institution" className='institution' color='secondary' onChange={(e)=>setIns(e.target.value)} size="small" /></div>
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