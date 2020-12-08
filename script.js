function display() {
 var link = document.getElementById(
  "img").value;
 document.getElementById("displayed")
  .src = link;

 var lol = document.getElementById(
  "Width").value = "250";
 document.getElementById("displayed")
  .width = lol;
 var hlol =
  document.getElementById("Height")
  .value = "250"
 document.getElementById("displayed")
  .height = hlol;
}


function change() {
 var width1 = document
  .getElementById("Width").value;
 document.getElementById("displayed")
  .width = width1;
}


function size() {
 var height1 = document
  .getElementById("Height").value;
 document.getElementById("displayed")
  .height = height1;
}
