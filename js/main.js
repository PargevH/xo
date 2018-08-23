var content;
var i;
var f2;
var ids = [];
var index;

function f1 () {
	content = document.getElementById('main_box');
for (i = 1; i < 10; i++) {
	content.innerHTML += "<div class='box' id='a"+i+"' onclick ='f2(this)'></div>";
	ids.push("a"+i);
	}
};

function f2 (obj_x) {
	if (obj_x.innerText != "") {
		return
	} 
		obj_x.innerText = "X";
		index = ids.indexOf(obj_x.id)
		ids.splice(index,1);
		f3("X");
		f_o();
}

function f_o (){
	p = (Math.floor(Math.random()*ids.length))
	document.getElementById(ids[p]).innerText = "O";
	ids.splice(p,1);
	f3("O")

}

function f3 (l) {
	if (document.getElementById("a1").innerText == l &&
		document.getElementById("a2").innerText == l &&
		document.getElementById("a3").innerText == l ||
		document.getElementById("a4").innerText == l &&
		document.getElementById("a5").innerText == l &&
		document.getElementById("a6").innerText == l ||
		document.getElementById("a7").innerText == l &&
		document.getElementById("a8").innerText == l &&
		document.getElementById("a9").innerText == l ||
		document.getElementById("a1").innerText == l &&
		document.getElementById("a4").innerText == l &&
		document.getElementById("a7").innerText == l ||
		document.getElementById("a2").innerText == l &&
		document.getElementById("a5").innerText == l &&
		document.getElementById("a8").innerText == l ||
		document.getElementById("a3").innerText == l &&
		document.getElementById("a6").innerText == l &&
		document.getElementById("a9").innerText == l ||
		document.getElementById("a1").innerText == l &&
		document.getElementById("a5").innerText == l &&
		document.getElementById("a9").innerText == l ||
		document.getElementById("a3").innerText == l &&
		document.getElementById("a5").innerText == l &&
		document.getElementById("a7").innerText == l ) {
		alert(l + " win")
	}
};


		