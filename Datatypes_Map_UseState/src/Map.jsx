import React from 'react'

const Data = () => {

    const profiles=[
        {name:"Hri",age:21},
        {name:"Hridy",age:20},
        {name:"Hridyesh",age:25}
    ]
    
    // Javascript KA CODE HAMESHA RETURN KE UPAR 
    const data=profiles.map((profile,index)=>{
        console.log(profile,index);
        return(
            <li key={index}>
                <span> Name : {profile.name}</span>  
                <small> Age : {profile.age} </small>
            </li>
        )
    })

    return(
        <div>
            <h1>Rendering Data</h1>
            <ol>{data}</ol>
        </div>
    )
}

export default Data