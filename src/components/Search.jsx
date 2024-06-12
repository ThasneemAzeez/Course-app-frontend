import axios from 'axios'
import React, { useState } from 'react'
import Navigation from './Navigation'

const Search = () => {
    const[data,setData]=useState({
        "coursetitle": ""
    })
   const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})

   }
   const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8081/search",data).then
    ((response)=>{
        console.log(response.data)
        
    })
   }
  
  return (
    <div>
        <Navigation/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Course Title</label>
                            <input type="text" className="form-control" name='coursetitle' value = {data.coursetitle} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Search</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search