import React from 'react'
import { useState,useEffect } from 'react'

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
        console.log("asdasd")
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
    

    if(props.data)
  return (
    <>
        <h1 style={{fontSize:25,fontWeight:'bold'}}>{props.data.results[props.curIndex].title}</h1>
        <h2>{props.data.results[props.curIndex].opening_crawl}</h2>
        <div>Release Date: {props.data.results[props.curIndex].release_date}</div>
        <div>Director: {props.data.results[props.curIndex].director}</div>
        <div>Producer: {props.data.results[props.curIndex].producer}</div>
        <br/>
        <div onClick={() => {AddToFavourites(props.curIndex)}}>{FavouriteMessage}</div>
        <br/><br/><br/><br/>
        <div className='ScrollableDiv'>

    <div>adwqdq</div>  <br/><div>adwqdq</div>  <div>adwqdq</div>  <div>adwqdq</div>  <div>adwqdq</div>  <div>adwqdq</div>  
    <div>adwqdq</div>  <div>adwqdq</div>  <div>adwqdq</div>  <div>adwqdq</div>  <div>adwqdq</div>  <div>adwqdq</div>  <div>adwqdq</div>

        </div>
    </>
  ) 
  else return(<></>)
}
