import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const   ServiceUpdate = () => {


    const navigate=useNavigate()
    const backHandler=()=>{
        // jaha se aao ho waha wapas chale jao
        navigate( -1)
    }

    return (
        <div>
            <h1 className=' text-4xl font-thin my-3'>Update Services</h1>
            <h2 className=' text-2xl font-thin mb-5'>Update Your Services Here .... </h2>
            <button onClick={backHandler} className=' bg-white text-black px-4 py-2 rounded font-bold'>Go Back</button>
        </div>
    )
}

export default ServiceUpdate