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
 var i;
  for(var i =0; i <= 6 i++)
  {
    if( i == day_no){
     break;
    }
    td = document.createElement('tr');
    td.innerHTML = "";
    tr.appendChild('td');              
  }
   var count = 1;
  for(;i<=6;i++){
    var td = document.createElement('td');
    td.innerHTML = count;
    count++;
    tr.appendChild(tr);
    //rest of the date rows
    for(var r = 3; r <= 6; r++){
      tr = document.createElement('tr');
        for(var c =0; c<=6;c++){
        if(count > days){
          table.appendChild(tr);
          return table;
        }
        /*
        
        import java.util.*;

class Main {
  
  public static void populateExerciseList(ArrayList workoutList){ 

    ArrayList<String> squatMuscles = new ArrayList<String>(Arrays.asList("quad","hamstrings","glutes"));
    workout squat = new workout(10,squatMuscles);
    workoutList.add(squat);
    ArrayList<String> bicepCurlMuscles = new ArrayList<String>(Arrays.asList("bicep"));
    workout bicepCurl = new workout(3,bicepCurlMuscles); 
    workoutList.add(bicepCurl);

  }
  public static void main(String[] args) {
    ArrayList<String> typesOfRoutines = new ArrayList<String>(Arrays.asList("strength","hypertrophy","endurence"));
    
    Scanner scan = new Scanner(System.in);
    System.out.println("Enter the difficulty of the routine you want to make 100,200,300 or 400");
    int difficultyOfRoutine = scan.nextInt(); //get the difficulty of the next workout
    
        System.out.println("Enter the type of workout you want: strength,hypertrophy,endurence");
    String typeOfWorkout = scan.nextString(); //get the difficulty of the next workout
    
   System.out.println(difficultyOfRoutine); 
   System.out.println(typeOfWorkout);
   ArrayList<workout> masterList = new ArrayList<workout>();
   populateExerciseList(masterList); //populates the list
   for(workout c: masterList)
   System.out.println(c.difficulty);

import java.util.*;

public class workout
{
int difficulty;
ArrayList<String> musclesWorked = new ArrayList<String>();

  public workout(int dif, ArrayList workedMuscles)
  {
  this.difficulty = dif;
  this.musclesWorked = workedMuscles;

  }



}
  }



}
        
        
        
        
       */
        
        }
    }
  }
  
}
