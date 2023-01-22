import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import BasicExample from '../Navbar/Navbar';
import './skills.css'
export default function Skills() {

    var userid = localStorage.getItem('userid')
    console.log(userid)

    const [isActive, setIsActive] = React.useState(false);

    const handleToggle = () => {
      setIsActive(!isActive);
    };

      const [pSkill1,setPSkill1] = React.useState([]);
      const [pSkill2,setPSkill2] = React.useState([]);
      const [pSkill3,setPSkill3] = React.useState([]);

      const [tSkill1,setTSkill1] = React.useState([]);
      const [tSkill2,setTSkill2] = React.useState([]);
      const [tSkill3,setTSkill3] = React.useState([]);

      const [Course_name,setCourseName] = React.useState([]);
      const [Course_center,setCourseCenter] = React.useState([]);

      const [pro_title,setProTitle] = React.useState([]);
      const [pro_des,setProDes] = React.useState([]);

      const [Lang1,setLang1] = React.useState([]);
      const [Lang2,setLang2] = React.useState([]);

      const [image,setImage] = React.useState([]);
  
      const submit=(e)=>{
            e.preventDefault();
            let datastring = {userid:userid,ps1:pSkill1,ps2:pSkill2,ps3:pSkill3,ts1:tSkill1,ts2:tSkill2,ts3:tSkill3,Course_name:Course_name,Course_center:Course_center,pro_title:pro_title,pro_des:pro_des,select1:Lang1,select2:Lang2 , img_file:image};
            let config = {header:{'enctype':'multipart/form-data'}};
  
            axios.post('http://localhost:3004/othersdetail',datastring,config)
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
         <div className={isActive ? 'row' : 'row pt-5'}>
          <div className={isActive ? 'hidden' : 'col-lg-6'}>
            <div className=' info_con text-center  pb-3'>
                <h3 className='text-center pt-3 text-secondary'>Personal Skills</h3> 
  
                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m:2, width: '80%',mt:0}
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className='text-center pt-4'>
                    
                    <TextField label="Person Skill" id="ps1" className='ps1' color='secondary' onChange={(e)=>setPSkill1(e.target.value)}  size="small" required />
                  </div>
                  <div className='text-center'>
                    <TextField label="Person Skill" id="ps2" className='ps2' color='secondary' onChange={(e)=>setPSkill2(e.target.value)} size="small" required />
                  </div>
                  <div className='text-center'>
                    <TextField label="Person Skill" id="ps3" className='ps3' color='secondary' onChange={(e)=>setPSkill3(e.target.value)} size="small" required />
                  </div>
                </Box>
        </div>
        </div>
        <div className={isActive ? 'hidden' : 'col-lg-6'}>
            <div className='info_con text-center pb-3'>
                <h3 className='text-center pt-3 text-secondary'>Technical Skills</h3> 
  
                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m:2, width: '80%',mt:0}
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className='text-center pt-4'>
                    
                    <TextField label="Technical Skill" id="ts1" className='ps1' color='secondary' onChange={(e)=>setTSkill1(e.target.value)}  size="small" required />
                  </div>
                  <div className='text-center'>
                    <TextField label="Technical Skill" id="ts2" className='ts2' color='secondary' onChange={(e)=>setTSkill2(e.target.value)} size="small" required />
                  </div>
                  <div className='text-center'>
                    <TextField label="Technical Skill" id="ts3" className='ts3' color='secondary' onChange={(e)=>setTSkill3(e.target.value)} size="small" required />
                  </div>
                </Box>
                    
        </div>
        </div>
        <div className={isActive ? 'hidden' : 'container submit-bar pt-4 col-lg-4 text-center mt-5'}>
          <Button variant="outlined" color='secondary' className="mb-4" onClick={handleToggle}>Submit</Button>
        </div>
        <div className={!isActive ? 'hidden' : 'col-lg-6'}>
            <div className=' info_con text-center  pb-3'>
                <h3 className='text-center pt-2 text-secondary'>Course Details</h3> 
  
                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m:2, width: '80%',mt:0}
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className='text-center pt-2'>
                    
                    <TextField label="Course Name" id="Course_name" className='Course_name' color='secondary' onChange={(e)=>setCourseName(e.target.value)}  size="small" required />
                  </div>
                  <div className='text-center'>
                    <TextField label="Course Center" id="Course_center" className='Course_center' color='secondary' onChange={(e)=>setCourseCenter(e.target.value)} size="small" required />
                  </div>
                </Box>
        </div>
        </div>
        <div className={!isActive ? 'hidden' : 'col-lg-6'}>
            <div className=' info_con text-center  pb-3'>
                <h3 className='text-center pt-2 text-secondary'>Project Details</h3> 
  
                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m:2, width: '80%',mt:0}
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className='text-center pt-2'>
                    
                    <TextField label="Project Title" id="pro_title" className='pro_title' color='secondary' onChange={(e)=>setProTitle(e.target.value)}  size="small" required />
                  </div>
                  <div className='text-center'>
                    <TextField label="Project Description" id="pro_des" className='pro_des' color='secondary' onChange={(e)=>setProDes(e.target.value)} size="small" required />
                  </div>
                </Box>
        </div>
        </div>
        <div className={!isActive ? 'hidden' : 'col-lg-6'}>
            <div className=' info_con text-center  pb-3'>
                <h3 className='text-center pt-2 text-secondary'>Known Languages</h3> 
  
                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m:2, width: '80%',mt:0}
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className='text-center pt-2'>
                    
                    <TextField label="Language 1" id="select1" className='select1' color='secondary' onChange={(e)=>setLang1(e.target.value)}  size="small" required />
                  </div>
                  <div className='text-center'>
                    <TextField label="Language 2" id="select2" className='select2' color='secondary' onChange={(e)=>setLang2(e.target.value)} size="small" required />
                  </div>
                </Box>
        </div>
        </div>
        <div className={!isActive ? 'hidden' : 'col-lg-6'}>
            <div className=' info_con text-center  pb-3'>
                <h3 className='text-center pt-2 text-secondary'>Upload Profile</h3> 
  
                  <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m:2, width: '80%',mt:0}
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className='text-center pt-2'>  
                  <input type="file" name="img_file" id="img_file" className="image" onChange={(e)=>setImage(e.target.value)}/>
                  </div>
                </Box>
                <Button variant="outlined" color='secondary' className='mb-4 mt-3' onClick={submit}>Submit</Button>
        </div>
        </div>
        </div>
        </div>
      </div>
      </>
      
    );
  }