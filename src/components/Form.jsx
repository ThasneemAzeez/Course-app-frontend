import axios from 'axios'
import React, { useState } from 'react'

const Form = () => {
    const[data,setData]=useState(
        {
            "coursetitle": "",
    "description":"" ,
    "date":"" ,
    "duration": "",
    "venue":"" ,
    "trainername":""

        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(data)
        axios.post("",data).then((response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("succesfully added")
            } else {
                alert("error")
            }
        }).catch().finally()
    }

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Course Title</label>
                            <input type="text" className="form-control" name='coursetitle' value={data.coursetitle} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="date" id="" className="form-control" name='date' value={data.date} onChange={inputHandler} />
                            </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" className="form-control" name='duration' value={data.duration}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Venue</label>
                            <input type="text" className="form-control"name='venue' value={data.venue} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Trainer Name</label>
                            <input type="text" className="form-control" name='trainername' value={data.trainername} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form