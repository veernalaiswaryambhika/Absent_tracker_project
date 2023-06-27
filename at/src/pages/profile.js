import React,{useEffect,useState} from 'react';
import Calendar from 'react-calendar';
import ModalDialog from './modal';

function Profile(props)
{
    return(
        <>
            <div>
                <h2 style={{color: 'white',backgroundColor:"#2d4059",fontWeight:'bold',paddingLeft:'2%'}}>Student Profile:</h2>
            </div>
            <div className='container'>
                <div className='row' style={{width: '90%'}}>
                    <table style={{marginLeft: '10px',fontWeight: 'bold'}}>
                        <tr>
                            <td>Name</td>
                            <td>: {props.username}</td>
                        </tr>
                        <tr>
                            <td>Roll No</td>
                            <td>: {props.rollno}</td>
                        </tr>
                        <tr>
                            <td>College</td>
                            <td>: {props.college}</td>
                        </tr>
                        <tr>
                            <td>Branch</td>
                            <td>: {props.branch}</td>
                        </tr>
                        <tr>
                            <td>Technology</td>
                            <td>: {props.tech}</td>
                        </tr>
                        <tr>
                            <td>Attendance</td>
                            <td>: 75%</td>
                        </tr>
                    </table>
                </div>
                <br/>
                <div className=''>
                    <div className='container-fluid'>
                        <div className='row'>
                            <span style={{fontWeight: 'bold',fontSize: '25px',color: '#295f4e'}}>Apply for a leave:</span>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className='container-fluid' style={{width: '70%'}}>
                        <Calendar />
                    </div>
                </div>
                <br/>
                <br/>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-5'></div>
                        <div className='col-md-2'>
                            <ModalDialog rollno={props.rollno}/>
                        </div>
                        <div className='col-md-5'></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;