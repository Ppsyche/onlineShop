var oTabBox = document.getElementById('right-bottom'),
	aLi = oTabBox.getElementsByTagName('li'),
	aDiv = getClass('js-box',oTabBox);

	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for (var j = 0; j < aDiv.length; j++) {
				aDiv[j].style.display = 'none';
				aLi[j].className = '';
			}
			this.className = 'active';
			aDiv[this.index].style.display = 'block';
		}
	}