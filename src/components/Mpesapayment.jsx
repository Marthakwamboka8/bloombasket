import { useState } from "react"
import{useLocation}from "react-router-dom"
import axios from "axios"
import React from "react"
const Mpesapayment=()=>{
    const {singleproduct}=useLocation().state || {}
        const imagepath="https://marthahiggs.alwaysdata.net/static/images/"  
        // declare your states 
      
        const[phone,setPhone]=useState("")
        const[loading,setLoading]=useState("")
        const[success,setSuccess]=useState("")
        const[error,setError]=useState("")
        // function to make payment 
        const handlesubmit=async(e)=>{
            e.preventDefault()
            setLoading("please wait...")
            // create empty envelope to store user input 
            const formdata=new FormData()
            // append
            formdata.append("phone",phone)
            formdata.append("amount",singleproduct.product_cost)
            try{
                const response=await axios.post("https://marthahiggs.alwaysdata.net/api/mpesa_payment",formdata)
                setSuccess(response.data.message)
                setLoading("")
            }
            catch(error){
                setError("Something went wrong")
                setLoading("")

            }
        }

    return(
      <div className="row justify-content-center">
        <h1 className="text-success">Make payment - Lipa na mpesa</h1>
        <div className="col-md-8 card shadow p-4">
            
            <img src={imagepath+singleproduct.product_photo} alt="" style={{height:"500px",objectFit:"cover"}}/>
            <div className="card-body text-start">
                <h3 className="text-info ">
                    {singleproduct.product_name}
                </h3>
                <p>{singleproduct.product_description}</p>
                <b className="text-success">ksh {singleproduct.product_cost}</b><br />
            {/* binding the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>

        
            <form action="" onClick={handlesubmit}>
                    <input type="number" className="form-control" placeholder="enter number 254xxxxxxxxx" 
                    onChange={(e)=>setPhone(e.target.value)}/><br />
                    <button className="btn btn-success col-md-12" type="submit">Make payment</button>

                      </form>
            </div>

        </div>
      </div>
    )
}
export default Mpesapayment