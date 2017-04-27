//选项卡
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
//弹层
var oMainLeft = document.getElementById('main-left');
var aDialogLi = oMainLeft.getElementsByTagName('li');
var oDialogBox = getClass('dialog-box')[0];
var oDialogBody = getClass('dialog-body')[0];
var oDialogImg = oDialogBody.getElementsByTagName('img')[0];
var oDialogClose = getClass('dialog-close')[0];
var oDialogPrev = getClass('dialog-prev',oDialogBox)[0];
var oDialogNext = getClass('dialog-next',oDialogBox)[0];
var iNow = 0;

for (var i = 0; i < aDialogLi.length; i++) {
	aDialogLi[i].index = i;
	aDialogLi[i].onclick = function(){
		var oImg = this.getElementsByTagName('img')[0];
		oDialogBox.style.display = 'block';
		oDialogImg.src = oImg.src;
		iNow = this.index;
	}
}
//关闭弹层
oDialogBox.onclick = function(e){
	var target = e.target || event.srcElement;
	if(target == oDialogBox || target == oDialogClose){
		oDialogBox.style.display = 'none';
	}
}
oDialogPrev.onclick = function(){
	iNow--;
	if(iNow == -1){
		iNow = aDialogLi.length -1;
	}
	var prevLi = aDialogLi[iNow];
	oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;
}
oDialogNext.onclick = function(){
	iNow++;
	if(iNow == aDialogLi.length){
		iNow = 0;
	}
	var prevLi = aDialogLi[iNow];
	oDialogImg.src = prevLi.getElementsByTagName('img')[0].src;
}