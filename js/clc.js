 var oF=document.getElementsByClassName('zhubaoxaign')[0];
    var oG=document.getElementsByClassName('zhu_add')[0];
    oF.onclick=function(){
    	var oH=Number(oG.innerHTML);
    	oH++;
    	oG.innerHTML=oH;
    	alert('加入成功');
    }