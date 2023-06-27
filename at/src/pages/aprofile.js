import React from 'react';
import Image1 from '../user1.png';
function Aprofile(props)
{
    return(
        <div>
            <div>
                <h5 style={{color:'red',paddingTop:'1%',paddingLeft:'1%'}}>Profile</h5>
            </div>
            <div>
                <center>
                    <img src={Image1} className='pimg'/>
                </center>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <center>
                        <div class="col-md-12" id="box" style={{width:'60%',paddingLeft:'2%'}}>
                            <table>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td>: {props.name}</td>
                                </tr>
                                <tr>
                                    <td><b>Id</b></td>
                                    <td>: {props.id}</td>
                                </tr>
                                <tr>
                                    <td><b>Email</b></td>
                                    <td>: {props.email}</td>
                                </tr>
                                <tr>
                                    <td><b>Technology</b></td>
                                    <td>: {props.tech}</td>
                                </tr>
                                <tr>
                                    <td><b>Contact No</b></td>
                                    <td>: {props.contact}</td>
                                </tr>
                            </table>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    )
}
export default Aprofile;