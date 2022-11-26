import React from 'react'
import './App.css'

export default function Card(props) {
  return (
    <div className='Card' onClick={() => props.setcurIndex(props.i)}> {props.data.results[props.i].title} </div>
  )
}
