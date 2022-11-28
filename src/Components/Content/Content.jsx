import React from 'react'
import { useState,useEffect } from 'react'
import Scrollable from '../Scrollable/Scrollable'
import './App.css'  
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star'
import StarOutLineOutLinedIcon from '@mui/icons-material/StarOutLineOutLined'

export default function Content(props) {
    var favourites = JSON.parse(localStorage.getItem('favourites'));
    const [isFavourite, setisFavourite] = useState(false)
    const notFavourited = false;
    const Favourited = true;
    const title = props.MoviesData.results[props.curIndex].title
    const opening_crawl = props.MoviesData.results[props.curIndex].opening_crawl
    const release_date = props.MoviesData.results[props.curIndex].release_date
    const director = props.MoviesData.results[props.curIndex].director
    const producer = props.MoviesData.results[props.curIndex].producer
    const currentMovie = props.MoviesData.results[props.curIndex]

    function saveFavourites(){
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    function setFavourite(favBool){
        if(favBool){
            setisFavourite(Favourited)
        } else {
            setisFavourite(notFavourited)
        }
    }

    function AddToFavourites(index){ 
     
        if(!favourites){
            favourites = [index]
            setFavourite(Favourited)
        }
        else {
            if(!(favourites.find(i => i == index) + 1)){
                favourites.push(index)
                setFavourite(Favourited)
            } 
            else{
                favourites = favourites.filter(i => i != index)
                setFavourite(notFavourited)
            }
            
        }
        saveFavourites()
        

    }


    useEffect(() => {
      if( favourites && (favourites.find(i => i == props.curIndex) + 1) ){
        setFavourite(true)
      } else {
        setFavourite(false)
      }
 
    }, [props.curIndex])
    
return(
    <div>
        <h1>{title}</h1>
        <h2>{opening_crawl}</h2>
        <div>Release Date: {release_date}</div>
        <div>Director: {director}</div>
        <div>Producer: {producer}</div>
        <br/>

        <IconButton aria-label="starIcon"  onClick={() => {AddToFavourites(props.curIndex)}}>
            {isFavourite ?
                <StarIcon sx={{color:'gold'}} /> 
                : 
                <StarOutLineOutLinedIcon sx={{color:'gold'}} /> 
            } 
        </IconButton>
        
        

        <br/><br/><br/><br/>

        <div className='row'>
            <Scrollable ScroData={currentMovie.characters} curIndex = {props.curIndex} type={0} header={'Cast'} seterrorState= {props.seterrorState}/>
            <Scrollable ScroData={currentMovie.planets} curIndex = {props.curIndex} type={1} header={'Planets'} seterrorState= {props.seterrorState}/>
            <Scrollable ScroData={currentMovie.species} curIndex = {props.curIndex} type={2} header={'Species'} seterrorState= {props.seterrorState}/>
            <Scrollable ScroData={currentMovie.starships} curIndex = {props.curIndex} type={3} header={'StarShips'} seterrorState= {props.seterrorState}/>
            <Scrollable ScroData={currentMovie.vehicles} curIndex = {props.curIndex} type={4} header={'Vehicles'} seterrorState= {props.seterrorState}/>
        </div>

    </div>
    )
}
