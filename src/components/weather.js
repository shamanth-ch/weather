import React,{useState} from 'react'
import Displayweather from './Displayweather';
import "./weather.css";

function  Weather() {
    const [Weather, setWeather] = useState([])
    const APIKEY="6120689f1fbc21eafabfa768b0851170";  
    const [form,setForm]=useState({
        city:"",
        country:""

    })
    async function weatherData(e)
    {
        e.preventDefault();
        if(form.city==="")
           { alert("ADD city value");

           }
    else
    {
        const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}
        `).then((res)=>res.json())
        .then((data)=>data);
        setWeather(
            {
                data :data
            }
            
        );

        
    }
}
    const handleChange=(e)=>
    {
      let name=e.target.name;
      let value=e.target.value;
     if(name=="city")
     {
         setForm({...form,city:value});
     }
     if(name=="country")
     {
         setForm({...form,country:value});
     }
    };
    

    return (
        <div className="weather">
            <span className="title">Weather App</span>
            <br />
        <form>
             <input type="text" name="city" placeholder="city"  onChange={e=>handleChange(e)}/>
            &nbsp;
            &nbsp;
            &nbsp;
             <input type="text" name="country" placeholder="country" onChange={e=>handleChange(e)}/>
             <button className="getweather" onClick={e=>weatherData(e)}>submit</button>
        </form>
       
       {
           Weather.data !==undefined?(
               <div>
                   <Displayweather data={Weather.data} />
                   </div>
           ):null }
        </div>
       
    )
}

export default Weather;  
