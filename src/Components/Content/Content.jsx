import React from 'react'
import { useState,useEffect } from 'react'
import Scrollable from '../Scrollable/Scrollable'
import './App.css'  

export default function Content(props) {
    var favourites = JSON.parse(localStorage.getItem('favourites'));
    const [FavouriteMessage, setFavouriteMessage] = useState('Add To Favourites')
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
            setFavouriteMessage('Favourite!')
        } else {
            setFavouriteMessage('Add to favourites')
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
        setFavouriteMessage('Favourite!')
      } else {
        setFavouriteMessage('Add to favourites')
      }
 
    }, [props.curIndex])
    
return(
<div>
{
    <>
        <h1>{title}</h1>
        <h2>{opening_crawl}</h2>
        <div>Release Date: {release_date}</div>
        <div>Director: {director}</div>
        <div>Producer: {producer}</div>
        <br/>
        <div onClick={() => {AddToFavourites(props.curIndex)}}>{FavouriteMessage}</div>
        <br/><br/><br/><br/>
        <div className='row'>

        <Scrollable ScroData={currentMovie.characters} curIndex = {props.curIndex} type={0} header={'Cast'}/>
        <Scrollable ScroData={currentMovie.planets} curIndex = {props.curIndex} type={1} header={'Planets'}/>
        <Scrollable ScroData={currentMovie.species} curIndex = {props.curIndex} type={2} header={'Species'}/>
        <Scrollable ScroData={currentMovie.starships} curIndex = {props.curIndex} type={3} header={'StarShips'}/>
        </div>

    </>

    }
    </div>
    )
}
