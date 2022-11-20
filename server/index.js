const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");
const fileupload = require('express-fileupload');


const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(fileupload());
app.use(express.json());
app.use(express.static('public'));

var c= mysql.createConnection({
    host:"localhost",
    path:3306,
    user:"root",
    password:"Kgisl@2022",
    database:"pcreation"
})
c.connect(function(err){
    if(err){
         console.log(err)
    }else{console.log('Database Connected')}
   
});

app.post('/signup',(request,response)=>{
    let signup_type = request.body.signup_type;
    let name = request.body.name;
    let email = request.body.email;
    let phone = request.body.phone;
    let password = request.body.password;

    let sql = "insert into signup(Name,Email,Phone) values (?,?,?)";
    let sql2="insert into login(username,Password,Name,Email,Phone,Role)values (?,?,?,?,?,?)"

    c.query(sql,[name,email,phone],(err,res)=>{
        if(err){
            let x={"kots":"signup-error"};
            response.send(x);
        }else{
            c.query(sql2,[email,password,name,email,phone,signup_type],(err1,res1)=>{
                if(err1){
                 let x={"kots":"signin-error"};
                 response.send(x);
                }
                else{
                    let x = {"kots":"signup-success"};
                    response.send(x);
                }
            })
        }
    })
})


app.post('/login',(request,response)=>{

    let username = request.body.username;
    let password = request.body.password;

    let sql2 = 'select * from login where username=?';

    c.query(sql2,[username],(err,res)=>{
        if(err){
            let x = {"kots":"wrong-username"};
            response.send(x);
        }
        else if(res.length > 0){
            let username1 = res[0].username;
            let password1 = res[0].Password;
            let id = res[0].id;
            let role = res[0].Role;

            if(username1===username || password1===password){
                let x = {"kots":"Success","id":id,"role":role};
                response.send(x);
            }
            else{
                let x = {"kots":"Invalid-login"};
                response.send(x);
            }
        }
        else{
            let x = {"kots":"Invalid-login"};
            response.send(x);
        }
    })

})

app.post('/Userdetails',(request,response)=>{
    let userid = request.body.userid;

    let sql = 'select * from login where id=?';

    c.query(sql,[userid],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let name = res[0].Name;
            let s = {"status":name};
            response.send(s);
        }
    })

});



app.post('/profiledetail',(request,response)=>{
    let userid=request.body.userid;
    let name=request.body.name;
    let email=request.body.email;
    let number=request.body.number;
    let address=request.body.address;
    let sql='insert into profiledetail(userid,name,email,number,address) values (?,?,?,?,?);'

    c.query(sql,[userid,name,email,number,address],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })
    
})

app.post('/update1',(request,response)=>{
    // let userid=request.body.userid;
    let name=request.body.name;
    let email=request.body.email;
    let number=request.body.number;
    let address=request.body.address;

    let sql='update profiledetail set name=?,email=?,number=?,address=? where userid=?';

    c.query(sql,[name,email,number,address,userid],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"updated"};
            response.send(s);
        }
    })
    
})

app.post('/educatedetail',(request,response)=>{
    let userid=request.body.userid;
    let ugname = request.body.ugname;
    let ugdeg = request.body.ugdeg;
    let ugper = request.body.ugper;
    let hscname = request.body.hscname;
    let hscper=request.body.hscper;
    let sslcname=request.body.sslcname;
    let sslcper=request.body.sslcper;

    let sql='insert into educatedetails(userid,ug,ug_spec,ug_per,hsc,hsc_per,sslc,sslc_per) values (?,?,?,?,?,?,?,?)'

    c.query(sql,[userid,ugname,ugdeg,ugper,hscname,hscper,sslcname,sslcper],(err,res)=>{
        if(err){
            let s = {"status":"error"};
            response.send(s);
            
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }
    })
})

app.post('/othersdetail',(request,response)=>{
    let userid=request.body.userid;
    let ps1=request.body.ps1;
    let ps2=request.body.ps2;
    let ps3=request.body.ps3;
    let ts1=request.body.ts1;
    let ts2=request.body.ts2;
    let ts3=request.body.ts3;
    let Course_name=request.body.Course_name;
    let Course_center=request.body.Course_center;
    let pro_title=request.body.pro_title;
    let pro_des=request.body.pro_des;
    let select1=request.body.select1;
    let select2=request.body.select2;

    let img_file=request.files.img_file;

    let upload_path = '../client/public/images/'+img_file.name;
    let img_name=  img_file.name;
    let img_path = 'images';
   

    img_file.mv(upload_path,function(err){

        let sql = 'insert into othersdetail(userid,ps1,ps2,ps3,ts1,ts2,ts3,Course_name,Course_center,pro_title,pro_des,select1,select2,img_path,img_name) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

        c.query(sql,[userid,ps1,ps2,ps3,ts1,ts2,ts3,Course_name,Course_center,pro_title,pro_des,select1,select2,img_path,img_name],(err1,res)=>{
            if(err1){let s = {"status":"error"};
            response.send(s);}
        })

        if(err){
            let s = {"status":"error"};
            response.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            response.send(s);
        }

    })
    
})


app.post('/template',(request,response)=>{
    let userid = request.body.userid;
    let sql = 'select * from profiledetail where userid=?';

    c.query(sql,[userid],(err,res)=>{
        if(err){response.send(err);}
        else{
            response.send(res);
        }
    })

})

app.listen(3004);