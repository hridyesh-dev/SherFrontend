import React from 'react'

const Read = (props) => {
    
    console.log(props);

    // data ko nikal rahe hai from props
    const users=props.users
    //const setusers=props.setusers

    const renderUser = users.map((user,index)=>{
        return(
            <li key={index}>{user.name}</li>
        )
    })

    return (
        <div>
            <h1>User Data</h1>
            <ol>{renderUser}</ol>
        </div>
    )
}

export default Read 