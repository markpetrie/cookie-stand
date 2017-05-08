
// Declare literal functions for each location

// 

var loc_pdx_airport = {

  locName: 'PDX Airport',
  minHourlyCust: 5,
  maxHourlyCust: 20,
  avgHourlyCustomers: 0,
  avgCookiesCust: 3,
  locationHours: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],

  
// Function to generate random number of cusomers per hour
  getRandomHourlyCust: function() {
  min = this.minHourlyCust;
  max = this.maxHourlyCust;
  randomHourlyCust = Math.floor(Math.random() * (max - min)) + min;
  console.log('Random Hourly Customer Count = ' + randomHourlyCust + '.');
  },


setHourlyCookieCount: function(locationHours) {
    avgHourlyCustomers = getRandomHourlyCust();
    hourlyCookieCount = locationHours + ' --> ' + (avgHourlyCustomers * avgCookiesCust);
    return 'Hourly cookie count for ' + locationHours + ' = ' + hourlyCookieCount + '.';
},
  
 };

 var container = document.getElementById('container');
 var h3 = document.createElement('h3');
 h3.innerText=loc_pdx_airport.locName;
 container.appendChild(h3);