
let myMap = L.map("map", {
    center: [0,0],
    zoom: 3
});

// map layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// data import

let crash_sites = d3.json('static/data/CleanAviationData.json').then(function(data) {
    console.log(data);

    for (i=0;i<data.length;i++) {
        let coords = [data[i].Latitude, data[i].Longitude];
        // console.log(coords);
        L.marker(coords).addTo(myMap);
    }
    
})





L.marker([33.17, -96.828]).addTo(myMap);
L.marker([49.435,-2.600278]).addTo(myMap);

