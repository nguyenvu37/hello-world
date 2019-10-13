function generateObject() {
	var width = document.getElementById("widthInput").value;
    var height = document.getElementById("heightInput").value;
    var color = document.getElementById("colorInput").value;

  document.getElementById("object").style.backgroundColor = document.getElementById("colorInput").value;
  document.getElementById("object").style.width = document.getElementById("widthInput").value + "px";
  document.getElementById("object").style.height = document.getElementById("heightInput").value + "px";
}