// JavaScript source code

function spara() {
	var datum = document.getElementById("datum").value;
	var tid = document.getElementById("time").value;
	const button2 = document.querySelector('#button2');
	const radioButtons = document.querySelectorAll('input[name="valavbana"]');
	button2.addEventListener("click", () => {
		let bana;
		for (const radioButton of radioButtons) {
			if (radioButton.checked) {
				bana = radioButton.value;
				break;
			}
		}
	})
	console.log(tid)
	console.log(datum)
	console.log(bana)

}
function kalender() {

	document.getElementById("top").innerHTML = "Kalender grejsilimojs. Du har ansökt om att spela kl." + tid + ".00 den ";

}
function banor() {
	document.getElementById("top").innerHTML = "Banor grejsilimojs";
}
function bokbana() {
	document.getElementById("banor").hidden = "";
	document.getElementById("button1").hidden = "hidden";
}
function bokomkl() {
	document.getElementById("omkl").hidden = "";
	document.getElementById("button2").hidden = "hidden";
}
function bokbastu() {
	document.getElementById("bastu").hidden = "";
	document.getElementById("button3").hidden = "hidden";
}
function omkl() {
	document.getElementById("top").innerHTML = "Omklädningsrum grejsilimojs";
}
function bastu() {
	document.getElementById("top").innerHTML = "Bastu grejsilimojs";
}