import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";
import Nav from "./nav";
import Signup from './signup';
import Anav from './anav';
import Login from './login';
import axios from 'axios'
function Adminlogin(){
    const navigate=useNavigate()
    const [studentlog,SetStudentlog]=useState(false);
    const [aisLoggedin,asetIsLoggedin]=useState(false);
    const [admin,SetAdmin]=useState([]);
    const [user,SetUser]=useState({})
    const BACKEND_URL = "http://localhost:8009/demo";
    useEffect(()=>{
      axios.get(BACKEND_URL).then((res)=>{SetAdmin(res.data) ;SetAdmin(res.data); console.log(res.data)})
    },[])
    let name="";
    let password="";
    const submithandle=(nn,pp)=>{
        for(let i=0;i<admin.length;i++){
            if(admin[i].id==nn && admin[i].password==pp){
                SetUser(admin[i]);
                asetIsLoggedin(true);
            }
        }
        
        }
    
        if(aisLoggedin){
            return(
                <Anav name={user.name} id={user.id} email={user.email} tech={user.tech} contact={user.contact} image={user.image}/>
            )
        }
    
    
    const studentlogin=(e)=>{
        SetStudentlog(true);
    }
    if(studentlog){
        return(
            <Login/>
        )
    }

    const active=()=>{
        const d=document.getElementById('ma');
        d.style.backgroundColor="skyblue";
    }

    return(
        <div className='container-fluid loginimg'>
            <div className='row'>
            <center>
            <h1 style={{marginTop:"20px",color:"black",marginBottom:"20px"}}>Welcome to <br/> <span style={{color:'red'}}>Absent </span>Tracker</h1>
            </center>
            <br/>
                <div className='col-md-4'></div>
                <div className='col-md-4 smlogin'>
                    <div className='studentlogin' onClick={studentlogin}>
                        <h5>Student Login</h5>
                    </div>
                    <div className='studentlogin' id="ma" onClick={active}>
                        <h5>Admin Login</h5>
                    </div>
                </div>
                <div className='col-md-4'></div>
            </div><br/>
        <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
        <center>
        <div className="log"> 
            <div className="card login">
            <div class="card-header chead">Admin Login</div>
                <div className="card-body">
                    <form className="form-inline" >
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your ID" onChange={(e)=>{name=e.target.value}}/>
                        </div><br></br>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Enter Your Password"  onChange={(e)=>{password=e.target.value}}/>
                        </div><br></br><p style={{textAlign:"left",fontSize:"15px"}}><a href="#" style={{textDecoration:"none"}}>Forget password ?</a></p>
                        <button className="btn btn-primary"  onClick={()=>submithandle(name,password)}>Sign in</button><br></br><br></br>
                    
                    
                    </form>
                </div>
            </div>
        </div>
        </center>
        </div>
        <div className='col-md-3'></div>
        </div>
        </div>
    )
}
export default Adminlogin;