import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vedanti from "./pages/Vedanti";
import Lavanya from "./pages/Lavanya";
import Rushali from "./pages/Rushali";
import Sangeeta from "./pages/Sangeeta";
import Rudra from "./pages/Rudra";
import Sudhanshu from "./pages/Sudhanshu";
import Rajsekhar from "./pages/Rajsekhar";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
// import Vedanti from './pages/Vedanti';
 import Kaushal from './pages/Kaushal';

// Import other pages/components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vedanti" element={<Vedanti />} />
        <Route path="/lavanya" element={<Lavanya />} />

        {/* <Route path="/lavanya" component={Lavanya} /> */}
        <Route path="/rajsekhar" element={<Rajsekhar/>} />
        <Route path="/rushali" element={<Rushali />} />
        <Route path="/sudhanshu" element={<Sudhanshu />} />
        <Route path="/sangeeta" element={<Sangeeta />} />
        {/* <Route path="/rudra" component={Rudra} /> */}
        {/* <Route path="/sangeeta" component={Sangeeta} /> */}
        <Route path="/rudra" element={<Rudra />} />
        <Route path="/kaushal" element={<Kaushal/>} />
         {/* <Route path="/lavanya" component={Lavanya} /> */}
          {/* <Route path="/rajsekhar" component={Rajsekhar} /> */}
          {/* <Route path="/rushali" component={Rushali} /> */}
          {/* <Route path="/sudhanshu" component={Sudhanshu} /> */}
          {/* <Route path="/sangeeta" component={Sangeeta} /> */}
          {/* <Route path="/rudra" component={Rudra} /> */}
           <Route path="/kaushal" element={<Kaushal/> }/> 

        {/* uncomment your named routes here and create your own page in pages folder  */}
      </Routes>
    </Router>
  );
};

export default App;
