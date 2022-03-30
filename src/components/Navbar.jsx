import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div>
    
        <header className="header">
  <input className="menu-btn" type="checkbox" id="menu-btn" />
  <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
  <ul className="menu">
    <li><NavLink className="t" exact to='/Main'>
    SANKALP
    </NavLink>
    </li>
    <li><NavLink className="t" exact to='/About'>
    ABOUT
    </NavLink>
    </li>
    <li><NavLink className="t" exact to='/Resume'>
    TIMELINE
    </NavLink>
    </li>
    <li><NavLink className="t" exact to='/Contact'>
    CONTACT
    </NavLink>
    </li>
    <li><NavLink className="t" exact to='/Project'>
    PROJECT
    </NavLink>
    </li>
    <li><NavLink className="t" exact to='/Skils'>
    SKILLS
    </NavLink>
    </li>

  </ul>
</header>
    </div>
}
export default Navbar;