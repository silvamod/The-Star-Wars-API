import React from 'react'
import Card from './Card'
import './App.css'

export default function Cards(props) {

    if(props.MoviesData)
  return (
    
    <div className='CardsWrapper'>
      {[...Array(props.MoviesData.count)].map((e, i) => <Card MoviesData = {props.MoviesData} id={i} key={i} setcurIndex = {props.setcurIndex}/> )}
    </div>
  )
  else return(<></>)
}