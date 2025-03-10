import './App.css'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home';
import Cars from './components/Cars';
import Bikes from './components/Bikes';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';



function App() {
 

  return (
    <>
   
      <Router>
        <Navbar />

          <Routes>
                <Route exact path='/' element={<Home/>}/>
            <Route exact path="/cars" element={<Cars/>}/>
            <Route exact path="/bikes" element={<Bikes/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/profile" element={<UserProfile/>}/>
          </Routes>
        
      </Router>
      
  </>
  );
}

export default App
