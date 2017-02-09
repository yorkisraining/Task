window.onload =function() {
	var btnShowAll = document.getElementsByClassName('click-show');
	for ( var i=0; i<btnShowAll.length; i++) {
		btnShowAll[i].onfocus = function() {
			var _this = this.parentNode.getElementsByClassName('hidden')[0];
//			console.log(_this);
			_this.style.display = 'block';
		}
	}
	var closeIt = document.getElementsByClassName('closet');
	for (var n=0; n<closeIt.length; n++) {
		closeIt[n].onclick = function() {
			var _thisPra = this.parentNode;
			console.log(_thisPra);	
			_thisPra.style.display = 'none';
		}
	}
}
