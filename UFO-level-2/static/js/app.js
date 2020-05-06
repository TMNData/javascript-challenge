// from data.js
var tableData = data;

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

    var toFilter = d3.selectAll("input")
  //   toFilter.on("change", function() {
    
  //   console.log(this)
  //   var filterArray = []
  //   // Select the input element and get the raw HTML node
  //   var inputElement = d3.select(this);
  //   console.log(inputElement)
  //   // Get the value property of the input element
  //   var columnKey = inputElement.attr('id')
  //   console.log(columnKey)
  //   var columnValue = inputElement.property("value");
  //   console.log(columnValue)
  //   var arrayElement = `{${columnKey}:"${columnValue}"}`
  //   filterArray.push(arrayElement)
  //   console.log(filterArray)
  //   return filterArray 
  // });

  function  handleFunction (event){

    var filterArray = []
    for (i=0; i<5; i++)
    var inputElement = d3.select(this);
    console.log(inputElement)
    // Get the value property of the input element
    var columnKey = inputElement.attr('id')
    console.log(columnKey)
    var columnValue = inputElement.property("value");
    console.log(columnValue)
    var arrayElement = `{${columnKey}:"${columnValue}"}`
    filterArray.push(arrayElement)
    console.log(filterArray)
    return filterArray 

  }

    var querryColumn = toFilter.on("change", handleFunction)
    console.log(querryColumn)
// setting variable to input iteam

var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputCountry = d3.select("#country");
var inputState = d3.select("#state");
var inputShape = d3.select("#shape");



var button = d3.select("#filter-btn");

// This function is triggered when the button is clicked

button.on("click", function() {

  // console.log(`Query Request for: ${dateSelected}`);
  
  d3.select("tbody").html(" ");

  d3.event.preventDefault();

  var dateSelected = d3.select("#datetime").property("value")

  console.log(dateSelected);

  //  filter result based on filter selected

  // var filteredData = tableData.filter(ufo => ufo.datetime === dateSelected)

  function buttonHandle (event){

    for (i=0,i<querryColumn.lenth; i ++)
      return (ufo => ufo.querryColumn.key )
  })

  var filteredData = tableData.filter(buttonHandle)
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


