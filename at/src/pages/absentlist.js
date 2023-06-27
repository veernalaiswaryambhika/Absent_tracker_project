import React,{useState,useEffect} from 'react';
import axios from 'axios';
function AbsentList()
{
    const [arr1,setarr1] =useState([]);
    const [arr,setarr] =useState([]);
    const [reason,setreason] =useState([]);
    const [temp,settemp] =useState([]);
    const [final,setfinal] =useState([]);
    const [date,setDate]=useState('');
    useEffect(()=>{
        axios.get('http://localhost:8009/absentlists').then((res)=> {
          for(let i=0;i<res.data.length;i++){
             arr1.push(res.data[i]);
          }
          settemp(arr1);
        })
     },[])
     const handlesubmit=()=>{
        console.log(arr1);
        for(let i=0;i<temp.length/2;i++){
            if(temp[i].date===date){
                reason.push(temp[i]);
            }
         }
         setfinal(reason);
     }
     
    return(
        <div>
            <div>
                <h5 style={{color:'red',paddingTop:'1%',paddingLeft:'1%'}}>Absentees</h5>
            </div>
            <div class="container-fluid">
                <div class="row" style={{paddingTop:'2%'}}>
                    <center>
                    <div class="col-md-12">
                            <table class="table" id="t4">
                                <tr>
                                    <td style={{textAlign:'center'}}><b>Select Date:</b><input id="i1" onChange={(e)=>setDate(e.target.value)} type="date" style={{height:'20px',backgroundColor:'white'}}></input>&nbsp;&nbsp;<span style={{marginTop:'1%'}}><button onClick={handlesubmit} id="b1">Search</button></span></td>  
                                </tr>
                            </table>
                        </div>
                    </center>
                </div>
                <div class="row" style={{paddingTop:'2%'}}>
                    <div class="col-md-12">
                        <center>
                            <table id="t3" class="table table-bordered" style={{textAlign:'center',border:'2px solid black',backgroundColor:'lightgray',width:'80%'}}>
                                <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>Date</th>
                                    <th>Roll No</th>
                                    <th>Reason</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        final.map((ele,i)=>{
                                            return <tr>
                                                <td>{i+1}</td>
                                                <td>{ele.date}</td>
                                                <td>{ele.rollno}</td>
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
export default AbsentList;