import React, { useEffect, useState } from 'react'
import Background from "./components/background"
import "./components/background.css"
import clearicon from "./assets/clear.png"
import cloudicon from "./assets/cloud.png"
import drizzleicon from "./assets/drizzle.png"
import rainicon from "./assets/rain.png"
import searchicon from "./assets/search.png"
import snowicon from "./assets/snow.png"
import WeatherDetails from "./components/temp.jsx"



const App = () => { 
  useEffect(function (){
    search()
  
    const rain = document.getElementById('rain');
    if (!rain) return;
        for(let i=0;i<140;i++){
          const d = document.createElement('div');
          d.className = 'drop';
          const isFat = Math.random() < 0.15;
          d.style.cssText = [
            'left:'+(Math.random()*110-5)+'%',
            'width:'+(isFat?2.2:1.4)+'px',
            'height:'+(isFat?22:12+Math.random()*14)+'px',
            'background:'+(isFat?'rgba(180,215,255,0.80)':'rgba(180,220,255,0.62)'),
            'opacity:'+(0.18+Math.random()*0.50),
            'animation-duration:'+(0.38+Math.random()*0.52)+'s',
            'animation-delay:'+(Math.random()*2.8)+'s',
          ].join(';');
          rain.appendChild(d);
        }
    const splash = document.getElementById('splash');
        for(let i=0;i<55;i++){
          const s = document.createElement('div');
          s.className = 'sp';
          s.style.cssText = [
            'left:'+(Math.random()*100)+'%',
            'width:'+(1+Math.random()*2)+'px',
            'height:'+(1+Math.random()*2)+'px',
            'animation-duration:'+(0.4+Math.random()*0.5)+'s',
            'animation-delay:'+(Math.random()*1.5)+'s',
          ].join(';');
          splash.appendChild(s);
        }

    const rLayer = document.getElementById('ripples');
        for(let i=0;i<8;i++){
          const r = document.createElement('div');
          r.className = 'ripple';
          r.style.cssText = [
            'left:'+(15+Math.random()*70)+'%',
            'top:'+(20+Math.random()*60)+'%',
            'animation-duration:'+(2.5+Math.random()*2)+'s',
            'animation-delay:'+(Math.random()*3)+'s',
          ].join(';');
          rLayer.appendChild(r);
        }        
  }, []);      


  
  let api_key="c37bd96735210c7bc30a12a642284ced";
  const [text, settext] = useState("Tokyo")
  const [icon, seticon] = useState(snowicon)
  const [temp, settemp] = useState(12)
  const [city, setcity] = useState("Tokyo")
  const [country, setcountry] = useState("JP")
  const [lat, setlat] = useState(0)
  const [log, setlog] = useState(0)
  const [humidity, sethumidity] = useState(0)
  const [wind, setwind] = useState(0)
  const [citynotfound, setcitynotfound] = useState(false)
  const [loading, setloading] = useState(false)
  const [error,seterror] = useState(null)

  const Weathericonmap = {
    "01d" : clearicon,
    "01n" : clearicon,
    "02d" : cloudicon,
    "02n" : cloudicon,
    "03d" : drizzleicon,
    "03n" : drizzleicon,
    "04d" : drizzleicon,
    "04n" : drizzleicon,
    "09d" : rainicon,
    "09n" : rainicon,
    "10d" : rainicon,
    "10n" : rainicon,
    "13d" : snowicon,
    "13n" : snowicon,
  };
  
  const search = async () => {
    setloading(true);
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=metric`

    try{
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      if(data.cod == "404"){
        console.log("City not found");
        setcitynotfound(true);
        setloading(false);
        return;
      }

      sethumidity(data.main.humidity);
      setwind(data.wind.speed);
      settemp(Math.floor(data.main.temp));
      setcity(data.name);
      setcountry(data.sys.country);
      setlat(data.coord.lat);
      setlog(data.coord.lon);
      const Weathericoncode = data.weather[0].icon;
      seticon(Weathericonmap[Weathericoncode] || clearicon); 
      setcitynotfound(false);
    }catch(error){
      console.error("An error occurred",error.messsage);
      seterror("An error occured while fetching weather data.");
    }
    finally{
      setloading(false);
    }

  };

  const handlecity = (e) => {
      settext(e.target.value)
  };

  const handlekeydown = (e) =>{
      if(e.key == "Enter"){
        search();
      }
  };

  useEffect(function (){
    search()
  },[]);
  return (
    <>
      <Background/>
      <div className='container'>
        <div className="input-container">
          <input type="text" spellCheck='false' className='cityinput' placeholder='Search City' onChange={handlecity} value={text} onKeyDown={handlekeydown}/>
          <div className="search-icon">
            <img src={searchicon} alt="Search" onClick={()=> search()} />
          </div>
        </div> 
        {!loading && !citynotfound && <WeatherDetails icon={icon} temp={temp} city={city} country={country} lat={lat} log={log} humidity={humidity}
        wind={wind} /> }
        {loading && <div className="loading-message">loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {citynotfound && <div className="citynotfound">City not found</div>}
        <p className='copyright'>
          Designed by <span>Mohan Prasanth</span>
        </p>
      </div>
    </>  
  )
}

export default App
