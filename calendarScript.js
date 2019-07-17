window.onload = function(){
  var date = new Date();
  var month_list = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var month = date.getMonth(); //0-11 for the indexing of the month
  var year = date.getFullYear(); //returns the current year
  var first_date = month_name[month]+ " " + 1 + " " + year;
  //returns the first of this month July 1st 2019
  var tmp = new Date(first_date).toDateString(); //returns the first day as a string, will be used to highlight the current day
  var first_day = tmp.substring(0,3);   //returns the first three letters of the week stirng Monday = mon
  var day_name = ['Mon','Tues','Wen','Thur','Fri','Sat','Sun'];  
  var day_num = day_name.indexOf(firstDay); //return a 0-6 value of the day of the week of the current day
  var days = new Date(year,month+1,0).getDate(); //returns the total number of dates in the current month
}

function get_calander(day_no,days){ //pass in the number of the day and the days
  //should return a 7x7 table of days of the month
  
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  //row for the day letters 
  for(var i=0; i <=6;i++){
    var td = document.createElement('td');
    td.innerHTML = "SMTWTFS"[i] //first row of a calendar
    tr.appendChild(td);
  }
  table.appendChild(tr);
  //create the second row
  tr = document.createElement('tr');
  for(var i =0; i <= 6 i++)
  {
    if( i == day_no){
     break;
    }
    td.innerHTML = "";
    tr.appendChild('td');
    var count = 1;
    
                   
  }
  
  
}
