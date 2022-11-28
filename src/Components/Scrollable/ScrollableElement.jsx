import React from 'react'
import { useState,useEffect,useRef } from 'react'
import './scrollable.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function ScrollableElement(props) {
    const [Data, setData] = useState()
    const effectRan = useRef(false)
    const scrollElemLoader =  <Box > <CircularProgress /> </Box>
    const CastType = 'cast'
    const PlanetsType = 'planets'
    const SpeciesType = 'species'
    const StarshipsType = 'starships'
    const VehiclesType = 'vehicles'
    useEffect(() => {
        if(!effectRan.current){   
          effectRan.current = true  
          fetch(props.ScroData, {
            method: 'GET',
            headers: new Headers({
              'Content-Type': 'application/json; charset=UTF-8',
              'Accept': 'application/json; charset=UTF-8'
            })
          })
            .then(res => {         
              return res.json()
            })
            .then(
              (result) => {
                setData(result)
                }) 
              ,
              (error) => {
                props.seterrorState(true)
                console.log("userLike err get=", error);
              };
        }
      }, [])

if(Data && props.type === CastType )
  return (
    <div className='ScrollableElement'>
        <div>Name: {Data.name}</div>
        <div>Height: {Data.height}</div>
        <div>Birth Year: {Data.birth_year}</div>
        <div>Eye Color: {Data.eye_color}</div>
    </div>
  )
  else if(Data && props.type === PlanetsType )
  return(
    <div className='ScrollableElement'>
        <div>Name: {Data.name}</div>
        <div>Diameter: {Data.diameter}</div>
        <div>Population: {Data.population}</div>
    </div>
  )
  else if(Data && props.type === SpeciesType )
  return(
    <div className='ScrollableElement'>
        <div>Name: {Data.name}</div>
        <div>Classification: {Data.classification}</div>
        <div>Designation: {Data.designation}</div>
        <div>Average Height: {Data.average_height}</div>
        <div>Language: {Data.language}</div>
    </div>
  )
  else if(Data && props.type === StarshipsType || Data && props.type ===  VehiclesType)
  return(
    <div className='ScrollableElement'>
        <div>Name: {Data.name}</div>
        <div>Model: {Data.model}</div>
        <div>Manufacturer: {Data.manufacturer}</div>
        <div>Cost: {Data.cost_in_credits}</div>
        <div>Crew: {Data.crew}</div>
        <div>Passengers: {Data.passengers}</div>
    </div>
  )
  
  return(
    <div className='scrollLoader'>
      {scrollElemLoader}
    </div>
    )
}