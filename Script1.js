// JavaScript source code

const datum = findGetParameter("datum")

function checking () {
	console.log(tid)
	console.log(datum)
 	console.log(bana)

 }
 function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
function kalender() {

	document.getElementById("top").innerHTML = "Kalender grejsilimojs. Du har ans�kt om att spela kl." + tid + ".00 den ";

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
// 	const button2 = document.querySelector('#button2');
// 	const radioButtons = document.querySelectorAll('input[name="valavbana"]');
//  button2.addEventListener("click", () => {
//  	let bana;
//  	for (const radioButton of radioButtons) {
//  		if (radioButton.checked) {
// 			bana = radioButton.value;
// 			document.getElementById("top").innerHTML = "Omklädningsrum grejsilimojs" + br + "";
// 			break;
//  		}
//  	}
	
//  })	
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
function omklcheck() {
	var temp1 = parseInt('man')
	var temp2 = parseInt('woman')
	var temp3 = parseInt('privat')
	if (temp1 == null || temp2 == null || temp3 == null){
		document.getElementById("top").innerHTML = "aj"
	}

}