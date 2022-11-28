import React from 'react'
import Card from './Card'
import './cards.css'

export default function Cards(props) {
  return (
    <div className='CardsWrapper'>
      {[...Array(props.MoviesData.count)].map((e, i) => <Card MoviesData = {props.MoviesData} id={i} key={i} setcurIndex = {props.setcurIndex}/> )}
    </div>
  )

}