const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'd53f560f0amsh9b619f989eab13ap16bc9fjsncef76a603100',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));



    
    var data = document.getElementById("temp-span"
    );

    console.log(data);