import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { asyncCurrentUser } from "./store/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
import { asyncLoadProduct } from "./store/actions/productActions"

const App = () => {
  
  const dispatch = useDispatch()

  const {users} = useSelector(state=>state.userReducer);
  const {products} = useSelector((state)=>state.productReducer);

  useEffect(()=>{
    //agar use nahi hai aur jab jab user refresh ho
    !users && dispatch(asyncCurrentUser())
  },[users])

  useEffect(()=>{
    //when product ki length 0 hai 
    //product ki value ke liye 
    products.length==0 && dispatch(asyncLoadProduct())
  },[products])
  
  return (
    <div className=" overflow-auto text-white  h-screen font-thin w-full bg-black p-20">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App