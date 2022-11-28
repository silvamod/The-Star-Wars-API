import React from 'react'
import { useState,useEffect } from 'react'
import ScrollableDiv from '../Scrollable/ScrollableDiv'
import './content.css'  
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star'
import StarOutLineOutLinedIcon from '@mui/icons-material/StarOutLineOutLined'

export default function Content(props) {
    var favourites = JSON.parse(localStorage.getItem('favourites'));
    const [isFavourite, setisFavourite] = useState(false)
    const notFavouritedMsg = 'Add To Favourites!'
    const FavouritedMsg = 'Favourite!'
    const StorageFavourite = 'favourites'
    const title = props.MoviesData.results[props.curIndex].title
    const opening_crawl = props.MoviesData.results[props.curIndex].opening_crawl
    const release_date = props.MoviesData.results[props.curIndex].release_date
    const director = props.MoviesData.results[props.curIndex].director
    const producer = props.MoviesData.results[props.curIndex].producer
    const currentMovie = props.MoviesData.results[props.curIndex]
    const CastType = 'cast'
    const PlanetsType = 'planets'
    const SpeciesType = 'species'
    const StarshipsType = 'starships'
    const VehiclesType = 'vehicles'

    function saveFavourites(){
        localStorage.setItem(StorageFavourite, JSON.stringify(favourites));
    }

    function AddToFavourites(index){ 
        if(!favourites){
            favourites = [index]
        }
        else if(!(favourites.find(i => i == index) + 1)){
            favourites.push(index)
        } 
        else{
            favourites = favourites.filter(i => i != index)
        }
        setisFavourite(!isFavourite)
        saveFavourites()
    }


    useEffect(() => {
      if( favourites && (favourites.find(i => i == props.curIndex) + 1) ){
        setisFavourite(true)
      } else {
        setisFavourite(false)
      }
 
    }, [props.curIndex])
    
return(
    <div>
        <h1>{title}</h1>

        <div className='MovieInfo'>

            <p>{opening_crawl}</p>

            <div>Release Date: {release_date}</div>

            <div>Director: {director}</div>

            <div>Producer: {producer}</div>

            <div className='ButtonWrapper'>
                <div className='ButtonText'>{isFavourite ? FavouritedMsg : notFavouritedMsg} </div>
                <IconButton aria-label="starIcon"  onClick={() => {AddToFavourites(props.curIndex)}}>
                    {isFavourite ?
                        <StarIcon sx={{color:'gold'}}/>
                        : 
                        <StarOutLineOutLinedIcon sx={{color:'gold'}} /> 
                    } 
                </IconButton>
            </div>
        </div>
        
        <div className='row'>
            Cast
            <ScrollableDiv ScroData={currentMovie.characters} curIndex = {props.curIndex} type={CastType} seterrorState= {props.seterrorState}/>
            Planets
            <ScrollableDiv ScroData={currentMovie.planets} curIndex = {props.curIndex} type={PlanetsType} seterrorState= {props.seterrorState}/>
            Species
            <ScrollableDiv ScroData={currentMovie.species} curIndex = {props.curIndex} type={SpeciesType} seterrorState= {props.seterrorState}/>
            Starships
            <ScrollableDiv ScroData={currentMovie.starships} curIndex = {props.curIndex} type={StarshipsType} seterrorState= {props.seterrorState}/>
            Vehicles
            <ScrollableDiv ScroData={currentMovie.vehicles} curIndex = {props.curIndex} type={VehiclesType} seterrorState= {props.seterrorState}/>
        </div>

    </div>
    )
}