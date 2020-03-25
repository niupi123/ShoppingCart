var nav = document.getElementsByClassName("nav")[0];
var mydiv = nav.getElementsByTagName("div");
var hua = document.getElementById("huadong");
var ig = document.getElementById("ig");
var con = document.getElementById("content_one");
var con2 = document.getElementById("content_two");
var add = document.getElementsByClassName("dd");
var mytr = document.getElementsByTagName("tr");
var p = document.getElementsByTagName("p")[0];
var bu = p.getElementsByTagName("button")[0];
var span = p.getElementsByTagName("span");
var i = 4;
for(var c = 0; c < mydiv.length; c++) {
	cao(mydiv[c]);
}

function cao(d) {
	d.onclick = function() {
		if(d == mydiv[0]) {
			hua.style.marginLeft = "0%";
			con.style.display = "block";
			con2.style.display = "none";
		}
		if(d == mydiv[1]) {
			hua.style.marginLeft = "30.3%";
			con.style.display = "none";
			con2.style.display = "block";
		}
		if(d == mydiv[2]) {
			hua.style.marginLeft = "60.6%";
			con.style.display = "none";
			con2.style.display = "none";
		}
	}
}
ig.onclick = function() {
	ig.style.marginTop = "2px";
}
for(var s = 0; s < add.length; s++) {
	kao(add[s]);
}

function kao(n) {
	var butt = n.getElementsByTagName("button")[0];
	var myspan = n.getElementsByTagName("span");
	var tab = document.getElementsByTagName("tbody")[0];
	//	var  anniu = $(add).find("button"); 
	var q = 0;
	butt.onclick = function() {
		if(q == 0) {
			tab.insertRow(i);
			i++;
			var rm = document.createElement("button");
			rm.innerText = "-";
			var ad = document.createElement("button");
			ad.innerText = "+";
			var che = document.createElement("input"); //新建的多选框 用来插入到新tr里面的第一个td
			che.type = "checkbox";
			var butt = document.createElement("button"); //新建的button 删除按钮 用来插入到新tr的最后一个td
			butt.innerText = "删除";
			var end = tab.lastChild;
			var dan1 = end.insertCell();
			dan1.appendChild(che);

			var dan2 = end.insertCell();
			dan2.innerHTML = "<i>" + myspan[0].innerText + "</i>";

			var dan3 = end.insertCell();
			dan3.innerHTML = "<span>" + myspan[1].innerText + "</span>";

			var dan4 = end.insertCell();
			dan4.innerHTML = "<span>" + myspan[2].innerText + "</span>";
			dan4.appendChild(ad);
			$(dan4).prepend(rm);
			var dan5 = end.insertCell();
			dan5.innerHTML = "<span>" + myspan[3].innerText + "</span>" + "元";

			var dan6 = end.insertCell();
			dan6.appendChild(butt);
			// 新增商品的 加减功能
			ob(end);

			function ob(en) {
				var inp = en.getElementsByTagName("input")[0];
				var mybutton = en.getElementsByTagName("button");
				var myspan = en.getElementsByTagName("span");
				inp.onclick = function() {
					if(inp.checked == true) {
						span[0].innerText = parseInt(span[0].innerText) + parseInt(myspan[1].innerText);
						span[1].innerText = parseInt(span[1].innerText) + parseInt(myspan[2].innerText);
					} else {
						span[0].innerText = parseInt(span[0].innerText) - parseInt(myspan[1].innerText);
						span[1].innerText = parseInt(span[1].innerText) - parseInt(myspan[2].innerText);
					}
				}
				mybutton[0].onclick = function() {
					if(inp.checked == true) {
						if(myspan[1].innerText > 0 ) {
							span[0].innerText = span[0].innerText - 1;
							span[1].innerText = span[1].innerText - myspan[0].innerText;
						}
					}
					if(myspan[1].innerText > 0) {
						myspan[1].innerText--;
						myspan[2].innerText = myspan[0].innerText * myspan[1].innerText;
					}

				}
				mybutton[1].onclick = function() {
					myspan[1].innerText++;
					myspan[2].innerText = myspan[0].innerText * myspan[1].innerText;
					if(inp.checked == true) {
						span[0].innerText = parseInt(span[0].innerText) + 1;
						span[1].innerText = parseInt(span[1].innerText) + parseInt(myspan[0].innerText);
					}
				}
				mybutton[2].onclick = function() {
					en.remove();
					if(inp.checked == true) {
						span[0].innerText = parseInt(span[0].innerText) - parseInt(myspan[1].innerText);
						span[1].innerText = parseInt(span[1].innerText) - parseInt(myspan[2].innerText);
					}
				}
			}
			q = 1;
			end.classList.add("n");
		} else {
//			             alert("已经添加过了");

             var s = document.getElementsByClassName("niu");
             alert("已经添加过了！")
		}
	}
}

