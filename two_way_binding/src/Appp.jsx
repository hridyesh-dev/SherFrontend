import React from 'react'

const Appp = () => {

    const profiles=[
        {name:"Sarthak ",age : 12},
        {name:"Ankur ",age : 54},
        {name:"Akash ",age : 20}
    ]

    //JSX Element ka array
    //this is how we render array of list itms into the view
    //JS KA CODE RETURN KE UPAR AAYE GA AUR JO DIKHANA HAI VOH RETURN KE ADAR 
    const updatedProfiles= profiles.map((profile,index)=>{
        return(
            //since we dont have an id we are using index as id
            <li key={index}>
                <span>Name :{profile.name}</span> ||
                <small>Age :{profile.age}</small>
            </li>
        )
    })
    
    console.log(updatedProfiles);

    return (
    
        <div>
            <h1>Rendring JSON</h1>
            {/*//now to show profiles show them in a simpler form */}
            <ol>
                {updatedProfiles}
            </ol>
        </div>
    )
}

export default Appp