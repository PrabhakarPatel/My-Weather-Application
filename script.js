const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0ed26fb124msha0b44ee96fa3058p1222c0jsn6e085683da9b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
    console.log(response)

//   cloud_pct.innerHTML = response.cloud_pct 
  temp.innerHTML = response.temp 
  temp2.innerHTML = response.temp 
  feels_like.innerHTML = response.feels_like
  humidity.innerHTML = response.humidity
  humidity2.innerHTML = response.humidity
  min_temp.innerHTML = response.min_temp 
  max_temp.innerHTML = response.max_temp 
  wind_speed.innerHTML = response.wind_speed
  wind_speed2.innerHTML = response.wind_speed
  wind_degrees.innerHTML = response.wind_degrees  
  sunrise.innerHTML = response.sunrise
  sunset.innerHTML = response.sunset 
})






	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})


getWeather("Delhi")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        tempSeattle.innerHTML = response.temp 
        cloud_pctSeattle.innerHTML = response.cloud_pct
      //   temp2.innerHTML = response.temp 
        feels_likeSeattle.innerHTML = response.feels_like
        humiditySeattle.innerHTML = response.humidity
      //   humidity2.innerHTML = response.humidity
        min_tempSeattle.innerHTML = response.min_temp 
        max_tempSeattle.innerHTML = response.max_temp 
        wind_speedSeattle.innerHTML = response.wind_speed
      //   wind_speed2.innerHTML = response.wind_speed
        wind_degreesSeattle.innerHTML = response.wind_degrees  
        sunriseSeattle.innerHTML = response.sunrise
        sunsetSeattle.innerHTML = response.sunset 
              
    
    
    })
	.catch(err =>  console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        tempMumbai.innerHTML = response.temp 
        cloud_pctMumbai.innerHTML = response.cloud_pct
      //   temp2.innerHTML = response.temp 
        feels_likeMumbai.innerHTML = response.feels_like
        humidityMumbai.innerHTML = response.humidity
      //   humidity2.innerHTML = response.humidity
        min_tempMumbai.innerHTML = response.min_temp 
        max_tempMumbai.innerHTML = response.max_temp 
        wind_speedMumbai.innerHTML = response.wind_speed
      //   wind_speed2.innerHTML = response.wind_speed
        wind_degreesMumbai.innerHTML = response.wind_degrees  
        sunriseMumbai.innerHTML = response.sunrise
        sunsetMumbai.innerHTML = response.sunset 
              
    
    
    })
	.catch(err =>  console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        
        tempDelhi.innerHTML = response.temp 
        cloud_pctDelhi.innerHTML = response.cloud_pct
      //   temp2.innerHTML = response.temp 
        feels_likeDelhi.innerHTML = response.feels_like
        humidityDelhi.innerHTML = response.humidity
      //   humidity2.innerHTML = response.humidity
        min_tempDelhi.innerHTML = response.min_temp 
        max_tempDelhi.innerHTML = response.max_temp 
        wind_speedDelhi.innerHTML = response.wind_speed
      //   wind_speed2.innerHTML = response.wind_speed
        wind_degreesDelhi.innerHTML = response.wind_degrees  
        sunriseDelhi.innerHTML = response.sunrise
        sunsetDelhi.innerHTML = response.sunset 
              
    
    
    })
	.catch(err =>  console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        // console.log(response)
        tempLucknow.innerHTML = response.temp 
        cloud_pctLucknow.innerHTML = response.cloud_pct
      //   temp2.innerHTML = response.temp 
        feels_likeLucknow.innerHTML = response.feels_like
        humidityLucknow.innerHTML = response.humidity
      //   humidity2.innerHTML = response.humidity
        min_tempLucknow.innerHTML = response.min_temp 
        max_tempLucknow.innerHTML = response.max_temp 
        wind_speedLucknow.innerHTML = response.wind_speed
      //   wind_speed2.innerHTML = response.wind_speed
        wind_degreesLucknow.innerHTML = response.wind_degrees  
        sunriseLucknow.innerHTML = response.sunrise
        sunsetLucknow.innerHTML = response.sunset 
              
    
    
    })
	.catch(err =>  console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Pune', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        // console.log(response)
        tempPune.innerHTML = response.temp 
        cloud_pctPune.innerHTML = response.cloud_pct
      //   temp2.innerHTML = response.temp 
        feels_likePune.innerHTML = response.feels_like
        humidityPune.innerHTML = response.humidity
      //   humidity2.innerHTML = response.humidity
        min_tempPune.innerHTML = response.min_temp 
        max_tempPune.innerHTML = response.max_temp 
        wind_speedPune.innerHTML = response.wind_speed
      //   wind_speed2.innerHTML = response.wind_speed
        wind_degreesPune.innerHTML = response.wind_degrees  
        sunrisePune.innerHTML = response.sunrise
        sunsetPune.innerHTML = response.sunset 
              
    
    
    })
	.catch(err =>  console.error(err));
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
	.then(response => response.json())
	.then(response => {
        // console.log(response)
        // console.log(response)
        tempKolkata.innerHTML = response.temp 
        cloud_pctKolkata.innerHTML = response.cloud_pct
      //   temp2.innerHTML = response.temp 
        feels_likeKolkata.innerHTML = response.feels_like
        humidityKolkata.innerHTML = response.humidity
      //   humidity2.innerHTML = response.humidity
        min_tempKolkata.innerHTML = response.min_temp 
        max_tempKolkata.innerHTML = response.max_temp 
        wind_speedKolkata.innerHTML = response.wind_speed
      //   wind_speed2.innerHTML = response.wind_speed
        wind_degreesKolkata.innerHTML = response.wind_degrees  
        sunriseKolkata.innerHTML = response.sunrise
        sunsetKolkata.innerHTML = response.sunset 
              
    
    
    })
	.catch(err =>  console.error(err));