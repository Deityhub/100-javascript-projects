// How many exercises do I have to do 
// per day to complete 100 of them by Jan 1, 2017?

var daysLeftInYear = 183;
var numExercisesRemaining = 99;
var exercisesPerDay = daysLeftInYear / numExercisesRemaining;
var completionDate = "Jan 1, 2017";

console.log(
  "There are " + daysLeftInYear + " days left in the year, and " + 
  numExercisesRemaining + " exercises remaining, which means you need to do " + 
  exercisesPerDay + " exercises per day to finish by " + completionDate + "!"
);



// How can I make daysLeftInYear and numExercisesRemaining get dynamic data?
