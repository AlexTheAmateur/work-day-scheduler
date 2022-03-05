$(document).ready(function () {
  const today = moment().format("MMM Do YY");
  $("#currentDay").text(today);

  console.log(moment());
});
function saveChanges(id) {
  tempArray = [];

  var changes = document.getElementById(id).innerHTML;
  tempArray.push(changes, id);
  localStorage.id = tempArray;
}
