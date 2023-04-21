//How do I use database?
//Import data from json
//FIRST JSON MUST BE CREATED FROM DATABASE?
/* 
  // CODE USING D3 TO READ JSON ONCE ITS CREATED, importedData is simply the chosen variable name
  d3.json("data/data.json").then((importedData) => {
  // console.log(importedData);
  let data = importedData;

*/

//USE FLASK - FIRST LEARN WHAT FLASK IS USED FOR??





//Initial map object 
let myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
  });

//Adding a tile layer (in this case the background image)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Adding a market to the map w coordinates
let marker = L.marker([45.52, -122.67], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

