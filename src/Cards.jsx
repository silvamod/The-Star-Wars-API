import React from 'react'
import Card from './Card'

export default function Cards(props) {

    if(props.data)
  return (
    
    <div>{[...Array(props.data.count)].map((e, i) => <Card data = {props.data} i={i} setcurIndex = {props.setcurIndex}/> )}</div>
  )
  else return(<></>)
}