// 基础商品的基础功能

for(var i = 1; i < mytr.length; i++) {
	d(mytr[i]);
}

function d(num) {
	var inp = num.getElementsByTagName("input");
	var mybutton = num.getElementsByTagName("button");
	var myspan = num.getElementsByTagName("span");
	inp[0].onclick = function() {
		if(inp[0].checked == true) {
			span[0].innerText = parseInt(span[0].innerText) + parseInt(myspan[1].innerText);
			span[1].innerText = parseInt(span[1].innerText) + parseInt(myspan[2].innerText);
		} else {
			span[0].innerText = parseInt(span[0].innerText) - parseInt(myspan[1].innerText);
			span[1].innerText = parseInt(span[1].innerText) - parseInt(myspan[2].innerText);
		}
	}
	mybutton[0].onclick = function() {
		if(inp[0].checked == true) {
			if(myspan[1].innerText > 0) {
				span[0].innerText = span[0].innerText - 1;
				span[1].innerText = span[1].innerText - myspan[0].innerText;
			}
		}
		if(myspan[1].innerText > 0) {
			myspan[1].innerText--;
			myspan[2].innerText = myspan[0].innerText * myspan[1].innerText;
		}
	}
	mybutton[1].onclick = function() {
		myspan[1].innerText++;
		myspan[2].innerText = myspan[0].innerText * myspan[1].innerText;
		if(inp[0].checked == true) {
			span[0].innerText = parseInt(span[0].innerText) + 1;
			span[1].innerText = parseInt(span[1].innerText) + parseInt(myspan[0].innerText);
		}
	}
	inp[1].onclick = function() {
		num.remove();
		if(inp[0].checked == true) {
			span[0].innerText = parseInt(span[0].innerText) - parseInt(myspan[1].innerText);
			span[1].innerText = parseInt(span[1].innerText) - parseInt(myspan[2].innerText);
		}
	}
}

function al() {
	var a = document.getElementsByTagName("input");
	if(a[0].checked == true) {
		span[0].innerText = 0;
		span[1].innerText = 0;
		for(var i = 0; i < a.length; i++) {
			a[i].checked = true;
		}
		for(var j = 1; j < mytr.length; j++) {
			var myspan = mytr[j].getElementsByTagName("span");
			span[0].innerText = parseInt(span[0].innerText) + parseInt(myspan[1].innerText);
			span[1].innerText = parseInt(span[1].innerText) + parseInt(myspan[2].innerText);
		}
	} else {
		for(var i = 1; i < a.length; i++) {
			a[i].checked = false;
		}
		span[0].innerText = 0;
		span[1].innerText = 0;
	}
}

function dele() {
	var mytr = document.getElementsByTagName("tr");
	for(var i = 1; i < mytr.length; i++) {
		var a = mytr[i].getElementsByTagName("input")[0];
		var myspan = mytr[i].getElementsByTagName("span");
		if(a.checked == true) {
			mytr[i].classList.add("cll");
			console.log(mytr[i]);
			if(span[0].innerText != 0) {
				span[0].innerText = parseInt(span[0].innerText) - parseInt(myspan[1].innerText);
				span[1].innerText = parseInt(span[1].innerText) - parseInt(myspan[2].innerText);
			}
		}
	}
	var del = document.getElementsByClassName('cll');
	var num = del.length;
	for(m = 0; m < num; m++) {
		xx = document.getElementsByClassName('cll')[0];
		xx.remove();
	}
}