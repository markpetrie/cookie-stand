
// Declare literal functions for each location

// 

var locPdxAirport = {

  locName: 'PDX Airport',
  minHourlyCust: 5,
  maxHourlyCust: 20,
  // avgHourlyCustomers: 0,
  avgCookiesCust: 3,
  locationHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],

  
// Function to generate random number of customers per hour
  getRandomHourlyCust: function() {
  var min = this.minHourlyCust;
  var max = this.maxHourlyCust;
  var randomHourlyCust = Math.floor(Math.random() * (max - min)) + min;
  console.log('Random Hourly Customer Count = ' + randomHourlyCust + '.');
  return randomHourlyCust;
  },


setHourlyCookieCount: function() {
    var avgHourlyCustomers = locPdxAirport.getRandomHourlyCust();
    var hourlyCookieCount = avgHourlyCustomers * this.avgCookiesCust;
    // return 'Hourly cookie count for ' + locationHours + ' = ' + hourlyCookieCount + '.';
    return hourlyCookieCount;
},
  
 };

 var container = document.getElementById('container'); // set var container to the associated container ID element (<body>)
 var h3 = document.createElement('h3'); // create a new h3 element (not used yet, but waiting in memory)
 h3.innerText=locPdxAirport.locName; // set the innerText of the new h3 to the locName property of the main locPdxAirport object
 container.appendChild(h3); // add the h3 with innerText to the html body
 
 var ul = document.createElement('ul'); // create a new <ul> in memory

 for (var hour = 0; hour < locPdxAirport.locationHours.length; hour++) {
    var li = document.createElement('li');
    li.innerText = locPdxAirport.locationHours[hour] + ': ' + locPdxAirport.setHourlyCookieCount() + ' cookies';
    ul.appendChild(li); // we have to first loop through all hours and append the new ul witih each li
 }
    container.appendChild(ul); // after the loop is done, we can then add the ul (and all list items) to the container ID (body)