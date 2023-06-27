import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Progress from './progressbar';
function Adashboard()
{
    const p1= 100;
    const p2= 95;
    const p3= 5;

    return(
        <div>
            <div>
                <h5 style={{color:'red',paddingTop:'1%',paddingLeft:'1%'}}>Dashboard</h5>
            </div>
            <div class="container-fluid">
                <div class="row" style={{paddingTop:'1%'}}>
                    <div class="col-md-2">

                    </div>
                    <div class="col-md-8 ss">
                        <div className='ss1'>
                            {/* <div id="r1">
                                <p style={{textAlign:'center',color:'blue'}}>82</p>
                            </div> */}
                            <Progress per={p1} name={"Total"}/>
                            {/* <div id="r2"><h4 style={{textAlign:'center',color:'blue'}}>TOTAL</h4></div> */}
                        </div>
                        <div className='ss1'>
                                {/* <div id="r1"> s
                                      <p style={{textAlign:'center',color:'green'}}>79</p>
                                </div>
                                <div id="r2"> <h4 style={{textAlign:'center',color:'green'}}>PRESENT</h4></div> */}
                                <Progress per={p2} name={"Present"}/>
                        </div>
                        <div className='ss1'>
                                {/* <div id="r1">
                                    <p style={{textAlign:'center',color:'red'}}>03</p>
                                </div>
                                <div id="r2"><h4 style={{textAlign:'center',color:'red'}}>ABSENT</h4></div> */}
                                <Progress per={p3} name={"Absent"}/>
                        </div> 
                    </div>
                    <div class="col-md-2"></div>
                        
                </div><br></br>

                <div class="row" style={{paddingTop:'5%'}}>
                    <h5 style={{color:'red'}}>Absentees:</h5>
                </div>
                <div class="row" style={{paddingLeft:'2%',paddingTop:'2%'}}>
                 <center> <table id="t1" class="table table-bordered" style={{textAlign:'center'}}>
                        <tr>
                            <th>S.NO</th>
                            <th>Roll No</th>
                            <th>Reason</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>20A91A0529</td>
                            <td>Fever</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>20A91A05H4</td>
                            <td>Headache</td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>20A91A05I3</td>
                            <td>No proper intimation</td>
                        </tr>
                    </table></center>  
                </div>
            </div>
        </div>
    )
}
export default Adashboard;