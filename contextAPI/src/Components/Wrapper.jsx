import React from 'react'
// ek aisa component jo props mai component le aur return bhi ek component krr raha hai
//wrapper ek aisa component jo apne props mai component le raha hai aur return bhi ek component krr raha hai 

const Wrapper = (props) => {
    console.log(props)
    return props.App
}

export default Wrapper