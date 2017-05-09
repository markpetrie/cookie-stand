
// Declare literal functions for each location

// PDX Airport
var locPdxAirport = {

  locName: 'PDX Airport',
  minHourlyCust: 23,
  maxHourlyCust: 65,
  // avgHourlyCustomers: 0,
  avgCookiesCust: 6.3,
  locationHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  totalCookieCount: 0,
  
// Return random number of customers per hour
  getRandomHourlyCust: function() {
  var min = this.minHourlyCust;
  var max = this.maxHourlyCust;
  var randomHourlyCust = Math.floor(Math.random() * (max - min)) + min;
  console.log('Random Hourly Customer Count = ' + randomHourlyCust + '.');
  return randomHourlyCust;
  },


setHourlyCookieCount: function() {
    var avgHourlyCustomers = locPdxAirport.getRandomHourlyCust();
    var hourlyCookieCount = Math.round(avgHourlyCustomers * this.avgCookiesCust);
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
    var currentHourlyCookieCount = locPdxAirport.setHourlyCookieCount();
    locPdxAirport.totalCookieCount = locPdxAirport.totalCookieCount + currentHourlyCookieCount;
    li.innerText = locPdxAirport.locationHours[hour] + ': ' + currentHourlyCookieCount + ' cookies';
    ul.appendChild(li); // we have to first loop through all hours and append the new ul witih each li
 }
    container.appendChild(ul); // after the loop is done, we can then add the ul (and all list items) to the container ID (body)
    var li = document.createElement('li');
    li.innerText = 'Total: ' + locPdxAirport.totalCookieCount + ' cookies';
    ul.appendChild(li);

    // End PDX Airport

    // -------------------------------------------

    // Begin Pioneer Square

var pioneerSquare = {

  locName: 'Pioneer Square',
  minHourlyCust: 3,
  maxHourlyCust: 24,
  avgCookiesCust: 1.2,
  locationHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  totalCookieCount: 0,
  
// Return random number of customers per hour
  getRandomHourlyCust: function() {
  var min = this.minHourlyCust;
  var max = this.maxHourlyCust;
  var randomHourlyCust = Math.floor(Math.random() * (max - min)) + min;
  console.log('Random Hourly Customer Count = ' + randomHourlyCust + '.');
  return randomHourlyCust;
  },


setHourlyCookieCount: function() {
    var avgHourlyCustomers = pioneerSquare.getRandomHourlyCust();
    var hourlyCookieCount = Math.round(avgHourlyCustomers * this.avgCookiesCust);
    // return 'Hourly cookie count for ' + locationHours + ' = ' + hourlyCookieCount + '.';
    return hourlyCookieCount;
},
  
 };

 var container = document.getElementById('container'); // set var container to the associated container ID element (<body>)
 var h3 = document.createElement('h3'); // create a new h3 element (not used yet, but waiting in memory)
 h3.innerText=pioneerSquare.locName; // set the innerText of the new h3 to the locName property of the main locPdxAirport object
 container.appendChild(h3); // add the h3 with innerText to the html body
 
 var ul = document.createElement('ul'); // create a new <ul> in memory

 for (var hour = 0; hour < pioneerSquare.locationHours.length; hour++) {
    var li = document.createElement('li');
    var currentHourlyCookieCount = pioneerSquare.setHourlyCookieCount();
    pioneerSquare.totalCookieCount = pioneerSquare.totalCookieCount + currentHourlyCookieCount;
    li.innerText = pioneerSquare.locationHours[hour] + ': ' + currentHourlyCookieCount + ' cookies';
    ul.appendChild(li); // we have to first loop through all hours and append the new ul witih each li
 }
    container.appendChild(ul); // after the loop is done, we can then add the ul (and all list items) to the container ID (body)
    var li = document.createElement('li');
    li.innerText = 'Total: ' + pioneerSquare.totalCookieCount + ' cookies';
    ul.appendChild(li);

    // End Pioneer Square

    // -------------------------------------------

    // Begin Powell's

var powells = {

  locName: 'Powell\'s',
  minHourlyCust: 11,
  maxHourlyCust: 38,
  avgCookiesCust: 3.7,
  locationHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  totalCookieCount: 0,
  
// Return random number of customers per hour
  getRandomHourlyCust: function() {
  var min = this.minHourlyCust;
  var max = this.maxHourlyCust;
  var randomHourlyCust = Math.floor(Math.random() * (max - min)) + min;
  console.log('Random Hourly Customer Count = ' + randomHourlyCust + '.');
  return randomHourlyCust;
  },


setHourlyCookieCount: function() {
    var avgHourlyCustomers = powells.getRandomHourlyCust();
    var hourlyCookieCount = Math.round(avgHourlyCustomers * this.avgCookiesCust);
    // return 'Hourly cookie count for ' + locationHours + ' = ' + hourlyCookieCount + '.';
    return hourlyCookieCount;
},
  
 };

 var container = document.getElementById('container'); // set var container to the associated container ID element (<body>)
 var h3 = document.createElement('h3'); // create a new h3 element (not used yet, but waiting in memory)
 h3.innerText=powells.locName; // set the innerText of the new h3 to the locName property of the main locPdxAirport object
 container.appendChild(h3); // add the h3 with innerText to the html body
 
 var ul = document.createElement('ul'); // create a new <ul> in memory

 for (var hour = 0; hour < powells.locationHours.length; hour++) {
    var li = document.createElement('li');
    var currentHourlyCookieCount = powells.setHourlyCookieCount();
    powells.totalCookieCount = powells.totalCookieCount + currentHourlyCookieCount;
    li.innerText = powells.locationHours[hour] + ': ' + currentHourlyCookieCount + ' cookies';
    ul.appendChild(li); // we have to first loop through all hours and append the new ul witih each li
 }
    container.appendChild(ul); // after the loop is done, we can then add the ul (and all list items) to the container ID (body)
    var li = document.createElement('li');
    li.innerText = 'Total: ' + powells.totalCookieCount + ' cookies';
    ul.appendChild(li);

    // End Powells

    // -------------------------------------------

    // Begin St. John's

var stJohns = {

  locName: 'St. John\'s',
  minHourlyCust: 20,
  maxHourlyCust: 38,
  avgCookiesCust: 2.3,
  locationHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  totalCookieCount: 0,
  
// Return random number of customers per hour
  getRandomHourlyCust: function() {
  var min = this.minHourlyCust;
  var max = this.maxHourlyCust;
  var randomHourlyCust = Math.floor(Math.random() * (max - min)) + min;
  console.log('Random Hourly Customer Count = ' + randomHourlyCust + '.');
  return randomHourlyCust;
  },


setHourlyCookieCount: function() {
    var avgHourlyCustomers = stJohns.getRandomHourlyCust();
    var hourlyCookieCount = Math.round(avgHourlyCustomers * this.avgCookiesCust);
    // return 'Hourly cookie count for ' + locationHours + ' = ' + hourlyCookieCount + '.';
    return hourlyCookieCount;
},
  
 };

 var container = document.getElementById('container'); // set var container to the associated container ID element (<body>)
 var h3 = document.createElement('h3'); // create a new h3 element (not used yet, but waiting in memory)
 h3.innerText=stJohns.locName; // set the innerText of the new h3 to the locName property of the main locPdxAirport object
 container.appendChild(h3); // add the h3 with innerText to the html body
 
 var ul = document.createElement('ul'); // create a new <ul> in memory

 for (var hour = 0; hour < stJohns.locationHours.length; hour++) {
    var li = document.createElement('li');
    var currentHourlyCookieCount = stJohns.setHourlyCookieCount();
    stJohns.totalCookieCount = stJohns.totalCookieCount + currentHourlyCookieCount;
    li.innerText = stJohns.locationHours[hour] + ': ' + currentHourlyCookieCount + ' cookies';
    ul.appendChild(li); // we have to first loop through all hours and append the new ul witih each li
 }
    container.appendChild(ul); // after the loop is done, we can then add the ul (and all list items) to the container ID (body)
    var li = document.createElement('li');
    li.innerText = 'Total: ' + stJohns.totalCookieCount + ' cookies';
    ul.appendChild(li);

    // End St. John's

    // -------------------------------------------

    // Begin Waterfront

var waterfront = {

  locName: 'waterfront',
  minHourlyCust: 2,
  maxHourlyCust: 16,
  avgCookiesCust: 4.6,
  locationHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  totalCookieCount: 0,
  
// Return random number of customers per hour
  getRandomHourlyCust: function() {
  var min = this.minHourlyCust;
  var max = this.maxHourlyCust;
  var randomHourlyCust = Math.floor(Math.random() * (max - min)) + min;
  console.log('Random Hourly Customer Count = ' + randomHourlyCust + '.');
  return randomHourlyCust;
  },


setHourlyCookieCount: function() {
    var avgHourlyCustomers = waterfront.getRandomHourlyCust();
    var hourlyCookieCount = Math.round(avgHourlyCustomers * this.avgCookiesCust);
    // return 'Hourly cookie count for ' + locationHours + ' = ' + hourlyCookieCount + '.';
    return hourlyCookieCount;
},
  
 };

 var container = document.getElementById('container'); // set var container to the associated container ID element (<body>)
 var h3 = document.createElement('h3'); // create a new h3 element (not used yet, but waiting in memory)
 h3.innerText=waterfront.locName; // set the innerText of the new h3 to the locName property of the main locPdxAirport object
 container.appendChild(h3); // add the h3 with innerText to the html body
 
 var ul = document.createElement('ul'); // create a new <ul> in memory

 for (var hour = 0; hour < waterfront.locationHours.length; hour++) {
    var li = document.createElement('li');
    var currentHourlyCookieCount = waterfront.setHourlyCookieCount();
    waterfront.totalCookieCount = waterfront.totalCookieCount + currentHourlyCookieCount;
    li.innerText = waterfront.locationHours[hour] + ': ' + currentHourlyCookieCount + ' cookies';
    ul.appendChild(li); // we have to first loop through all hours and append the new ul witih each li
 }
    container.appendChild(ul); // after the loop is done, we can then add the ul (and all list items) to the container ID (body)
    var li = document.createElement('li');
    li.innerText = 'Total: ' + waterfront.totalCookieCount + ' cookies';
    ul.appendChild(li);

    // End Waterfront





