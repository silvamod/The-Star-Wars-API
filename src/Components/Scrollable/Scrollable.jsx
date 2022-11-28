import React from 'react'
import ScrollableElement from './ScrollableElement'
import './App.css'
export default function Scrollable(props) {
  return (
    <div className='ScrollableDiv'> 
        {props.header}
        {[...Array(props.ScroData.length)].map((e, i) => <ScrollableElement ScroData = {props.ScroData[i]} type={props.type} /> )}
    </div>
  )
}
