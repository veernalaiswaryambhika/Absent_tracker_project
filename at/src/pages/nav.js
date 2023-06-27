import React ,{useState} from 'react';
import Image from '../logo3.png';
import {Routes,Route,Link} from 'react-router-dom';
import Profile from './profile';
import Absentdetails from './absentdetails';
import Dashboard from './dashboard';
import back from '../atlogo1.jpg'
import Login from './login';
import Anav from './anav';
function Nav(props)
{
    const[logoutt,SetLogoutt]=useState(false);
    const logout=(e)=>{
        SetLogoutt(true);
    }
    if(logoutt){
        return(
            <Login/>
        )
    }
    return(
        <div className='header'>
            <div className='head1'>
                <div className='logoimg'>
                    <img src={Image}/>
                </div>
                <div className='logout'>
                    <i class="fa fa-sign-out" aria-hidden="true" onClick={logout}></i>
                </div>
            </div>
            <div className='Mainhome'>
                <div className='home-left'>
                    <div className='Title'>
                        <center><h3>Absent Tracker</h3></center>
                    </div>
                    <div className='listit'>
                        <div className='lit'>
                            <i class="fa fa-user fa-2x" aria-hidden="true"></i><Link to='/' style={{textDecoration:'none',marginLeft:'20px'} }><div className='dat'>Profile</div></Link>
                        </div>
                        <div className='lit'>
                            <i class="fa fa-book fa-2x" aria-hidden="true"></i><Link to='/absentdetails' style={{ textDecoration:'none',marginLeft:'5px'}} ><div className='dat'>AbsentDetails</div></Link>
                        </div>
                        <div className='lit'>
                        <i class="fa fa-id-card-o fa-2x " aria-hidden="true"></i><Link to='/dashboard' style={{ textDecoration:'none'}} ><div className='dat' >Dashboard</div></Link>
                        </div>
                    </div>
                </div>
                <div className='home-right'>
                    <img src={back} alt="background" className='navimg' />
                <Routes>
                    <Route path='/' element={<Profile username={props.username} rollno={props.rollno} college={props.college} branch={props.branch} attend={props.attend} tech={props.tech}/>}/>
                    <Route path='/absentdetails' element={<Absentdetails/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/anav' element={<Anav/>} />
                </Routes>
                </div>
                
            </div>
        </div>
    );
}

export default Nav;