import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useNavigate } from "react-router-dom";
import Nav from "./nav";
import Signup from './signup';
import Anav from './anav';
import Adminlogin from './adminlogin';
import axios from 'axios';
function Login(){
    const navigate=useNavigate()
    const [isLoggedin,setIsLoggedin]=useState(false);
    const[adminlog,SetAdminlog]=useState(false);
    const [isSignup,setIsSignup]=useState(false);
    const [student,SetStudent]=useState([]);
    const [user,SetUser]=useState({})

    const BACKEND_URL = "http://localhost:8009/demo1";
    useEffect(()=>{
      axios.get(BACKEND_URL).then((res)=>{SetStudent(res.data) ;SetStudent(res.data); console.log(res.data)})
    },[])
    let name="";
    let password="";

    const submithandle=(nn,pp)=>{
        for(let i=0;i<student.length;i++){
            if(student[i].rollno==nn && student[i].password==pp){
                SetUser(student[i]);
                setIsLoggedin(true);
                localStorage.setItem('token',student[i].rollno)
            }
        }
        
        }

    if(isLoggedin){
        return(
        <Nav username={user.name} rollno={user.rollno} college={user.college} branch={user.branch} attend={user.attendance} tech={user.tech}/>
        )
    }
    const submitup=(e)=>{
        setIsSignup(true);
    }
    if(isSignup){
        return(
            <Signup/>
        )
    }

    
    const admin=(e)=>{
        SetAdminlog(true);
    }
    if(adminlog){
        return(
            <Adminlogin/>
        )
    }

    const active=()=>{
        const d=document.getElementById('ma');
        d.style.backgroundColor="skyblue";
    }

    return(
        <div className='container-fluid loginimg'>
            <center>
            <div className='row'>
            <center>
            <h1 style={{marginTop:"20px",color:"black",marginBottom:"20px"}}>Welcome to <br/> <span style={{color:'red'}}>Absent </span>Tracker</h1>
            </center>
            <br/>
                <div className='col-md-4 col-sm-2'></div>
                <div className='col-md-4 col-sm-8 smlogin'>
                    <div className='studentlogin' id="ma" onClick={active}>
                        <h5>Student Login</h5>
                    </div>
                    <div className='studentlogin' onClick={admin}>
                        <h5>Admin Login</h5>
                    </div>
                </div>
                <div className='col-md-4 col-sm-2'></div>
            </div></center>
            <br/>
            <center>
        <div className='row'>
        <div className='col-md-3 loginfpart'></div>
        <div className='col-md-6 '>
        <div className="log"> 
            <div className="card login">
            <div class="card-header chead">Student Login</div>
                <div className="card-body">
                    <form className="form-inline">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Enter Your Rollno" name="rollno"  onChange={(e)=>{name=e.target.value}} />
                        </div><br></br>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Enter Your Password" onChange={(e)=>{password=e.target.value}}/>
                        </div><br></br><p style={{textAlign:"left",fontSize:"15px"}}><a href="#" style={{textDecoration:"none"}}>Forget password ?</a></p>
                        <button  className="btn btn-primary" onClick={()=>submithandle(name,password)}>Sign in</button><br></br><br></br>
                        <p style={{textAlign:"center"}}>----- or -----</p>
                    
                    
                    </form>
                    <form className="form-inline" onSubmit={submitup}>
                        <p style={{fontSize:"15px"}}>Don't have an account?</p>
                    <button className="btn btn-info" style={{color:'white'}  }>SignUp</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        <div className='col-md-3 col-sm-2'></div>
        </div></center>
        </div>
    )
};
export default Login;