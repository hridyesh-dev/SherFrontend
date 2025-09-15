import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    //url se parameter nikalnata hai use params , jo parameters humne dynamic routing mai di hai
    const params=useParams()
    console.log(params);

    const navigate=useNavigate()
    const backHandler=()=>{
        // jaha se aao ho waha wapas chale jao
        navigate( -1)
        //navigate("/product")
    }

    return (
        <div>
            <h1 className=' text-4xl font-thin my-3'>{params.name}</h1>
            <h2 className=' text-2xl font-thin mb-5'>Product Details</h2>
            <button onClick={backHandler} className=' bg-white text-black px-4 py-2 rounded font-bold'>Go Back</button>
        </div>
    )
}

export default ProductDetails