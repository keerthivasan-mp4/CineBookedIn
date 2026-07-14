import  NavBar from "./component/NavBar"
import  Footer from "./component/Footer"
import { Route, Routes, useLocation } from "react-router-dom"
import  Home  from "./pages/Home"
import { Toaster } from "react-hot-toast"


function App() {
  const isAdminPath = useLocation().pathname.startsWith('/Admin')

  return (
    <>
    <Toaster/>

    {! isAdminPath && <NavBar/>}
    <Routes>
      <Route path='/' element={<Home/>}  />
    </Routes>
    {!isAdminPath && <Footer/>}
      
    </>
  )
}

export default App
