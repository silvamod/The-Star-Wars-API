import React from 'react'
import { useState,useEffect,useRef } from 'react'
export default function ScrollableElement(props) {
    const [Data, setData] = useState()
    const effectRan = useRef(false)
    useEffect(() => {
        if(effectRan.current === false){   
      
        fetch(props.data, {
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
              effectRan.current = true  
              console.log('accessed fetch')
              }) 
            ,
            (error) => {
              console.log("userLike err get=", error);
            };
        }
      }, [])

if(Data && props.type == 0 )
  return (
    <div className='ScrollableElement'>
        <div>Name: {Data.name}</div>
        <div>Height: {Data.height}</div>
        <div>Birth Year: {Data.birth_year}</div>
        <div>Eye Color: {Data.eye_color}</div>

    </div>
  )
  else if(Data && props.type == 1 )
  return(
    <div className='ScrollableElement'>
        <div>Name: {Data.name}</div>
        <div>Diameter: {Data.diameter}</div>
        <div>Population: {Data.population}</div>
    </div>
  )
  else if(Data && props.type == 2 )
  return(
    <div className='ScrollableElement'>
        <div>Name: {Data.name}</div>
        <div>Classification: {Data.classification}</div>
        <div>Designation: {Data.designation}</div>
        <div>Average Height: {Data.average_height}</div>
        <div>Language: {Data.language}</div>
    </div>
  )
  else if(Data && props.type == 3 )
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


  else
  return(<></>)
}
