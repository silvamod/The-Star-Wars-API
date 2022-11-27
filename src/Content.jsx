import React from 'react'
import { useState,useEffect } from 'react'
import Scrollable from './Scrollable'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Content(props) {
    var favourites = JSON.parse(localStorage.getItem('favourites'));
    const [FavouriteMessage, setFavouriteMessage] = useState('Add To Favourites')
    const notFavourited = false;
    const Favourited = true;

    function saveFavourites(){
        localStorage.setItem('favourites', JSON.stringify(favourites));
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
    function setFavourite(favBool){
        if(favBool){
            setFavouriteMessage('Favourite!')
        } else {
            setFavouriteMessage('Add to favourites')
        }
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
{props.isLoading ?
    <>
        <h1 style={{fontSize:25,fontWeight:'bold'}}>{props.data.results[props.curIndex].title}</h1>
        <h2>{props.data.results[props.curIndex].opening_crawl}</h2>
        <div>Release Date: {props.data.results[props.curIndex].release_date}</div>
        <div>Director: {props.data.results[props.curIndex].director}</div>
        <div>Producer: {props.data.results[props.curIndex].producer}</div>
        <br/>
        <div onClick={() => {AddToFavourites(props.curIndex)}}>{FavouriteMessage}</div>
        <br/><br/><br/><br/>
        <div className='row'>
        
        <Scrollable data={props.data.results[props.curIndex].characters} curIndex = {props.curIndex} type={0} header={'Cast'}/>
        <Scrollable data={props.data.results[props.curIndex].planets} curIndex = {props.curIndex} type={1} header={'Planets'}/>
        <Scrollable data={props.data.results[props.curIndex].species} curIndex = {props.curIndex} type={2} header={'Species'}/>
        <Scrollable data={props.data.results[props.curIndex].starships} curIndex = {props.curIndex} type={3} header={'StarShips'}/>
        </div>

        
    </>
   :  
   <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',alignContent:'center',height:'100vh',width:'100%' }}>
      <CircularProgress />
    </Box>}
    </div>
    )
}
