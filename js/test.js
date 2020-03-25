var a = document.getElementsByTagName("li");
var p = document.getElementsByTagName("p")[0];
var span = p.getElementsByTagName("span");
var num = 0;
var pri = 0;
for(var i = 0; i < a.length; i++) {
	Kai(a[i]);
}

function Kai(ob) {
	var inp = ob.getElementsByTagName("input");
	var strong = ob.getElementsByTagName("strong")[0];
	var em = ob.getElementsByTagName("em")[0];
	var ospan = ob.getElementsByTagName("span")[0];
	var s = ob.getElementsByTagName("a")[0];
	inp[0].onclick = function() {
		if(inp[0].checked == true) {
			span[0].innerText = parseInt(span[0].innerText) + parseInt(strong.innerText);
			span[1].innerText = parseInt(span[1].innerText) + parseInt(ospan.innerText);
		} else {
			span[0].innerText = span[0].innerText - strong.innerText;
			span[1].innerText = span[1].innerText - ospan.innerText;
		}
	}
	inp[1].onclick = function() {
		if(strong.innerHTML > 0) {
			num--;
			strong.innerHTML--;
			pri -= parseFloat(em.innerHTML);
			ospan.innerHTML = parseFloat(em.innerHTML) * strong.innerHTML;
		}
		if(inp[0].checked == true & strong.innerText > 0) {
				span[0].innerText = span[0].innerText - 1;
			span[1].innerText = span[1].innerText - em.innerText;
		}
		if(strong.innerText == 0){
			span[0].innerText = 0;
			span[1].innerText = 0;
		}
	}
	inp[2].onclick = function() {
		num++;
		strong.innerHTML++;
		pri += parseFloat(em.innerHTML);
		ospan.innerHTML = parseFloat(em.innerHTML) * strong.innerHTML;
		if(inp[0].checked == true) {
			span[0].innerText = parseInt(span[0].innerHTML) + 1;
			span[1].innerText = parseInt(span[1].innerText) + parseInt(em.innerText);
		}
	}
	s.onclick = function() {
		ob.remove();
		if(inp[0].checked == true){
		span[0].innerText = span[0].innerText - strong.innerText;
		span[1].innerText = parseInt(span[1].innerText) - parseInt(ospan.innerText);
		}
	}
}

function giao() {
	var mybutton = document.getElementById("election");
	var ol = document.getElementsByName("lo");
	if(mybutton.checked == true) {
		span[0].innerText = 0;
		span[1].innerText = 0;
		for(var i = 0; i < ol.length; i++) {
			var strong = a[i].getElementsByTagName("strong")[0];
			var ospan = a[i].getElementsByTagName("span")[0];
			ol[i].checked = true;
			span[0].innerText = parseInt(span[0].innerText) + parseInt(strong.innerText);
			span[1].innerText = parseInt(span[1].innerText) + parseInt(ospan.innerText);
		}
	} else {
		for(var i = 0; i < ol.length; i++) {
			ol[i].checked = false;
		}
		span[0].innerText = 0;
		span[1].innerText = 0;
	}
}

function delet() {
	var a = document.getElementsByTagName('li');
	for(i = 0; i < a.length; i++) {
		var chk = a[i].getElementsByTagName('input')[0];
		var strong = a[i].getElementsByTagName("strong")[0];
	    var ospan = a[i].getElementsByTagName("span")[0];
		if(chk.checked == true) {
			a[i].classList.add("active");
			span[0].innerText = span[0].innerText - strong.innerText;
		    span[1].innerText = parseInt(span[1].innerText) - parseInt(ospan.innerText);
		}
	}
	var del = document.getElementsByClassName('active');
	var num = del.length;
	for(m = 0; m < num; m++) {
		xx = document.getElementsByClassName('active')[0];
		xx.remove();
	}
}