// JavaScript source code
function spara() {
	var datum = document.getElementById("datum").value;
	var tid = document.getElementById("time").value;
	console.log(tid)
	console.log(datum)
}
function kalender() {

	document.getElementById("bodystuffing").innerHTML = "Kalender grejsilimojs. Du har ans�kt om att spela kl." + tid + ".00 den ";

}
function banor() {
	document.getElementById("bodystuffing").innerHTML = "Banor grejsilimojs";
}
function omkl() {
	document.getElementById("bodystuffing").innerHTML = "Omkl�dningsrum grejsilimojs";
}
function bastu() {
	document.getElementById("bodystuffing").innerHTML = "Bastu grejsilimojs";
}