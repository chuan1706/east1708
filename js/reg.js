
var oN = document.getElementById('username');
var oU = document.getElementById('userMsg');
var oU1 = document.getElementById('userMsg1');
var oU2 = document.getElementById('userMsg2');
var oU3 = document.getElementById('userMsg3');

var oP = document.getElementById('userpass');
var oS = document.getElementById('sure');
var oI = document.getElementById('userId');


document.getElementById('username').onblur = function () {
	var reg = /^1[3|4|5|7|8]\d{9}$/;
	var oN = parseInt(document.getElementById('username').value);
	if (reg.test(oN)===false) {
		oU.innerHTML = '×';
	}else{
		oU.innerHTML = '√';
	}
}



document.getElementById('userpass').onblur = function () {
	var reg = /^[a-zA-Z\d_]{8}$/;
	var oP =document.getElementById('userpass').value;
	if (reg.test(oP)===false) {
		oU1.innerHTML = '×';
	}else{
		oU1.innerHTML = '√';
	}
}


document.getElementById('userId').onblur = function () {
	var reg = /^\w+@\w+\.(com|net|cn|com.cn)$/i;
	var oI =document.getElementById('userId').value;
	if (reg.test(oI)===false) {
		oU3.innerHTML = '×';
	}else{
		oU3.innerHTML = '√';
	}
}

var oB = document.getElementById('btn');
oB.onclick=function(){
		//1、验证用户名和密码是否正确
		
		//2、保存cookie
		var d = new Date();
		d.setDate(d.getDate()+2);
		// document.cookie = "phone="+$("phone").value+";expires="+d.toGMTString();
		//3、跳转到首页
		alert('注册成功');

}