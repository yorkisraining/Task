function addLoadEvent(func) {
	var oldload = window.onload;
	if(typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldload();
			func();
		}
	}
}

function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (Parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}

function addClass(element, value) {
	if (!element.className) {
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " " + value;
		element.className = newClassName;
	}
}

function getChild(parent) {
	var B = document.getElementById(parent);
	var A = B.childNodes;
	var childs = [];
	for (var i=0; i<A.length; i++) {
		if(A[i].nodeType != 3) {
			childs.push(A[i]);
		}
	}
	return childs;
}

function getTargetChild(parent, target) {
	var B = document.getElementById(parent);
	var A = B.childNodes;
	var childs = [];
	for (var i=0; i<A.length; i++) {
		if(A[i].nodeName != target) {
			childs.push(A[i]);
		}
	}
	return childs;
}


window.onload = function() {
	//页面底部的向上箭头
	circleMove();
	//页面底部input框点击效果
	clickEmail();
}

var times;
function circleMove() {
	clearInterval(times);
	times =setInterval(function() {
		var icon = document.getElementById('iconfont-top');
		startMove(icon, {'top': -15, 'opacity': 0},10, function() {
			icon.style.top = 15 + 'px';
			startMove(icon, {'top': 0, 'opacity': 100}, 10)
		});
	}, 1500);
}

function clickEmail() {
	var email = document.getElementsByClassName('email-input')[0];
	console.log(email);
	email.onfocus = function() {
		startMove(email, {'opacity': 100}, 30);
	}
	email.onblur = function() {
		startMove(email, {'opacity': 80}, 30);
	}
}

function getStyle(obj, attr) {
	if (obj.currentSyle) {
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, false)[attr];
	}
}

function startMove(obj, json, quick, fn) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		for (var attr in json) {
			var flag = true;
			var icur = 0;
			if (attr == "opacity") {
				icur = Math.round(parseFloat(getStyle(obj, attr))*100);
			} else {
				icur = parseInt(getStyle(obj, attr));
			}
			var speed = (json[attr] - icur)/10;
			speed = speed > 0 ? Math.ceil(speed):Math.floor(speed);
			if (icur != json[attr]) {
				flag = false;
			}
			if (attr == "opacity") {
				obj.style.filter = "alpha(opacity:" +(icur + speed)+ ")";
				obj.style.opacity = (icur+speed)/100;
			} else {
				obj.style[attr] = icur + speed + "px";
			}
		}
		if (flag) {
			clearInterval (obj.timer);
			if (fn) {
				fn();
			}
		}
	}, quick);
}



//function ToBig(obj, target, icur) {
//	obj.style.fontSize = icur + 'px';
//	var current = icur;
//	if (icur > target) {
//		target --;		
//	}	else if ( icur < target) {
//			target --;
//		} else {
//		break;		
//	}
//}
//
