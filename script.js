function weatherData(){
    let cityName = document.getElementById('cityName').value;
let  promise=new Promise((resolve,reject)=>{
var request=new XMLHttpRequest();
request.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=a43292ebbf1482b46db85b4a44f4a740`);
request.send();
request.onload=function(){
if(request.status==200){
    var data=JSON.parse(request.response)
    resolve(data);
    promise.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})
let weatherCard = document.getElementById('weatherCard');

weatherCard.innerHTML = `<div class="card" style="width: 25rem">
<div class="card-body">
<h5 class="card-title">Weather Data</h5>
<p class="card-text">District Name: ${data.name} </p>
<p class="card-text">Sunrise: ${data.sys.sunrise}</p>
<p class="card-text">Sunset: ${data.sys.sunset} </p>
<p class="card-text">Temperature: ${data.main.temp} </p>
<p class="card-text">Windspeed: ${data.wind.speed} </p>
</div>
</div>`
}
else{
    reject("error");
}
}

})
}
weatherData();