var inputValue=document.querySelector('#inputValue');
var submit=document.querySelector('#submit');
var place=document.querySelector('#place');
var temp=document.querySelector('#temp');
var country=document.querySelector('#country');
var sunrise=document.querySelector('#sunrise');
var sunset=document.querySelector('#sunset');

submit.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=017291c1a57fa8a7cd4d8ec19170da4d')
    .then(response => response.json())
    .then(data=>{
        var placeValue=data['name'];
        var countryValue=data['sys']['country'];
        var tempValue=data['main']['temp'];
        var inCel=Math.round(tempValue-273);
        var sunriseValue=data['sys']['sunrise'];
        var sunsetValue=data['sys']['sunset'];


        place.innerHTML=placeValue;
        country.innerHTML=countryValue;
        temp.innerHTML=`${inCel}°`;
        sunrise.innerHTML=sunriseValue;
        sunset.innerHTML=sunsetValue;
    })
    .catch(err => alert("You Enter a wrong city Name"))
})



