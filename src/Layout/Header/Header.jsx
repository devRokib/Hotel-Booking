import './header.css'
import { NavLink } from 'react-router-dom';
import { LiaFlagUsaSolid } from "react-icons/lia";
import { BsQuestionCircle } from "react-icons/bs";
import HeaderBottomNav from '../../component/headerBottomNav/HeaderBottomNav';
import { IoBedOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import HeaderBottomContent from '../../component/headerBottomContent/HeaderBottomContent';
import { useState } from 'react';
// import { DateRangePicker } from 'react-date-range';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';

function Header() {
  const [openDate, setOpenDate] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const datePicherHandelr = () => {
    setOpenDate(!openDate)
  }
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  }

  return (
    <div className='headerSection'>
      <div className="headerContainer">
        <div className="headerTop">
          <div>
            <h1 className="logo">
              <NavLink to='/'>Booking.com</NavLink>
            </h1>
          </div>

          <div>
            <ul className='menu'>
              <NavLink className='currency'>
                <span className='currencyText'>BDT</span>
                <span className='currencyFlag'><LiaFlagUsaSolid /></span>
              </NavLink>

              <NavLink className='customerService'>
                <BsQuestionCircle />
              </NavLink>
              <NavLink className='listProperty' >
                List your property
              </NavLink>
              <NavLink className='headerSign' to='/signup'>
                Register
              </NavLink>
              <NavLink className='headerSign' to='signin'>Sign in</NavLink>
            </ul>
          </div>
        </div>
      </div>
      <HeaderBottomNav />
      <HeaderBottomContent />
      <div className="headerSearch">
        <div className="headerSearchContainer">

          <div className="headerSeachItem">
            <span><IoBedOutline /></span>
            <input type="text" placeholder='Where are you going' className='headerSeachInput' />
          </div>

          <div className="headerSeachItem">
            <span><FaCalendarAlt /></span>
            <span onClick={datePicherHandelr} className='headerSearchText'>
              {`${format(state[0].startDate, "dd/MM/yyyy")}to ${format(state[0].endDate, "dd/MM/yyyy")}`}
            </span>
            {
              openDate && (
                <DateRangePicker className='datePicker'
                  editableDateInputs={true}
                  onChange={item => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                />
              )
            }

          </div>

          <div className="headerSeachItem">
            <span><FaPerson /></span>
            <span className='headerSearchText' onClick={()=>setOpenOptions(!openOptions)}>
              {`${options.adult} adult , ${options.children} children, ${options.room} room` }
            </span>
            {openOptions && <div className="options">
              <div className="optionItem">
                <span className='optionText'>Adult</span>
                <div className="optionCounter">
                  <button className='optionCounterButton' onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>
                    -
                  </button>
                  <span className='optionCounterNumber'>
                    {options.adult}
                  </span>

                  <button
                   className='optionCounterButton'
                   onClick={() => handleOption("adult", "i")}>
                    +
                  </button>

                </div>
              </div>
              <div className="optionItem">
                <span className='optionText'>Children</span>
                <div className="optionCounter">
                  <button
                    className='optionCounterButton' onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>
                    -
                  </button>

                  <span className='optionCounterNumber'>
                    {options.children}
                  </span>

                  <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>
                    +
                  </button>
                </div>
              </div>
              <div className="optionItem">
                <span className='optionText'>Room</span>
                <div className="optionCounter">
                  <button className='optionCounterButton' onClick={() => handleOption("room", "d")} disabled={options.room <= 1} >
                    -
                  </button>

                  <span className='optionCounterNumber'>
                    {options.room}
                  </span>

                  <button className='optionCounterButton'
                   onClick={() => handleOption("room", "i")}>
                    +
                  </button>

                </div>
              </div>
            </div>}
          </div>
          <div className="headerSeachItem">
            <button className='SearchBtn'>Search</button>
          </div>
          
        </div>
      </div>
    </div>

  )
}

export default Header
