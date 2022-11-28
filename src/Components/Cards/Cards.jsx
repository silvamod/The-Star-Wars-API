import React from 'react'
import Card from './Card'

export default function Cards(props) {

    if(props.MoviesData)
  return (
    
    <div>{[...Array(props.MoviesData.count)].map((e, i) => <Card MoviesData = {props.MoviesData} i={i} setcurIndex = {props.setcurIndex}/> )}</div>
  )
  else return(<></>)
}
