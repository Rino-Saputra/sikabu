import React from 'react'
import { useState } from 'react'
import './style.css'
import FoodBeverage from '../foodbeverage';

export default function Restaurant() {
  const[toggleButton, setToggleButton] = useState(true);
  return (
    <div>
        <div className='text-center'> 
          <button className={`food ${ toggleButton ? 'active-btn' : 'deactive-btn' } `}
              onClick={()=>setToggleButton(!toggleButton)}>
              Makanan
          </button>

          <button className={`beverage ${ toggleButton ? 'deactive-btn' : 'active-btn' }`}
              onClick={()=>setToggleButton(!toggleButton)}>
              Minuman
          </button>
        </div>

        {/* true for food and false for drink to switch show in carousel */}
        <FoodBeverage toggle={toggleButton}/>
    </div>
  )
}
