import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { asynccurrentuser } from "./store/actions/userActions"
import { useDispatch } from "react-redux"

const App = () => {

  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(asynccurrentuser())
  },[])


  return (
    <div className=' px-[10%] w-screen h-screen bg-black text-white font-thin '>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App