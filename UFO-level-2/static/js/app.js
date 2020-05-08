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

// ==================== initial data load completed=========================

// ================== event tracking using this and on change method and captured column and value selection =============


var filterTest =[{name:"city",filtervalue:"reedville"},{name:"state",filtervalue:"ca"}]

// selected filter butt0n and asigned variable

var button = d3.select("#filter-btn");

// selected all input element / columnt filete and value
var filterElement = d3.selectAll("input");

// form empty array of object to capture column name and value to be filete and filter value 

var columntoFilter = []

// using event listner and to capture page neveigate and identify which filed is selected amd what value was entered for filter.

filterElement.on("change", function() {   
  
  for (i=0; i< 5; i++);
     
    var selectedColumn = d3.select(this);
    // console.log(selectedColumn)
    var columnName = selectedColumn.attr('id');
    // console.log(columnName)
    var columnValue = selectedColumn.property("value");
    // console.log(columnValue)
    var arrayElement = {name:{columnName},filtervalue:{columnValue}}
    // var arrayElement = {${columnName}:${columnValue}}
    // console.log(arrayElement)
    columntoFilter.push(arrayElement);
  });

    // validaiting array of object collected data from filter filed nevagation

    console.log(columntoFilter);

// This function is triggered when the button is clicked

button.on("click", function() {

  //  clear existing data

  d3.select("tbody").html(" ");

  // stop refresh data

  d3.event.preventDefault();

  //  filter result based on filter selected

  // validate is column no array is not empty atleast one value slected =========== nice to have
  
  if (columntoFilter === undefined || columntoFilter.length == 0) {
    // array empty or does not exist
    d3.select("tbody").html("Please select atleast one filter criteria");
    console.log ("Array is empt or not defined");
  }
  else{


    // create function taht filter data by looping through arrey
    // arrey where matching Key value with JS
    //  seems it is not feasible 

        function myFilter (arr) {

            console.log ("its working up to here")
                        
            columntoFilter.forEach((filter) => {
              console.log(filter); 
                        
            
              Object.entries(filter).forEach(([key, value]) => {
                var x = key
                var y = value
                console.log(x);
                console.log(y);
              });
            });

        };

        var filteredData = tableData.filter(myFilter)
 
  }
 
//   //================== validate if filtered data has result to display ==================

//  // ============== working code to display filtered result in table =====================

//   if (filteredData !=0){ 

//   // populated filtered data if in put matches result else message

//   filteredData.forEach((records) => {
//     var row = tbody.append("tr");
//     Object.entries(records).forEach(([key, value]) => {
//       var cell = row.append("td");
//       cell.text(value);
//     });
  
//   });

// } else {
//     console.log ("No Result found")
//     d3.select("tbody").html(" No result found for selected filter; Modify criteria");
// }

});


