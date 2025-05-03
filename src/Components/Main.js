import {React} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Education from './Education';
import Home from './Home';
import Experience from './Experience';
import Skills from './Skills';
import MyWorks from './MyWorks';
import Snowfall from './snowfall';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Main.css';



const Main = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const isSnow = [10, 11, 12];
    const shouldShowSnowfall = isSnow.includes(currentMonth);
  
  return (
    <Router>
      <div className="app-container" id="main">
        <NavBar />
        {shouldShowSnowfall && <Snowfall />}

        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/myworks" element={<MyWorks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Main;
