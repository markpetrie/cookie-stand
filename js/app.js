'use strict';
// Global array used to calculate cookie totals for each hour
var totalCookiesByHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Constructor function for creating new Locations

function Location(locName, minHourlyCust, maxHourlyCust, avgCookiesCust) {
  this.locName = locName;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesCust = avgCookiesCust;
  this.locationHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
  this.hourlyCookieCounts = [];
  this.totalCookieCount = 0;
  this.locationID;
  this.setHourlyCookieCount();
  this.render();
  this.renderTotals();
}

// setHourlyCookieCount() Location method -- sets hourly cookie counts -- called from Location constructor function

Location.prototype.setHourlyCookieCount = function (locName, minHourlyCust, maxHourlyCust, avgCookieCust) {
  console.log(this);
  for (var i = 0; i < this.locationHours.length; i++) {
    console.log('current loop location: ' + this.locName + '. locationHours.length: ' + this.locationHours.length + '.');
    var randomHourlyCust = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust + 1)) + 1;
    console.log('Random Hourly Customer Count: ' + randomHourlyCust + ' for ' + this.locationHours[i] + '.');
    var hourlyCookieCount = Math.round(randomHourlyCust * this.avgCookiesCust);
    this.hourlyCookieCounts.push(hourlyCookieCount);
    totalCookiesByHour[i] = totalCookiesByHour[i] + hourlyCookieCount;
    console.log('total cookies for all locations at index ' + i + ' :' + totalCookiesByHour[i]);
    console.log('hourlyCookieCounts: ' + this.hourlyCookieCounts);
  }
}

// render() method -- dynamically builds table and inserts data -- called from Location constructor function

Location.prototype.render = function () {
  var table = document.getElementById('counts');
  var row = document.createElement('tr');
  var locationCell = document.createElement('td');
  locationCell.innerText = this.locName;
  row.appendChild(locationCell);

  for (var i = 0; i < this.hourlyCookieCounts.length; i++) {
    var cell = document.createElement('td');
    cell.innerText = this.hourlyCookieCounts[i];
    row.appendChild(cell);
  }
  table.appendChild(row);
}

Location.prototype.renderTotals = function () {
    for (var i = 0; i < totalCookiesByHour.length; i++) {
    document.getElementById(i).innerText = totalCookiesByHour[i];
  }
}

// Add event listener and handler for submitting new location forms

var addLocation = document.getElementById('addLocation');
addLocation.addEventListener('submit', addNewLocation);

// onSubmit event handler that calls Location constructor function

function addNewLocation() {
  event.preventDefault();
  var form = event.target;
  console.log('event target: ' + event);
  var locName = form.locName.value;
  var minHourlyCust = form.minHourlyCust.value;
  var maxHourlyCust = form.maxHourlyCust.value;
  var avgCookiesCust = form.avgCookiesCust.value;
  var locId = form.locId.value;
  var newLocation = new Location(locName, minHourlyCust, maxHourlyCust, avgCookiesCust); // Call Location constructor function
}

// Generate original 5 locations using constructor function

var pdxAirport = new Location('PDX Airport', 23, 65, 6.3);
var pioneerSquare = new Location('Pioneer Square', 3, 24, 1.2);
var powells = new Location('Powell\'s', 11, 38, 3.7);
var stJohns = new Location('St. John\'s', 20, 38, 2.3);
var waterfront = new Location('Waterfront', 2, 16, 4.6);


// -------------------------------- END -------------------------------- //