import axios from 'axios'
import React,{useState,useEffect}from 'react'
import {useNavigate}from"react-router-dom"
import Carousel from './Carousel';
import Footer from './Footer';
const Getproducts = () => {
    let navigate=useNavigate();
    // declare our states here
    const[loading,setLoading]=useState("")
    const[products,setProducts]=useState([])
    const[error,setError]=useState("")
    // function to get products 
    const getproducts=async()=>{
        setLoading("Please Wait ....")
        try{
            const response=await axios.get("https://marthahiggs.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")

        }
        catch(error){
        setError(error.message)
        setLoading("")

        }
    }
    // call function get product 
    useEffect(
        ()=>{
            getproducts()
        },[])
        console.log(products)
        const imagepath="https://marthahiggs.alwaysdata.net/static/images/"    
    return (
       
       <div className="row bg-light">
        <h1 className='text-success'>Available products</h1>
        {/* carousel goes here  */}
        <Carousel/>
        {/* bind the states  */}
        <h2 className='text-warning'>{loading}</h2>
        <h2 className='text-danger'>{error}</h2>
        {/* map here  */}
        {products?.map(singleproduct=>(
            <div className="col-md-3 mb-4">
                <div className='card shadow  h-100'>

            {/* image goes here  */}
            <img src={imagepath+singleproduct.product_photo} alt="" style={{height:"200px",objectFit:"cover"}}/>
            <div className='card-body'>
                <h2 className='text-danger bg-dark'>{singleproduct.product_name}</h2>
                <p>{singleproduct.product_description}</p>
                <b className='text-warning'>Ksh{singleproduct.product_cost}</b><br />
                <button className='btn btn-warning w-100'onClick={()=>navigate("/makepayment",{state:{singleproduct}})}>purchase now</button>
            </div>
                </div>
        </div>
        
    ))}
    <Footer/>
       </div>
       
    )
}
export default Getproducts
