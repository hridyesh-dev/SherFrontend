import React from 'react'
import { useContext } from 'react'
import { themeContext} from '../App'

const ChildC = () => {
    //const user=useContext(UserContext)
    // use Context hook ka use karke use krr liya 
    const {theme,setTheme}=useContext(themeContext)

    //toggle theme 
    const changeTheme= ()=>{
        if(theme=="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return (
        <div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    )
}

export default ChildC