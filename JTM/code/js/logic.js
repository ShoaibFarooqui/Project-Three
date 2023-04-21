
let myMap = L.map("map", {
    center: [0,0],
    zoom: 3
  });

// map layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// data import

d3.json('static/data/CleanAviationData.json').then(function(data)    {
    console.log(data);
});

