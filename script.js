$(document).ready(function () {
  const today = moment().format("MMM Do YY");
  $("#currentDay").text(today);
});
var tempArray = [];
var loadTasks = function () {
  var savedTasks = localStorage.getItem("planner");
  if (savedTasks === null) {
    return false;
  }
  tempArray = JSON.parse(savedTasks);
  for (var i = 0; i < tempArray.length; i++) {
    document.getElementById(tempArray[i].id).innerHTML = tempArray[i].info;
  }
};

function saveChanges(taskId) {
  var changes = document.getElementById(taskId).innerHTML;
  var tempObj = { id: taskId, info: changes };
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i].id === taskId) {
      tempArray[i].info = changes;
      localStorage.setItem("planner", JSON.stringify(tempArray));
      return;
    }
  }
  tempArray.push(tempObj);

  localStorage.setItem("planner", JSON.stringify(tempArray));
}

for (let i = 8; i < 21; i++) {
  if (i < moment().format("HH")) {
    document.getElementById(i).classList.add("past");
  } else if (i > moment().format("HH")) {
    document.getElementById(i).classList.add("future");
  } else {
    document.getElementById(i).classList.add("present");
  }
}

loadTasks();
