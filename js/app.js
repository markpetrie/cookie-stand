
// Constructor function for creating Locations

function Location(locName, minHourlyCust, maxHourlyCust, avgCookiesCust, locationHours, totalCookieCount) {
  this.locName = locName;
  this.minHourlyCust = minHourlyCust;
  this.maxHourlyCust = maxHourlyCust;
  this.avgCookiesCust = avgCookiesCust;
  this.locationHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
  this.hourlyCookieCounts = [];
  this.totalCookieCount = 0;
  this.locationID;
}

// setHourlyCookieCount function to calculate and set hourly cookie counts

Location.prototype.setHourlyCookieCount = function (minHourlyCust, maxHourlyCust, avgCookiesCust, locationHours) {
  console.log(this);
  for (var hour = 0; hour < this.locationHours.length; hour++) {
    var randomHourlyCust = Math.floor(Math.random() * (this.maxHourlyCust - this.minHourlyCust)) + this.minHourlyCust;
    var hourlyCookieCount = Math.round(randomHourlyCust * this.avgCookiesCust);
    this.hourlyCookieCounts.push(hourlyCookieCount);
    console.log('hourlyCookieCounts: ' + this.hourlyCookieCounts);
  }
}

// Render function to populate HTML table with location cookie count data

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

// Create new location from form submission

var newLocation = document.getElementById('addLocation');
newLocation.addEventListener('submit', addNewLocation);

function addNewLocation() {
  event.preventDefault();
  var form = event.target;
  console.log('event target: ' + event);
  var locName = form.locName.value;
  var minHourlyCust = form.minHourlyCust.value;
  var maxHourlyCust = form.maxHourlyCust.value;
  var avgCookiesCust = form.avgCookiesCust.value;
  var locID = form.locID.value;
  var locationHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
  var hourlyCookieCounts = [];
  var totalCookieCount = 0;

  // Create new location using 
  var newL = new Location(locName, minHourlyCust, maxHourlyCust, avgCookiesCust);

  // 
  newL.setHourlyCookieCount(minHourlyCust, maxHourlyCust, avgCookiesCust, locationHours);
  newL.render();

}

// Generate original 5 locations using constructor function

var pdxAirport = new Location('PDX Airport', 23, 65, 6.3);
var pioneerSquare = new Location('Pioneer Square', 3, 24, 1.2);
var powells = new Location('Powell\'s', 11, 38, 3.7);
var stJohns = new Location('St. John\'s', 20, 38, 2.3);
var waterfront = new Location('Waterfront', 2, 16, 4.6);

pdxAirport.setHourlyCookieCount(this.minHourlyCust, this.maxHourlyCust, this.avgCookiesCust, this.locationHours);
pioneerSquare.setHourlyCookieCount(this.minHourlyCust, this.maxHourlyCust, this.avgCookiesCust, this.locationHours);
powells.setHourlyCookieCount(this.minHourlyCust, this.maxHourlyCust, this.avgCookiesCust, this.locationHours);
stJohns.setHourlyCookieCount(this.minHourlyCust, this.maxHourlyCust, this.avgCookiesCust, this.locationHours);
waterfront.setHourlyCookieCount(this.minHourlyCust, this.maxHourlyCust, this.avgCookiesCust, this.locationHours);

// Populate HTML table with location cookie count data

pdxAirport.render();
pioneerSquare.render();
powells.render();
stJohns.render();
waterfront.render();



