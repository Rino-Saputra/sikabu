import React from 'react'
import './style.css'
import { setDate } from '../../../config/redux/action'
import { useDispatch, useSelector } from 'react-redux'

export default function DatePop() {

  const state = useSelector(state=>state.priceReducer)
  const dispatch = useDispatch();

  const getDate = (e) => dispatch(setDate(e.target.value));

  return (
    <div>
      <input type="date" data-date-inline-picker="true" onChange={getDate}/>
    </div>
  )
}
