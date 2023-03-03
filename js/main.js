var weather =[];
async function getWeather(keyword){

  var res = await fetch( `http://api.weatherapi.com/v1/forecast.json?key=b1be7f29156b4e2da77143600232402&q=${keyword}&days=3&aqi=no&alerts=no`)
  weather = await res.json();
  displayWeather();
}



function displayWeather(){
  let cartona ="";
  


    cartona += `      <div class="container">

    <div class="forecast-container" id="forecast"><div class="today forecast">

    <div class="forecast-header" id="today">

    <div class="day">Sunday</div>

    <div class=" date">26February</div>

    </div> 
    <div class="forecast-content" id="current">
    <div class="location"> ${weather.location.name} </div>
    <div class="degree">
    <div class="num">${weather.current.temp_c}<sup>o</sup>C</div>

    <div class="forecast-icon">

      <img src=${weather.current.condition.icon} alt="" width="90">
     
    </div>	

    </div>
    <div class="custom">${weather.current.condition.text}</div>

    <span>       <img src="images/icon-umberella.png" alt="">20%   </span>
          <span> <img src="images/icon-wind.png" alt="">18km/h  </span>
          <span> <img src="images/icon-compass.png" alt="">East  </span>

    </div>
    </div>
    <div class="forecast">

    <div class="forecast-header">

      <div class="day">Monday</div>

    </div> 
    <div class="forecast-content">

      <div class="forecast-icon">

        <img src=${weather.forecast.forecastday[0].day.condition.icon} alt="" width="48">
        
      </div>

      <div class="degree">${weather.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C</div>

      
      <small>${weather.forecast.forecastday[0].day.mintemp_c}<sup>o</sup></small>

      <div class="custom">${weather.forecast.forecastday[0].day.condition.text}</div>
      
    </div>
  </div>	
    <div class="forecast">

      <div class="forecast-header">

      <div class="day">Tuesday</div>
      
    </div> 
    
    <div class="forecast-content">
      
      <div class="forecast-icon">
          
          <img src=${weather.forecast.forecastday[1].day.condition.icon} alt="" width="48">
      
      </div>

      <div class="degree">${weather.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>

      <small>${weather.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>

      <div class="custom">${weather.forecast.forecastday[1].day.condition.text}</div>
    
    </div>
    
    </div>
    
    </div>

    </div>`
    
  

  document.querySelector('.forecast-table').innerHTML =cartona ;
}


// let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// function test(){
// let specificdays =[];
//   for (var i = 0; i < days.length; i++) {
//     if(i < 3){

//       specificdays.push(days[i])
//     }
// }
//       console.log(specificdays);

// }
 