import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';

import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Technology from './pages/Technology';

import './App.css'
import Moon from './components/Moon';
import Mars from './components/Mars';
import Europa from './components/Europa';
import Titan from './components/Titan';

function App() {
    
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='destination' element={<Destination />}>
            <Route index element={<Moon />} />
            <Route path='mars' element={<Mars />} />
            <Route path='europa' element={<Europa />} />
            <Route path='titan' element={<Titan />} />            
          </Route>
          <Route path='crew' element={<Crew />}/> 
          <Route path='technology' element={<Technology />}/>        
      </Routes>      
    </Router>
  )
}

export default App
