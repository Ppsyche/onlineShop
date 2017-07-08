var oTbody = document.getElementsByTagName('tbody')[0];
var aTr = oTbody.getElementsByTagName('tr');

var oThead = document.getElementsByTagName('thead')[0];
var oTr = oThead.getElementsByTagName('tr')[0];
var oCheckAll = oTr.getElementsByTagName('input')[0];
var aCheck = getClass('checkbox',oTbody);

for (var i = 0; i < aTr.length; i++) {
	aTr[i].onclick = function(){
		var oCheck = this.getElementsByTagName('input')[0];
		if(this.className == 'selected'){
			this.className = '';
			oCheck.checked = false;
		}else{
			this.className = "selected";
			oCheck.checked = true;
		}
		//判断是否全被勾上
		var aCheckTr = getClass('selected',oTbody);
		if(aCheckTr.length == aTr.length){
			oCheckAll.checked = true;
		}
		else{
			oCheckAll.checked = false;
		}
		
	}
}

oCheckAll.onclick = function(){
	if(oCheckAll.checked == true){
		oCheckAll.checked = true;
		for (var i = 0; i < aTr.length; i++) {
			aTr[i].className = "selected";
			aCheck[i].checked = true;
		}
	}
	else{
		oCheckAll.checked = false;
		for (var i = 0; i < aTr.length; i++) {
			aTr[i].className = "";
			aCheck[i].checked = false;
		}
	}
}