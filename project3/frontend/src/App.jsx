import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { asyncCurrentUser } from "./store/actions/userActions"
import { useDispatch } from "react-redux"
import { asyncLoadProduct } from "./store/actions/productActions"

const App = () => {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asyncLoadProduct())
    dispatch(asyncCurrentUser())
  })
  
  return (
    <div className=" overflow-auto text-white  h-screen font-thin w-full bg-black p-20">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App