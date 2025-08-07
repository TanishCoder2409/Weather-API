import logo from './logo.svg';
import './App.css';
import {  useState } from 'react';
import axios from 'axios';

function App() {
  const [input, setinput] = useState("")
  const[response,setresponse]=useState()
  const inputdata=(e)=>{
    setinput(e.target.value)
  }
  const fetchdata=async ()=>{
    try{
      const fetchapi=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${'8983f6519f9146cc102f9d21c8bb5c6b'}`)
      setresponse(fetchapi)
      console.log(response)
    }
    catch(error){
      console.log("Error Found "+error)
    }
  }
  const getWeather=()=>{
    fetchdata()
  }
  return (
    <div className="App">
      <div className='Container'>
        <input type="text" placeholder='Enter City Name' value={input} onChange={inputdata}></input>
        <div className='btn'>
          <button className='button' onClick={getWeather}>Get Weather</button>
          {response && <>
          <p>Temperature is: {response.data.main.temp}</p>
          <p>Weather is: {response.data.weather[0].main}</p>
          <p>Description is: {response.data.weather[0].description}</p>
          </>}
        </div>
      </div>
    </div>  
 
  );
}

export default App;
