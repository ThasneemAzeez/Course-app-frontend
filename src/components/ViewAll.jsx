import axios from 'axios'
import React, { useState } from 'react'

const ViewAll = () => {
    const[data,setData]=useState([])
    const fetchData=()=>{

        axios.get("",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("succes")
                    
                } else {
                    alert("error")
                }
            }
        )
    }
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Course Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Trainer Name</th>
                                    <th scope="col">Venue</th>
                                </tr>
                               
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                           return <tr>
                                    <th scope="row">{value.coursetitle}</th>
                                    <td>{value.description}</td>
                                    <td>{value.date}</td>
                                    <td>{value.duration}</td>
                                    <td>{value.venue}</td>
                                    <td>{value.trainername}</td>
                                   
                                </tr>
                                        }
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll