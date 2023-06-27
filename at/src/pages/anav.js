import React,{useState} from 'react';
import Image from '../logo3.png';
import {Routes,Route,Link} from 'react-router-dom';
import Aprofile from './aprofile';
import Adashboard from './adashboard';
import AstudentsList from './astudentlist';
import AbsentList from './absentlist';
import Areport from './areport';
import Login from './login';
import back from '../atlogo1.jpg'

function Anav(props)
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
                            <i class="fa fa-user fa-2x" aria-hidden="true"></i><Link to='/' style={{ textDecoration: 'none' }}><div className='dat' style={{paddingLeft: '30%',marginLeft:'15%'}}>Profile</div></Link>
                        </div>
                        <div className='lit'>
                            <i class="fa fa-id-card-o fa-2x " aria-hidden="true"></i><Link to='/dashboard' style={{ textDecoration: 'none' }}><div className='dat'>Dashboard</div></Link>
                        </div>
                        <div className='lit'>
                            <i class="fa fa-list fa-2x" aria-hidden="true"></i><Link to='/studentslist' style={{ textDecoration: 'none', marginLeft:'2%'}}><div className='dat'>StudentsList</div></Link>
                        </div>
                        <div className='lit'>
                            <i class="fa fa-times fa-2x" aria-hidden="true"></i><Link to='/absentlist' style={{ textDecoration: 'none',marginLeft:'4%' }}><div className='dat'>AbsentList</div></Link>
                        </div>
                        <div className='lit'>
                        <i class="fa fa-bar-chart fa-2x" aria-hidden="true"></i><Link to='/report' style={{ textDecoration: 'none',marginLeft:'2%'}}><div className='dat'>Report</div></Link>
                        </div>
                    </div>
                </div>
                <div className='home-right'>
                <img src={back} alt="background" className='navimg' />
                <Routes>
                    <Route path='/' element={<Aprofile name={props.name} id={props.id} email={props.email} tech={props.tech} contact={props.contact} image={props.image} attend={""}/>}/>
                    <Route path='/dashboard' element={<Adashboard/>}/>
                    <Route path='/studentslist' element={<AstudentsList/>}/>
                    <Route path='/absentlist' element={<AbsentList/>}/>
                    <Route path='/report' element={<Areport/>}/>
                </Routes>
                </div>
            </div>
        </div>
    );
}

export default Anav;