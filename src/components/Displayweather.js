import React from 'react'
import './displayweather.css'

function Displayweather(props) {
    const {data}=props;
    const iconurl="http://openweathermap.org/img/wn/" + `${data.weather[0].icon}`+ ".png"
    return (
        <div className="displayweather">
         <div className="maincard">
             <span className="cardtitle">
                 {data.name},{data.sys.country}.Weateher
             </span>
             <span className="cardsubtitle">
                 As of {new Date().toLocaleTimeString()}
             </span>
             
             <h1>{Math.floor(data.main.temp-273.15)} <sup>o</sup></h1>
          <span className="weather-main">
          
              {data.weather[0].main}
              {data.weather[0].description }
              </span>
              <img src={iconurl} className="weather-icon"/>
         </div>
         <div className="weatherdetails">
             <div className="section1">
                 <table>
                     
                 <tr>
                         <td>
                             <h4>High/Low</h4>
                         </td>
                         <td>
                             <span>
                             {Math.floor(data.main.temp_max-273.15)}/{Math.floor(data.main.temp_min -273.15)}<sup>o</sup>C
                             </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4>Humidity</h4>
                         </td>
                         <td>
                             <span>
                             {data.main.humidity}%
                             </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4>pressure</h4>
                         </td>
                         <td>
                             <span>
                            {data.main.pressure}Hpa
                             </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4>visibility</h4>
                         </td>
                         <td>
                             <span>
                            {data.visibility/1000}km
                             </span>
                         </td>
                     </tr>
                 </table>
             </div>

         
         <div className="section2">
                 <table>
                     
                 <tr>
                         <td>
                             <h4>wind</h4>
                         </td>
                         <td>
                             <span>
                           {Math.floor((data.wind.speed*18)/5)}km/hr
                             </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4>Wind direction</h4>
                         </td>
                         <td>
                             <span>
                             {data.wind.deg}<sup>o</sup>deg
                             </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4>Sunrise</h4>
                         </td>
                         <td>
                             <span>
                            {new Date(data.sys.sunrise *1000).toLocaleTimeString()}
                             </span>
                         </td>
                     </tr>
                     <tr>
                         <td>
                             <h4>sunset</h4>
                         </td>
                         <td>
                             <span>
                            {new Date(data.sys.sunset*1000).toLocaleTimeString()}
                             </span>
                         </td>
                     </tr>
                    
                 </table>
             </div>
        </div>
    </div>
    )
}

export default Displayweather
