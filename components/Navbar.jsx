import React, { useState } from "react";
import Button from "./Button";
import "../styles/navStyle.css";
import "../styles/navResponsiveness.css";
import userIcon from "../src/assets/images/User.jpeg";
import searchIcon from "../src/assets/images/search.png";
import bookmarkIcon from "../src/assets/images/Shape.png";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  console.log(isNavOpen);
  
  };

  return (
    <nav className="navContainer">
      <div className="logo">Travelsy</div>
      <div className="hamburger" onClick={toggleNav}>
        &#9776;
      </div>
      
      <div className= {`hamburgerContent  ${isNavOpen ? "activeMenu" : ""}`}>
        <ul className='linksContainer'>
          <li className="text-xl">Camping Locations</li>
          <li>Activities</li>
          <li>Equipment</li>
          <li>Blogs</li>
        </ul>

        <div className="othersSection">
          <Button btnStyle="regBtn" >
            <div className="childrenContent">
              <img src={bookmarkIcon} alt="" className="bookmarkIcon" />
              <h4 className="regText">Reservation</h4>
            </div>
          </Button>
          <div style={{display:"grid", padding:"5px" }}>
            <input type="text" style={{ height:"30px",paddingLeft:"25px", borderRadius:"10px", marginTop:"15px"}} />
            <img style={{position:"relative", top:"-25px", left:"5px"}} className="" src={searchIcon} alt="" />
          </div>
          <img className="userIcon" src={userIcon} alt="" />
          <select className="dropdown" name="" id="">
            <option value=""></option>
            <option value="">menu One</option>
            <option value=""> menu Two</option>
            <option value=""> menu Three</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
