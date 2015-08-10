

angular.module('testMod', ['ngMaterial','mdDateTime']).controller('testCtrl', function($scope) {
	return $scope.date = new Date();
});


var testDate = new Date();
testDate.setDate(15);
testDate.setFullYear(2015);
testDate.setMonth(7);
var testEvent = new createEvent("Dinner with Paul", testDate, "green");

var testDate2 = new Date();
testDate2.setDate(20);
testDate2.setFullYear(2015);
testDate2.setMonth(7);
var testEvent2 = new createEvent("Meeting with Mary", testDate2, "yellow");

//Functions can be created in the place of this array.

var testEventArray = [testEvent,testEvent2];

var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var tmonth = month[d.getMonth()];
var tyear = d.getFullYear();


var headerHolder = {month:tmonth, year:tyear};



function previousButton(){
  if (headerHolder.month == "January"){
    headerHolder.month = "December";
    headerHolder.year = headerHolder.year - 1;
    //console.log(headerHolder.year);
  } else if (headerHolder.month == "February"){
    headerHolder.month = "January";
      ///console.log("Working!");

  } else if (headerHolder.month == "March"){
    headerHolder.month = "February";
      ///console.log("Working!");

  }  else if (headerHolder.month == "April"){
    headerHolder.month = "March";
      //console.log("Working!");

  }else if (headerHolder.month == "May"){
    headerHolder.month = "April";
      //console.log("Working!");

  } else if (headerHolder.month == "June"){
    headerHolder.month = "May";
      //console.log("Working!");

  } else if (headerHolder.month == "July"){
    headerHolder.month = "June";
      //console.log("Working!");

  } 
  else if (headerHolder.month == "August"){
    headerHolder.month = "July";
      //console.log("Working!");
      

  }
   else if (headerHolder.month == "September"){
    headerHolder.month = "August";
      //console.log("Working!");

  }
   else if (headerHolder.month == "October"){
    headerHolder.month = "September";
      //console.log("Working!");

  }
   else if (headerHolder.month == "November"){
    headerHolder.month = "October";
      //console.log("Working!");

  }
   else if (headerHolder.month == "December"){
    headerHolder.month = "November";
      //console.log("Working!");

  }
  updateMonthAndYear();
}


function nextButton(){
  if (headerHolder.month == "December"){
    headerHolder.month = "January";
    headerHolder.year = headerHolder.year + 1;
    //console.log(headerHolder.year);
  } else if (headerHolder.month == "January"){
    headerHolder.month = "February";
      //console.log("Working!");

  } else if (headerHolder.month == "February"){
    headerHolder.month = "March";
      //console.log("Working!");

  }  else if (headerHolder.month == "March"){
    headerHolder.month = "April";
      //console.log("Working!");

  }else if (headerHolder.month == "April"){
    headerHolder.month = "May";
      //console.log("Working!");

  } else if (headerHolder.month == "May"){
    headerHolder.month = "June";
      //console.log("Working!");

  } else if (headerHolder.month == "June"){
    headerHolder.month = "July";
      //console.log("Working!");

  } 
  else if (headerHolder.month == "July"){
    headerHolder.month = "August";
      //console.log("Working!");
      

  }
   else if (headerHolder.month == "August"){
    headerHolder.month = "September";
      //console.log("Working!");

  }
   else if (headerHolder.month == "September"){
    headerHolder.month = "October";
      //console.log("Working!");

  }
   else if (headerHolder.month == "October"){
    headerHolder.month = "November";
      //console.log("Working!");

  }
   else if (headerHolder.month == "November"){
    headerHolder.month = "December";
      //console.log("Working!");

  }
  updateMonthAndYear();
}

function stringMonthToNum(string){
  
  switch (string){
    case "January":
      return 0;
    case "February":
      return 1;
    case "March":
      return 2;
    case "April":
      return 3;
    case "May":
      return 4;
    case "June":
      return 5;
    case "July":
      return 6;
      
    case "August":
      return 7;
    case "September":
      return 8;
    case "October":
      return 9;
    case "November":
      return 10;
    case "December":
      return 11;
    
  }
}

function daysInAMonth(month){
  if (month == "September" || 
      month == "April" ||
      month == "June" ||
      month =="November"){
    return 30;
  } else if (month == "January" ||
             month == "March" || 
             month == "May" ||
             month == "July" ||
             month == "August" ||
             month == "October" ||
             month == "December"){
    return 31;
  } else if (month == "February" && headerHolder.year % 4 === 0){
    return 28;
  } else {
    return 29;
  }
  
}

function renderMonth(){

  var dateObj = new Date();
  dateObj.setFullYear(headerHolder.year);
  //alert(dateObj.getFullYear());
  dateObj.setMonth(stringMonthToNum(headerHolder.month));
  
  dateObj.setDate(1);
  
  var firstDay= dateObj.getDay();
  console.log("The first date is: " + firstDay.toString());
  
  
  
  
    for (i = 1; i <= daysInAMonth(headerHolder.month); i++){
      var ii = i + firstDay;
      var headerElement = document.getElementById("cal-label-" + ii.toString());
      var suppTextElement = document.getElementById("event-label-" + ii.toString());
      
      document.getElementById("cal-label-" + ii.toString()).innerHTML = i;
      document.getElementById("cal-label-" + ii.toString()).setAttribute("date" , (stringMonthToNum(headerHolder.month).toString() + "-" + i.toString() + "-" + headerHolder.year));
      console.log("I got this far!");
      
      suppTextElement.setAttribute("date" , (stringMonthToNum(headerHolder.month).toString() + "-" + i.toString() + "-" + headerHolder.year));
      
      for (n = 0; n < testEventArray.length; n++){
        calendarScanEvent(testEventArray[n], suppTextElement);
      }
    }
  
}


function updateMonthAndYear(){
  for (i = 1; i<= 35; i++){
    document.getElementById("cal-label-" + i.toString()).innerHTML = null;
    document.getElementById("event-label-" + i.toString()).innerHTML = null;
  }
  document.getElementById("calendar-header").innerHTML = headerHolder.month + " " + headerHolder.year.toString();
  
  console.log(headerHolder.month);
  renderMonth();
}

//Defining the event object

function createEvent(desc, dat, col){
  this.summary = desc;
  this.date = dat;
  this.color = col;
}



function calendarScanEvent(event, element){
  var formattedDate = event.date.getMonth().toString() + "-" + event.date.getDate().toString() + "-" + event.date.getFullYear().toString();
  if (formattedDate == element.getAttribute("date")){
    element.innerHTML = event.summary;
  } else {
    element.innerHTML = element.innerHTML;
  }
}

