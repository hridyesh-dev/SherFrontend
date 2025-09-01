//READ FUNCTIONALITY KA CODE 

const Read = (props) => {
    const users=props.users
    // const setUsers=props.setUsers
    console.log(props);

    const renderUser=users.map((user,index)=>{
        return <li key={index}> {user.name}</li>
    })

    return (
        <div>
            <h1>USER DATA</h1> 
            <ol>{renderUser}</ol>
        </div>
    )
}

export default Read
