import React from 'react'
import './cards.css'

export default function Card(props) {
  return (
    <div className='Card' onClick={() => props.setcurIndex(props.id)} > 
      {props.MoviesData.results[props.id].title} 
    </div>
  )
}
