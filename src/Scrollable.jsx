import React from 'react'
import ScrollableElement from './ScrollableElement'
export default function Scrollable(props) {
  return (
    <div className='ScrollableDiv'> 
        {props.header}
        {[...Array(props.data.length)].map((e, i) => <ScrollableElement data = {props.data[i]} type={props.type} /> )}
    </div>
  )
}
