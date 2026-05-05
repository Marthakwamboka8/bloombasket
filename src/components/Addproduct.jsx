import axios from "axios"
import React,{useState}from 'react'

const Addproduct = () => {
    // declare the states 
    const [product_name,setProductname]=useState("")
    const[product_description,setProductdescription]=useState("")
    const [product_cost,setProductcost]=useState("")
    const [product_photo,setProductphoto]=useState("")
    // defne the 3 states for hosting data 
    const [loading,setLoading]=useState("")
    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")
    // function to handle submit 
    const handlesubmit= async(e)=>{
        e.preventDefault()
        setLoading("please wait....")
        // create empty envelopr to store user inputs 
        const formdata=new FormData()
        // append 
        formdata.append("product_name",product_name)
        formdata.append("product_description",product_description)
        formdata.append("product_cost",product_cost)  
        formdata.append("product_photo",product_photo)
        try{
            const response=await axios.post("https://marthahiggs.alwaysdata.net/api/addproduct",formdata)
            setSuccess(response.data.message) 
            setLoading("")
        }
        catch(error){
        setError(error.message)
        setLoading("")

        }
    }
    return (
        <div className="row justify-content-center mt-2 body">
            <div className="col-md-8 card shadow p-4">
                <h1 className="text-success">Add product</h1>
                {/* binding the states  */}
                <h2 className="text-warning">{loading}</h2>
                <h2 className="text-success">{success}</h2>
                <h2 className="text-danger">{error}</h2>
                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter product name" 
                    onChange={(e)=>setProductname(e.target.value)}/>
                    <br />
                    <textarea name="" id="" className="form-control" placeholder=" Enter product description"
                       onChange={(e)=>setProductdescription(e.target.value)}></textarea>
                    <br />
                    <input type="number" className="form-control" placeholder="Enter product cost"
                     onChange={(e)=>setProductcost(e.target.value)}/>
                    <br />
                    <input type="file" accept='image/*' className="form-control"  onChange={(e)=>setProductphoto(e.target.files[0])}/><br />
                    <input type="submit" value="add product" className="btn btn-primary col-md-12"/>
                </form>

            </div>

        </div>
      
    )
}
export default Addproduct