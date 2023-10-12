import './App.css'
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";

import Navbar from './components/Navbar'
import About from './components/About';



function App() {
 

  return (
    <>
       {/* <Home/> */}
      <Router>
        <Navbar />

          <Routes>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        
      </Router>
      
  </>
  );
}

export default App
