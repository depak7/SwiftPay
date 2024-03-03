import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Signup } from "./Pages/Signup"
import { Signin } from "./Pages/Signin"
import { Dashboard } from "./Pages/Dashboard"
import { Sendmoney } from "./Pages/Sendmoney"
import { Success } from "./Pages/Success"
import { Failure } from "./Pages/Failure"
import { Profile } from "./Components/Profile"

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/signin" element={<Signin/>}/>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/send" element={<Sendmoney/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="/failed" element={<Failure/>}/>
    <Route path="/profile" element={<Profile/>}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App