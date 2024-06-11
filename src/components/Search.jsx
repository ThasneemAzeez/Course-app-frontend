import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const[data,setData]=useState({
        "search":""
    })
   const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})

   }
   const readValue=()=>{
    console.log(data)
    axios.get("",data).then((response)=>{console.log(response.data)
        if (response.data.status=="success") {
            alert("succesfull")
        } else {
         alert("error")   
        }
    })
   }
  
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Course Title</label>
                            <input type="text" className="form-control" name='search' value = {data.search} onChange={inputHandler} />
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