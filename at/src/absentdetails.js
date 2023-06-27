import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import axios from "axios";

function Absentdetails(){
    const [reason_d,setReason_d] = useState([])
    let arr=[];
    const [brr,Setdata]= useState([]);
    const [temp,Settemp]= useState([]);
     console.log(localStorage.getItem("token"))
     useEffect(()=>{
        axios.get('http://localhost:8009/reports').then((res)=>{
             for(let i=0;i<res.data.length;i++){
                if(res.data[i].rollno===localStorage.getItem("token")){
                    let obj={
                        rollno : res.data[i].rollno,
                        reason: res.data[i].reason,
                        date : res.data[i].date
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
        })
     },[])
     
     console.log(brr);
    return(
        <div className="container-fluid">
            <h3 id="adheading" style={{color:'#083d56',fontWeight:'bold',marginBottom:'20px'}}>Absent Details</h3>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 tablead">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th className="theaddata">S.No</th>
                            <th className="theaddata">Date</th>
                            <th className="theaddata">Reason</th>
                        </tr>
                        </thead>
                        <tbody>
                                    {
                                        temp.map((ele,i)=>{
                                            return (<tr>
                                                <td>{i+1}</td>
                                                <td>{ele.date}</td>
                                                <td>{ele.reason}</td>
                                            </tr>)
                                         })
                                    }
                                </tbody>
                    </table>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}
export default Absentdetails;
