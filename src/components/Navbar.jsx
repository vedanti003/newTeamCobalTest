import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/vedanti">Vedanti</Link>
      <Link to="/lavanya">Lavanya</Link>
      
      {/* <Link to="/rajsekhar">Rajsekhar</Link> */}
      {/* <Link to="/rushali">Rushali</Link> */}
      {/* <Link to="/sudhanshu">Sudhanshu</Link> */}
      {/* <Link to="/sangeeta">Sangeeta</Link> */}
      <Link to="/rudra">Rudra</Link>
      {/* <Link to="/kaushal">Kaushal</Link> */}

      {/* uncomment your named links and and make a page in pages folder by your name */}
    </div>
  );
}

export default Navbar;
