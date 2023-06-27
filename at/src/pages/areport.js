import React,{useState,useEffect} from 'react';
import axios from 'axios';
function Areport()
{
    const [arr1,setarr1] =useState([]);
    const [arr,setarr] =useState([]);
    const [reason,setreason] =useState([]);
    const [temp,settemp] =useState([]);
    const [final,setfinal] =useState([]);
    const [roll,setRoll]=useState('');
    useEffect(()=>{
        axios.get('http://localhost:8009/reports').then((res)=> {
          for(let i=0;i<res.data.length;i++){
             arr1.push(res.data[i]);
          }
          settemp(arr1);
        })
     },[])
     const handlesubmit=()=>{
        console.log(arr1);
        for(let i=0;i<temp.length/2;i++){
            if(temp[i].rollno===roll){
                reason.push(temp[i]);
            }
         }
         setfinal(reason);
     }
     console.log(reason);
    return(
        <div>
            <div>
                <h5 style={{color:'red',paddingTop:'1%',paddingLeft:'1%'}}>Student Report</h5>
            </div>
            <div class="container-fluid">
                <div class="row" style={{paddingTop:'2%'}}>
                    <center>
                    <div class="col-md-12">
                            <table class="table" id="t5">
                                <tr>
                                    <td style={{textAlign:'center'}}><b>Enter Roll No:</b><input id="i2" type="text" style={{height:'20px',backgroundColor:'white'}} placeholder='Enter Rollno'  onChange={(e)=>setRoll(e.target.value)}></input>&nbsp;&nbsp;<span style={{marginTop:'1%'}}><button id="b1" onClick={handlesubmit}>Search</button></span></td>
                                </tr>
                            </table>
                        </div>
                    </center>
                </div>
                <div class="row" style={{paddingTop:'2%'}}>
                    <div class="col-md-12">
                        <center>
                            <table id="t6" class="table table-bordered" style={{textAlign:'center',border:'2px solid black',backgroundColor:'lightgray',width:'80%'}}>
                                <tr style={{color:'blue'}}>
                                    <th>S.No</th>
                                    <th>Date</th>
                                    <th>Reason</th>
                                </tr>
                                <tbody>
                                    {
                                        final.map((ele,i)=>{
                                            return <tr>
                                                <td>{i+1}</td>
                                                <td>{ele.date}</td>
                                                <td>{ele.reason}</td>
                                            </tr>
                                         })
                                    }
                                </tbody>
                                
                            </table>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Areport;