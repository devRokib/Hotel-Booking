import './headerBottomnav.css'
import { NavLink } from 'react-router-dom';
import { FaBed } from "react-icons/fa";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MdAttractions } from "react-icons/md";
import { FaTaxi } from "react-icons/fa6";

function HeaderBottomNav() {
  return (
    <div className='headerBottomNavSection'>
      <div className="bottomnavContainer">
      <ul className="bottomNav">
        <NavLink className='bottomNavlink'> <FaBed /> Stays </NavLink>
        <NavLink className='bottomNavlink'> <MdOutlineFlightTakeoff /> Fights</NavLink>
        <NavLink className='bottomNavlink'> <FaCar /> Car rentals</NavLink>
        <NavLink className='bottomNavlink'> <MdAttractions /> Attractions</NavLink>
        <NavLink className='bottomNavlink'> <FaTaxi /> Airport taxis</NavLink>
      </ul>
      </div>
    </div>
  )
}

export default HeaderBottomNav
