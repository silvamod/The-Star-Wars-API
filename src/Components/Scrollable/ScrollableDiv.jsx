import React from 'react'
import ScrollableElement from './ScrollableElement'
import './scrollable.css'
export default function Scrollable(props) {
  return (
    <div className='ScrollableDiv'> 
        {[...Array(props.ScroData.length)].map((e, i) => <ScrollableElement ScroData = {props.ScroData[i]} type={props.type} seterrorState= {props.seterrorState} key={i} />  )}
    </div>
  )
}