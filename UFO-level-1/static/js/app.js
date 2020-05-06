// from data.js
var tableData = data;

// YOUR CODE HERE!

// loact table body to populate data
var tbody = d3.select("tbody");
console.log(tableData);

// using for each loop throuh table data and poplate data 
tableData.forEach((ufoEvent) => {
    var row = tbody.append("tr");
    Object.entries(ufoEvent).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// setting variable to input iteam

var inputDate = d3.select("#datetime");

// setting variable to input iteam

var button = d3.select("#filter-btn");

// This function is triggered when the button is clicked

button.on("click", function() {

  // console.log(`Query Request for: ${dateSelected}`);
  
  d3.select("tbody").html(" ");

  d3.event.preventDefault();

  var dateSelected = d3.select("#datetime").property("value")

  console.log(dateSelected);

  //  filter result based on filter selected

  var filteredData = tableData.filter(ufo => ufo.datetime === dateSelected)
  console.log(filteredData)

  if (filteredData !=0){ 

  // populated filtered data if in put matches result else message

  filteredData.forEach((eventFilter) => {
    var row = tbody.append("tr");
    Object.entries(eventFilter).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  
  });

} else {
    console.log ("No Result found")
    d3.select("tbody").html(" No result found for selected filter; Modify criteria");
}

});


