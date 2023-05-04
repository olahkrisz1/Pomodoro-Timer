// select elements
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const pomodoroLengthInput = document.getElementById("pomodoro-length");

// set initial time
let time = 25 * 60; // 25 minutes in seconds

// update timer display -- 'toString()' method is used to convert the numbers to strings, and the 'padstart()' method
// is used to add a leading zero to the string if necessary to ensure that it always displays two digits.

function updateTimer() {
  let minutes = Math.floor(time / 60); // calculates the number of minutes remaining by dividing the total time (in seconds) by 60  and round down to the nearest integer.
  let seconds = time % 60; // calculates the number of seconds remaining by taking the remainder of the total time divided by 60.
  minutesSpan.textContent = minutes.toString().padStart(2, "0");
  secondsSpan.textContent = seconds.toString().padStart(2, "0");
}

// start the timer:
// setting up a timer interval using 'setInterval()' function, that repeatedly executes the function every 1000 milliseconds (every second)
// inside the function the code updates the timer display and checks whether the timer has reached zero.
// 'time--' this decrements the 'time' variable by one each time the arrow function is executed, which simulates the countdown of the timer.
// 'updateTimer() - updating the display of the timer on the page with the new 'time' value.
// 'if' condition checks if 'time' has reached zero, indicating that the timer has finished counting down. If it is, puts an alert "Time's Up"

let timerInterval;
startButton.addEventListener("click", function () {
  timerInterval = setInterval(function () {
    time--;
    updateTimer();
    if (time === 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
});

// reset the timer:
// 'clearInterval()' function stops the timer interval to ensure that the timer is not still running after reset.
// Then setting the 'time' variable to a new value based on the user's input in the 'pomodorolengthInput' element.
// 'parseInt()' function is used to convert the user's input from a string to an integer, and the value is multiplied by 60 to convert it from minutes to seconds.
// 'updateTimer() - updating the display of the timer on the page with the new 'time' value.

resetButton.addEventListener("click", function () {
  clearInterval(timerInterval);
  time = parseInt(pomodoroLengthInput.value) * 60;
  updateTimer();
});

// set the pomodoro length:
// when the value of the input element is changed, the function inside the curly braces are executed.
// setting the 'time' variable to a new value based on the user's input in the 'pomodoroLengthInput' element.
// 'parseInt()' function is to convert the user's input from a string to an integer, and the value is multiplied by 60 to convert it from minutes to seconds.
// 'updateTimer() - updating the display of the timer on the page with the new 'time' value.

pomodoroLengthInput.addEventListener("change", function () {
  time = parseInt(pomodoroLengthInput.value) * 60;
  updateTimer();
});
