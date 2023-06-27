import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
function AstudentsList()
{
    // const [sel,seSel]=useState('');
    // const handle=async(e)=>{
    //     console.log(sel);
    // }
    const [arr1,Setarr1] =useState([]);
    const [arr2,Setarr2] =useState([]);
    const [arr3,Setarr3] =useState([]);
    const [arr4,Setarr4] =useState([]);
    const [arr5,Setarr5] =useState([]);
    const [arr,Setarr] =useState([]);
    const [temp,Settemp] =useState([]);
    const [batch,SetBatch] =useState('');
    useEffect(()=>{
        axios.get('http://localhost:8009/demo1').then((res)=> {
          for(let i=0;i<res.data.length;i++){
             if(res.data[i].tech==='FSD'){
                 arr1.push(res.data[i]);
             }
             else if(res.data[i].tech==='AWS'){
                 arr2.push(res.data[i]);
             }
             else if(res.data[i].tech==='Azure'){
                 arr3.push(res.data[i]);
             }
             else if(res.data[i].tech==='Pega'){
                 arr4.push(res.data[i]);
             }
             else if(res.data[i].tech==='CyberSecurity'){
                 arr5.push(res.data[i]);
             }
          }
        })
     },[])
     const handlesubmit=()=>{
        Settemp([]);
        if(batch==='FSD'){
            for(let i=0;i<arr1.length/2;i++){
                temp.push(arr1[i]);
            }
        }
        if(batch==='AWS'){
            for(let i=0;i<arr2.length/2;i++){
                temp.push(arr2[i]);
            }
        }
        if(batch==='Azure'){
            for(let i=0;i<arr3.length/2;i++){
                temp.push(arr3[i]);
            }
        }
        if(batch==='Pega'){
            for(let i=0;i<arr4.length/2;i++){
                temp.push(arr4[i]);
            }
        }
        if(batch==='Cyber'){
            for(let i=0;i<arr5.length/2;i++){
                temp.push(arr5[i]);
            }
        }
        Setarr(temp)
        console.log(temp);
     }
    return(
        <div>
            <div>
                <h5 style={{color:'red',paddingTop:'1%',paddingLeft:'1%'}}>Students List</h5>
            </div>
            <div class="container-fluid">
                <form>
                <div class="row" style={{paddingTop:'2%'}}>
                    <center>
                        <div className="col-md-12" style={{background:'lightgray',width:'80%'}}>
                            <center>
                                <table class="table">
                                    <tr>
                                        <td>
                                            <select class="form-select" onChange={(e)=>SetBatch(e.target.value)} style={{backgroundColor:'white',border:'2px solid black'}} >
                                                <option selected>Select the batch</option>
                                                <option>AWS</option>
                                                <option>FSD</option>
                                                <option>Azure</option>
                                                <option>Pega</option>
                                                <option>Cyber</option>
                                            </select>
                                        </td>
                                    </tr>
                                </table>
                            </center>
                        </div>
                        <div onClick={handlesubmit} className='submit' style={{backgroundColor:"green",color:"white",borderRadius:'6px'}}>Submit</div>
                    </center>
                </div>
                </form>
                <div class="row" style={{paddingTop:'2%'}}>
                    <div class="col-md-12">
                        <center>
                            <table id="t2" class="table table-bordered" style={{backgroundColor:'lightgray',border:'2px solid black',textAlign:'center',width:'80%'}}>
                                <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>NAME</th>
                                    <th>ROLLNO</th>
                                    <th>COLLEGE</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                 arr.map((ele,i)=>{
                                    return <tr>
                                        <td>{i+1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.rollno}</td>
                                        <td>{ele.college}</td>
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
export default AstudentsList;