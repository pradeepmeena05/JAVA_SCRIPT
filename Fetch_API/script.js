let promise=fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,windspeed_10m&hourly=temperature_2m,relativehumidity_2m,windspeed_10m")

promise.then((response)=>{
    console.log(response.status);
    console.log(response.ok)
    // return response.text();
    return response.json();
}).then((val)=>{
    console.log(val)
})

