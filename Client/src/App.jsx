import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from './Register'
// import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <BrowserRouter>
       <Routes>
        <Route path='' element={<Register />}></Route>
        {/* <Route path='' element={<Login />}></Route> */}
       </Routes>
    </BrowserRouter>
  )
}

export default App
