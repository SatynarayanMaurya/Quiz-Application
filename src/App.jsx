import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Quiz from "./Components/Quiz"
import ViewResult from "./Components/ViewResult"

function App() {

  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Quiz/>}/>
          <Route path="/result" element={<ViewResult/>}/>
        </Routes>
    </>
  )
}

export default App
