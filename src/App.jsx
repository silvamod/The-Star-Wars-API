import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cards from './Cards'
import Content from './Content'

function App() {
  const [data, setData] = useState()
  const [curIndex, setcurIndex] = useState(0)
  const [isLoading, setisLoading] = useState(false)
  const apiUrl = "https://swapi.dev/api/films/"

  useEffect(() => {
    fetch(apiUrl, {
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
          setisLoading(true)
          console.log(result)
          }) 
        ,
        (error) => {
          console.log("userLike err get=", error);
        };
  }, [])
  

  return (
    <div className="App">
      <div className='Toc'>
        <Cards data = {data} setcurIndex = {setcurIndex}/>
      </div>
      <div className='WhiteSpace'></div>
      <div className='Content'>
        <Content data = {data} curIndex = {curIndex} isLoading = {isLoading}/>
      </div>
    </div>
  )
}

export default App
