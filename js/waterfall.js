window.onload = function() {
	waterFall('picture-waterfall', 'box');
	var dataInt = {'data':[{'src': 'img/york1000750.jpg'},{'src': 'img/york1000800.jpg'},{'src': 'img/york1024703..jpg'},{'src': 'img/york1024714.jpg'},{'src': 'img/york1024768.jpg'},{'src': 'img/york1200798.jpg'},{'src': 'img/york1200900.jpg'},{'src': 'img/york16001067.jpg'},{'src': 'img/york16001200.jpg'},{'src': 'img/york380252.jpg'},{'src': 'img/york447312.jpg'},{'src': 'img/york500333.jpg'},{'src': 'img/york500367.png'},{'src': 'img/york546352.jpg'},{'src': 'img/york550345.jpg'},{'src': 'img/york625263.jpg'},{'src': 'img/york720240.jpg'},{'src': 'img/1.jpg'},{'src': 'img/2.jpg'},{'src': 'img/3.jpg'},{'src': 'img/4.jpg'},{'src': 'img/7.jpg'},{'src': 'img/5.jpeg'},{'src': 'img/6.jpg'},{'src': 'img/7.jpeg'},{'src': 'img/8.jpg'},{'src': 'img/9.jpg'},{'src': 'img/10.jpg'}]};
	window.onscroll = function() {
		if(CheckIt()) {
			var oParent = document.getElementById('picture-waterfall');
			for ( var i=0; i<dataInt.data.length; i++) {
				var newBox = document.createElement('div');
				newBox.className = 'box';
				oParent.appendChild(newBox);
				var newImg = document.createElement('img');
				newImg.src = dataInt.data[i].src;
				newBox.appendChild(newImg);
			}
			waterFall('picture-waterfall', 'box');
		}
	}
}

function waterFall(parent, box) {
	var oParent = document.getElementById(parent);
	var boxs = document.getElementsByClassName(box);
	//console.log(boxs);
	var boxW = boxs[0].offsetWidth;
	//console.log(boxW);
	var cols = Math.floor(document.documentElement.clientWidth/boxW);
	//console.log(cols);
//	var footWrap = document.getElementById('foot-wrap');
	oParent.style.width = cols*boxW + 'px';
	oParent.style.margin = '0 auto';
//	footWrap.style.position = 'absolute';
	var hArr = [];
	for (var i=0; i<boxs.length; i++) {
		var boxH = boxs[i].offsetHeight;
		if ( i<cols) {
			hArr.push(boxH);
			//console.log(hArr);
		} else {
			var minH = Math.min.apply(null, hArr);						
			var minIndex = hArr.indexOf(minH);
			boxs[i].style.position = 'absolute';
			boxs[i].style.top = hArr[minIndex] + 'px';
			boxs[i].style.left = minIndex*boxW + 'px';
			hArr[minIndex] += boxs[i].offsetHeight;
//			var maxH = Math.max.apply(null, hArr);
//			footWrap.style.top = 580+420+maxH +'px';
		}
	}
	return hArr;
}

function CheckIt() {
	var oBox = document.getElementsByClassName('box');
	var hArray = new waterFall('picture-waterfall', 'box');
	var minHline = Math.min.apply(null, hArray);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var winH = document.body.clientHeight || document.documentElement.clientHeight;
	console.log(minHline);
	console.log(scrollTop+winH);
	return (minHline < scrollTop+winH) ?true:false;
}
