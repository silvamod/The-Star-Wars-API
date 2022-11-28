import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cards from './Components/Cards/Cards'
import Content from './Components/Content/Content'
import getRequest from './ApiUtils'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function App() {
  const [MoviesData, setMoviesData] = useState()
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
          setisLoading(true)
          setMoviesData(result)
          console.log(result)
        }) 
        ,
        (error) => {
          console.log("userLike err get=", error);
        };
         
  }, [])
  

  
  return (
    isLoading ? 
      <div className="App">
        <div className='Toc'>
          <Cards MoviesData = {MoviesData} setcurIndex = {setcurIndex}/>
        </div>
        <div className='WhiteSpace'></div>
        <div className='Content'>
          <Content MoviesData = {MoviesData} curIndex = {curIndex} isLoading = {isLoading }/>
        </div>
      </div> 
    :
      <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',alignContent:'center',height:'100vh',width:'100%' }}>
        <CircularProgress />
      </Box>

  )
}

export default App
