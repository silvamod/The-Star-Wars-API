import React from 'react'
import { useState,useEffect } from 'react'

export default function Content(props) {
    var favourites = JSON.parse(localStorage.getItem('favourites'));
    const [favouriteFlag, setfavouriteFlag] = useState('Add to favourites')


    function saveFavourites(){
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    function AddToFavourites(index){ 
        if(!favourites){
            favourites = [index]
        }
        else {
            if(!(favourites.find(i => i == index) + 1)){
                favourites.push(index)
            } 
            else{
                favourites = favourites.filter(i => i != index)
            }
            
        }
        saveFavourites()
        

    }

    useEffect(() => {
      if( (favourites.find(i => i == props.curIndex) + 1) ){
            setfavouriteFlag('Favourite!')
      } else {
            setfavouriteFlag('Add to favourites')
      }
      console.log(favouriteFlag)
    }, [favourites])
    

    if(props.data)
  return (
    <>
        <h1 style={{fontSize:25,fontWeight:'bold'}}>{props.data.results[props.curIndex].title}</h1>
        <h2>{props.data.results[props.curIndex].opening_crawl}</h2>
        <div onClick={() => {AddToFavourites(props.curIndex)}}>{favouriteFlag}</div>
    </>
  ) 
  else return(<></>)
}
