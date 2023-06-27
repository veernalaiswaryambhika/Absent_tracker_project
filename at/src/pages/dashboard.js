import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

function Dashboard(){
    const [reason_d,setReason_d] = useState([])
    let arr=[];
    const [brr,Setdata]= useState([]);
    const [crr,Setcrr]=useState([])
    const [temp,Settemp]= useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8009/sdash').then((res)=>{
             for(let i=0;i<res.data.length;i++){
                if(res.data[i].rollno===localStorage.getItem("token")){
                    let obj={
                        rollno : res.data[i].rollno,
                        absent: res.data[i].absent,
                        attend : res.data[i].attend
                    }
                    // console.log(obj);
                    
                    arr.push(obj);
                }
             }
            console.log(arr)
            for(let i=0;i<arr.length;i++)
            {
            brr.push(arr[i]);
            }
            Settemp(brr);
            Setcrr(brr.absent);
        })
     },[])
     console.log(temp);
     console.log(crr);
    return(
        <div className="container">
            <h3 style={{color:'#083d56',fontWeight:'bold',marginBottom:'20px'}}>Dashboard</h3>
            <div className="row">
                <div class="col-md-3"></div>
                <div class="col-md-6 ">
                    <h4 style={{color:'#003060'}}>Attendance</h4>
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'70%',backgroundColor:'green'}}>70%</div>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
            <br/>
            <br/>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 cardmain">
                    <div class="card">
                        <div class="card-header">January</div>
                        <div class="card-body">
                            <center>
                            <table>
                                <tr>
                                    <td>Total</td>
                                    <td>:</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td></td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">February</div>
                        <div class="card-body">
                            <center>
                            <table>
                                <tr>
                                    <td>Total</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">March</div>
                        <div class="card-body">
                            <center>
                            <table>
                                <tr>
                                    <td>Total</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 cardmain">
                    <div class="card">
                        <div class="card-header">April</div>
                        <div class="card-body">
                            <center>
                            <table>
                                <tr>
                                    <td>Total</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">May</div>
                        <div class="card-body">
                            <center>
                            <table>
                                <tr>
                                    <td>Total</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">June</div>
                        <div class="card-body">
                            <center>
                            <table>
                                <tr>
                                    <td>Total</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Present</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                                <tr>
                                    <td>Absent</td>
                                    <td>:</td>
                                    <td>00</td>
                                </tr>
                            </table>
                            </center>
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
}
export default Dashboard;