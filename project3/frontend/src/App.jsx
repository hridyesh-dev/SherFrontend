import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className=" text-white font-thin w-screen h-screen bg-black p-20">
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App